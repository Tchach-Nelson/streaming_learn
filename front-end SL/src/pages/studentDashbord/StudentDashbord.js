import React, { useEffect } from "react";
import { Outlet } from "react-router";
import "./studentDashbord.scss";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";

function StudentDashbord() {
  const navigate = useNavigate();

  useEffect(() => {
    const idUserCookie = Cookies.get("idUser");

    // verifier s' il est loger
    if (!idUserCookie) {
      navigate("/");
    }
  }, []);

  const logOut = () => {
    Cookies.remove("idUser");
    Cookies.remove("nom");
    Cookies.remove("pass");
    Cookies.remove("date");
    Cookies.remove("email");
    Cookies.remove("sexe");
    Cookies.remove("type");
    Cookies.remove("telephone");
    Cookies.remove("status");

    navigate("/");
  };

  return (
    <div className="StudentDashbord">
      <div className="navBar">
        <div className="logo">
          {" "}
          <img
            src="../images/icone/plume2.svg"
            alt="plume"
            className="ico-plune"
          />
          <Link to={"/"}>
            <h1>Streaming learn</h1>{" "}
          </Link>
        </div>
        <div className="user">
          <div className="search">
            <input type="text" placeholder="search" />
            <img
              src="../images/icone/search.svg"
              alt="search"
              className="ico-search"
            />
          </div>
          <div className="user-info">
            <div className="profil-nav ">
              {" "}
              <img
                width={45}
                height={45}
                style={{
                  marginLeft: 2,
                  marginTop: 2,
                  borderRadius: "100%",
                  objectFit: "cover",
                }}
                src={`http://192.168.118.18:3032/user/file/${Cookies.get(
                  "matricule"
                )}-profilePhoto.png`}
              />{" "}
            </div>
            <span>
              {Cookies.get("nom")} <span> (Etudiant) </span>
            </span>
            <span onClick={logOut} style={{ cursor: "pointer" }}>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </span>
          </div>
        </div>
      </div>

      <div className="bloc">
        <div className="menu">
          <br />
          <br />
          <div className="menu-principal">
            <h3>Principal</h3>
            <div className="element">
              <Link to={"/studentDashbord"}>
                <img
                  src="../images/icone/home.svg"
                  alt="home"
                  className="ico-home"
                />
                <span>Acceuil</span>
              </Link>
            </div>
            <div className="element">
              <Link to={"/studentDashbord/myProfil"}>
                <img
                  src="../images/icone/profil.svg"
                  alt="profil"
                  className="ico-profil"
                />
                <span>Profil</span>
              </Link>
            </div>
          </div>
          <div className="menu-general">
            <h3>General</h3>
            <div className="element">
              <Link to={"/studentDashbord/cours"}>
                <img
                  src="../images/icone/video.svg"
                  alt="video"
                  className="ico-video"
                />
                <span>Cours</span>
              </Link>
            </div>
            <div className="element">
              <Link to={"/studentDashbord/EmploiDuTemps"}>
                <img
                  src="../images/icone/emploi.svg"
                  alt="emploi"
                  className="ico-emploi"
                />
                <span>Emploi de temps</span>
              </Link>
            </div>
            <div className="element">
              <Link to={"/studentDashbord/chat"}>
                <img
                  src="../images/icone/chat.svg"
                  alt="chat"
                  className="ico-chat"
                />
                <span>Chat</span>
              </Link>
            </div>
            <div className="element">
              <Link to={"/studentDashbord/scolarite"}>
                <img
                  src="../images/icone/money.svg"
                  alt="money"
                  className="ico-money"
                />
                <span>Scolarité</span>
              </Link>
            </div>
            <div className="element">
              <Link to={"/studentDashbord/notes"}>
                <img
                  src="../images/icone/bic2.svg"
                  alt="bic2"
                  className="ico-bic2"
                />
                <span>Notes</span>
              </Link>
            </div>
          </div>
          <div className="menu-parametre">
            <h3>parametre</h3>
            <div className="element">
              <img
                src="../images/icone/param.svg"
                alt="param"
                className="ico-param"
              />
              <span>paramètre</span>
            </div>
            <div className="element">
              <img
                src="../images/icone/about.svg"
                alt="about"
                className="ico-about"
              />
              <span>A propos</span>
            </div>
          </div>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
      <br />
    </div>
  );
}

export default StudentDashbord;
