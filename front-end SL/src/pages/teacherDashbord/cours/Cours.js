import React, { useState, useEffect } from "react";
import "./cours.scss";
import io from "socket.io-client";
import Peer from "peerjs";
import axios from "axios";
import Cookies from "js-cookie";

function Cours() {
  const [displayStream, setDisplayStream] = useState(null);
  const [textBtn, setTextBtn] = useState("DEBUT");
  const [textVideo, setTextVideo] = useState("VIDEO");
  const [infoProf, setInfoProf] = useState(null);

  useEffect(() => {
    infoProfAll();
  }, []);

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
    const myVideo = document.getElementById("videoProf");
    myVideo.muted = true;

    if (textBtn === "DEBUT") {
      const ROOM_ID = await createROOMID();
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

      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });

      const audio = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100,
        },
      });

      const mixedStream = new MediaStream([
        ...stream.getTracks(),
        ...audio.getTracks(),
      ]);

      setDisplayStream(mixedStream);
      addVideoStream(myVideo, mixedStream);

      socket.on("user-connected", (userId) => {
        connectToNewUser(userId, mixedStream);
        console.log("user connected:", userId);
      });

      socket.on("user-disconnected", (userId) => {
        if (peers[userId]) {
          peers[userId].close();
        }
      });

      socket.emit("join-room", ROOM_ID, myPeer.id);

      myPeer.on("open", (id) => {
        console.log("Connected with ID:", id);
      });

      function connectToNewUser(userId, stream) {
        const call = myPeer.call(userId, stream);
        call.on("stream", (userVideoStream) => {
          // Handle the user's video stream
        });
        call.on("close", () => {
          // Handle call close
        });

        peers[userId] = call;
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
        <video id="videoProf" style={{ height: "100%" }}></video>
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
    </div>
  );
}

export default Cours;
