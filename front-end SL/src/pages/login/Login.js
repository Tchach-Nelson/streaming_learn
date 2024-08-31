import React, { useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showWindow, setShowWindow] = useState(false);
  const [windowMessage, setWindowMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (username.length == 0 || password.length == 0) {
      setWindowMessage("Remplissez les 2 champs.");
      setShowWindow(true);
      return false;
    }

    const userData = {
      nom: username,
      pass: password,
    };

    fetch("http://192.168.118.18:3032/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(async (data) => {
        if (data.message) {
          setWindowMessage(
            "Ce compte n'existe pas.\nVeuillez vérifier et bien remplir les champs."
          );
          setShowWindow(true);
        } else {
          // Handle other cases based on data.type
          if (data.status == 0) {
            setWindowMessage(`Désolé ${data.nom} votre compte est bloqué `);
            setShowWindow(true);
            return false;
          }

          Cookies.set("idUser", data.idUser, { expires: 7 }); //7 jours avant la suppression
          Cookies.set("nom", data.nom, { expires: 7 });
          Cookies.set("pass", data.pass, { expires: 7 });
          Cookies.set("date", data.date, { expires: 7 });
          Cookies.set("email", data.email, { expires: 7 });
          Cookies.set("sexe", data.sexe, { expires: 7 });
          Cookies.set("type", data.type, { expires: 7 });
          Cookies.set("telephone", data.telephone, { expires: 7 });
          Cookies.set("status", data.status, { expires: 7 });

          setWindowMessage(`Bienvenue sur votre plateforme ${data.nom} `);
          setShowWindow(true);
          await new Promise((resolve) => setTimeout(resolve, 3000)); //attendre 3s

          switch (data.type) {
            case "Etudiant":
              try {
                const etudiantReponse = await fetch(
                  `http://192.168.118.18:3032/etudiant/info/${Cookies.get(
                    "idUser"
                  )}`,
                  {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                );

                if (!etudiantReponse.ok) {
                  throw new Error("Network response was not ok");
                }

                const etudiant = await etudiantReponse.json();

                Cookies.set("matricule", etudiant.etudiant.matricule, {
                  expires: 7,
                });
                Cookies.set("idClasse", etudiant.etudiant.idClasse, {
                  expires: 7,
                });
                Cookies.set("idScolarite", etudiant.etudiant.idScolarite, {
                  expires: 7,
                });
                Cookies.set(
                  "lettreMotivation",
                  etudiant.etudiant.lettreMotivation,
                  { expires: 7 }
                );
                Cookies.set("bourse", etudiant.etudiant.bourse, { expires: 7 });
                Cookies.set("specialite", etudiant.etudiant.specialite, {
                  expires: 7,
                });
                Cookies.set("niveau", etudiant.etudiant.niveau, { expires: 7 });
                Cookies.set("diplomeNature", etudiant.etudiant.diplomeNature, {
                  expires: 7,
                });
                Cookies.set("diplome", etudiant.etudiant.diplome, {
                  expires: 7,
                });
                Cookies.set("bulletin", etudiant.etudiant.bulletin, {
                  expires: 7,
                });
                Cookies.set("redoublant", etudiant.etudiant.redoublant, {
                  expires: 7,
                });
              } catch (error) {
                console.error(
                  "Erreur lors de la récupération des informations de l'étudiant:",
                  error
                );
              }

              navigate("/studentDashbord");
              break;
            case "Prof":
              navigate("/teacherDashbord");
              break;
            case "Admin":
              // alert('ADMIN');
              window.location.href = "http://192.168.118.18:3001/";
              break;
            default:
              break;
          }
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        // Display error message or retry logic
      });
  };

  const closeWindow = () => {
    setShowWindow(false);
  };

  return (
    <div className="login">
      {showWindow && (
        <div className="window" onClick={closeWindow}>
          <div className="window-content" style={{ whiteSpace: "pre-line" }}>
            {windowMessage}
          </div>
        </div>
      )}
      <div className="section-input">
        <form>
          <div className="bulle-H">
            <img
              src="images/icone/plume2.svg"
              alt="plume"
              className="ico-plune"
            />
          </div>
          <br />
          <div className="bloc-mail">
            <img src="images/icone/mail.svg" alt="mail" className="ico-mail" />
            <input
              required
              type="text"
              placeholder="Entrez votre nom"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <br />
          <div className="bloc-pass">
            <img src="images/icone/pass.svg" alt="pass" className="ico-pass" />
            <input
              required
              type="password"
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="bulle-B"></div>
        </form>
      </div>
      <div className="bulle-DecoH1"></div>
      <div className="bulle-DecoH2"></div>
      <div className="bulle-DecoB1"></div>
      <div className="bulle-DecoB2"></div>
      <div className="section-option">
        <br />
        <br />
        <br />
        <button className="btn-pass">Mot de passe oublié ?</button>
        <div className="profil">
          <div className="load"></div>
          <div className="load-G"></div>
          <div className="load"></div>
        </div>
        <button onClick={handleLogin} className="btn-valider">
          Valider
        </button>
        <br />
        <Link to={"/createAccount"}>
          <button className="btn-create"> Créer un compte</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
