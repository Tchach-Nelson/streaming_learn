import React, { useState, useEffect, useRef } from "react";
import "./chat.scss";
import Cookies from "js-cookie";

function Chat() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [prevMessages, setPrevMessages] = useState([]);
  const scrollableDivRef = useRef(null);

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
    if (JSON.stringify(messages) !== JSON.stringify(prevMessages)) {
      scrollDiv();
      setPrevMessages(messages);
    }
  }, [messages, prevMessages]);

  return (
    <div className="chat">
      <div className="option">
        <button>Liste des cours</button>
        <button className="actif">Chat</button>
      </div>
      <div className="bloc-message" ref={scrollableDivRef}>
        {messages.map((message) => (
          <div
            key={message.idMessage}
            className={`user-mess ${
              message.idUser == Cookies.get("idUser") ? "my-mess" : ""
            }`}
            title={message.userNom}
          >
            <div className="profil-mess"></div>
            <div className="message">
              <span className="nom-user">{message.userNom}</span>
              {message.contenu}
              <span className="heure">{message.heure}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="bloc-saisie">
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
  );
}

export default Chat;
