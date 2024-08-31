import React, { useState, useEffect, useRef } from "react";
import "./cours.scss";
import io from "socket.io-client";
import Peer from "peerjs";
import axios from "axios";
import Cookies from "js-cookie";

function Cours() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const scrollableDivRef = useRef(null);
  const [textVideo, setTextVideo] = useState("VIDEO");

  const scrollDiv = () => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop =
        scrollableDivRef.current.scrollHeight;
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMessage = {
      idMessage: null,
      idCours: 0,
      contenu: inputValue,
      heure: new Date().toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      date: new Date().toISOString().split("T")[0], // format date as YYYY-MM-DD
      type: "message",
      idUser: Cookies.get("idUser"),
      idClasse: Cookies.get("idClasse"),
      userNom: Cookies.get("nom"),
    };

    try {
      const response = await fetch("http://192.168.118.18:3032/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessage),
      });

      if (response.ok) {
        setInputValue("");
        fetchMessages();
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await fetch("http://192.168.118.18:3032/message");
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      } else {
        console.error("Failed to fetch messages");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    scrollDiv();
  }, [messages]);

  const demandeROOMID = async () => {
    try {
      const response = await axios.get(
        `http://192.168.118.18:3032/cours/connectCours/${Cookies.get("idClasse")}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const roomId = response.data;
      return roomId;
    } catch (error) {
      console.error("Erreur lors de l'envoi des données:", error);
    }
  };

  const handleStartStudent = async () => {
    setTextVideo(
      <div>
        <br />
      </div>
    );
    const ROOM_ID = await demandeROOMID();
    let peers = {};

    if (ROOM_ID === "Non programmé") {
      alert("VOUS N'ETES PAS PROGRAMME");
      return false;
    }

    const socket = io("http://192.168.118.18:3031/");
    const myPeer = new Peer(undefined, {
      host: "/",
      port: "3030",
    });

    const myVideo = document.getElementById("videoEtu");
    const myAudio = document.getElementById("audioEtu");

    if (!myVideo || !myAudio) {
      console.error("Les éléments vidéo ou audio ne peuvent pas être trouvés.");
      return;
    }
    myVideo.muted = true;
    myAudio.muted = false;

    if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
      navigator.mediaDevices
        .getDisplayMedia({
          video: true,
          audio: true,
        })
        .then((stream) => {
          addVideoStream(myVideo, stream);
          addAudioStream(myAudio, stream);

          myPeer.on("call", (call) => {
            call.answer(stream);

            call.on("stream", (userStream) => {
              addVideoStream(myVideo, userStream);
              addAudioStream(myAudio, userStream);
            });
          });

          socket.on("user-disconnected", (userId) => {
            if (peers[userId]) {
              peers[userId].close();
            }
          });

          socket.emit("join-room", ROOM_ID, myPeer.id);

          socket.on("user-connected", (userId) => {
            connectToNewUser(userId, stream);
          });
        })
        .catch((error) => {
          console.error("Error accessing display media: ", error);
        });
    } else {
      console.error("getDisplayMedia API is not supported in this browser.");
    }

    myPeer.on("open", (id) => {
      console.log("Connected with ID:", id);
    });

    function connectToNewUser(userId, stream) {
      const call = myPeer.call(userId, stream);

      call.on("stream", (userStream) => {
        addVideoStream(myVideo, userStream);
        addAudioStream(myAudio, userStream);
      });

      call.on("close", () => {
        myVideo.remove();
        myAudio.remove();
      });

      peers[userId] = call;
    }

    function addVideoStream(video, stream) {
      video.srcObject = stream;
      video.addEventListener("loadedmetadata", () => {
        video.play();
      });
    }

    function addAudioStream(audio, stream) {
      audio.srcObject = stream;
      audio.addEventListener("loadedmetadata", () => {
        audio.play();
      });
    }
  };

  return (
    <div className="cours">
      <div className="bloc-video ">
        <div className="nom-prof">Mr nomProf</div>
        <video id="videoEtu"></video>
        <audio id="audioEtu" autoPlay></audio>
        <div className="affiche-video">{textVideo}</div>
        <div className="bloc-outil">
          <hr />
          <div>
            <img
              src="../images/icone/micro.svg"
              alt="micro"
              className="ico-micro"
            />
            <img
              src="../images/icone/partage.svg"
              alt="partage"
              className="ico-partage"
            />
            <button onClick={handleStartStudent}>00 h</button>
            <img
              src="../images/icone/plein_ecran.svg"
              alt="plein_ecran"
              className="ico-plein_ecran"
            />
            <img
              src="../images/icone/param.svg"
              alt="param"
              className="ico-param"
            />
          </div>
        </div>
      </div>
      <div className="bloc-chat">
        <div className="option">
          <button className="actif">Message</button>
          <button>Participant</button>
        </div>
        <div className="chat" ref={scrollableDivRef}>
          <br />
          {messages.map((message) => (
            <div
              key={message.idMessage}
              className={`user-mess ${
                message.idUser == Cookies.get("idUser") ? "my-mess" : ""
              }`}
              title={message.userNom}
            >
              <div className="profil-mess">
                <span>{`${message.userNom}`.slice(0, 12)}</span>
              </div>
              <div className="message">{message.contenu}</div>
            </div>
          ))}
        </div>
        <div className="bloc-send">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Entrez votre message"
            />
            <button type="submit">
              <img
                src="../images/icone/envoyer.svg"
                alt="envoyer"
                className="ico-envoyer"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cours;
