import React, { useState, useEffect } from "react";
import "./cours.scss";
import io from "socket.io-client";
import Peer from "peerjs";
import axios from "axios";
import Cookies from "js-cookie";

function Cours() {
  // const [formData, setFormData] = useState({
  //     prof: 'Maka',
  //     cours: 'phIlo',
  //     classe: 'GSI 1',
  // });
  const [displayStream, setDisplayStream] = useState(null);
  const [textBtn, setTextBtn] = useState("DEBUT");
  const [textVideo, setTextVideo] = useState("VIDEO");
  const [infoProf, setInfoProf] = useState();

  useEffect(() => {
    infoProfAll();
  }, []);

  // const createROOMID = async () => {
  //     try {
  //       const response = await axios.post('http://192.168.118.18:3031/uuidProf', formData, {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       });

  //       const roomId = response.data;
  //       return roomId;

  //     } catch (error) {
  //       console.error('Erreur lors de l\'envoi des données:', error);
  //     }
  // };

  const infoProfAll = async () => {
    try {
      const response = await axios.post(
        "http://192.168.118.18:3032/user/join",
        {
          table1: "utilisateur",
          table2: "professeur",
          cle1: "idUser",
          cle2: "idUser",
          valeur: `${Cookies.get("idUser")}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const info = response.data;
      setInfoProf(info);
    } catch (error) {
      console.error("Erreur lors de l'envoi des données:", error);
    }
  };

  const createROOMID = async () => {
    try {
      const response = await axios.get(
        `http://192.168.118.18:3032/cours/startCours/${infoProf[0].idProf}-${infoProf[0].nom}`,
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

  const handleStartProf = async () => {
    console.log(infoProf);
    // console.log(uuid);

    //    let displayStream;
    const myVideo = document.getElementById("videoProf");
    myVideo.muted = true;

    if (textBtn == "DEBUT") {
      const ROOM_ID = await createROOMID();
      let peers = {};

      if (ROOM_ID == "Non programmé") {
        alert("VOUS N'ETES PAS PROGRAMME");
        return false;
      }

      const socket = io("http://192.168.118.18:3031/");
      const myPeer = new Peer(undefined, {
        host: "/",
        port: "3030",
      });

      navigator.mediaDevices
        .getDisplayMedia({
          video: true,
          audio: true,
        })
        .then((stream) => {
          setDisplayStream(stream);
          // displayStream = stream;
          addVideoStream(myVideo, stream);

          socket.on("user-connected", (userId) => {
            connectToNewUser(userId, stream);
            console.log("user connected:", userId);
          });

          socket.on("user-disconnected", (userId) => {
            if (peers[userId]) {
              peers[userId].close();
            }
          });

          socket.emit("join-room", ROOM_ID, myPeer.id);
        });

      myPeer.on("open", (id) => {
        console.log("Connected with ID:", id);
      });

      function connectToNewUser(userId, stream) {
        const call = myPeer.call(userId, stream);
      }

      function addVideoStream(video, stream) {
        video.srcObject = stream;
        video.addEventListener("loadedmetadata", () => {
          video.play();
        });
      }
      setTextVideo(
        <div>
          <br />
        </div>
      );
      setTextBtn("STOP");
    } else {
      if (displayStream) {
        displayStream.getTracks().forEach((track) => {
          track.stop();
        });
        myVideo.srcObject = null;
        setDisplayStream(null);
      }
      myVideo.srcObject = null;
      setTextVideo("VIDEO");
      setTextBtn("DEBUT");
    }
  };

  return (
    <div className="cours">
      <div className="bloc-video">
        <div className="nom-prof">Effectifs: 10</div>
        <video id="videoProf" style={{ height: "10000" }}></video>
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
            <button onClick={handleStartProf}>{textBtn}</button>
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
      {/* <div className='bloc-chat'>
            <div className='option'>
                <button className='actif'>Message</button>
                <button>Participant</button>
            </div>
            <div className='chat'>
                <br/>
                <div className='user-mess'>
                    <div className='profil-mess'></div>
                    <div className='message'>message du professeur</div>
                </div>
                <div className='user-mess'>
                    <div className='profil-mess'></div>
                    <div className='message'>message du professeur</div>
                </div>
                <div className='user-mess my-mess'>
                    <div className='message'>message du professeur</div>
                    <div className='profil-mess'></div>
                </div>
            </div>
            <div className='bloc-send'>
                <input type='text' placeholder='Entrez votre message' />
                <span><img src='../images/icone/envoyer.svg' alt='envoyer' className='ico-envoyer'/></span>
            </div>
        </div> */}
    </div>
  );
}

export default Cours;
