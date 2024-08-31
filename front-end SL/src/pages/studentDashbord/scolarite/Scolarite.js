import React, { useState, useEffect } from "react";
import "./scolarite.scss";
import Cookies from "js-cookie";

function Scolarite() {
  const [scolarite, setScolarite] = useState();
  const [operation, setOperation] = useState([]);

  const fecthScolarite = async () => {
    const scolariteReponse = await fetch(
      `http://192.168.118.18:3032/scolarite/info/${Cookies.get("idScolarite")}/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const scolariteData = await scolariteReponse.json();
    setScolarite(scolariteData);
  };

  const fecthOperation = async () => {
    const operationReponse = await fetch(
      `http://192.168.118.18:3032/operation/infoScolarite/${Cookies.get(
        "idScolarite"
      )}/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const operationData = await operationReponse.json();
    setOperation(operationData);
  };

  useEffect(() => {
    fecthScolarite();
    fecthOperation();
  }, []);

  useEffect(() => {
    console.log(operation);
  }, [scolarite, operation]);

  if (!scolarite || !operation.length) {
    return (
      <div className="loading">
        <img src="../images/loading/5.gif" alt="loading.." />{" "}
      </div>
    ); // Affiche un indicateur de chargement si les annonces ne sont pas encore disponibles
  }

  if (!operation.length) {
    return <div className="loading">eee </div>; // Affiche un indicateur de chargement si les annonces ne sont pas encore disponibles
  }

  return (
    <div className="scolarite">
      <div className="infoEtu">
        <div className="bloc1">
          <span>Matricule: </span>{" "}
          <span className="value">matricule {Cookies.get("matricule")}</span>{" "}
          <br />
          <span>Nom: </span> <span className="value">{Cookies.get("nom")}</span>{" "}
          <br />
          <span>Specialité: </span>
          <span className="value">{Cookies.get("specialite")} </span> <br />
          <span>Redoublant: </span>
          <span className="value">
            {Cookies.get("redoublant") == 0 ? "NON" : "OUI"}
          </span>{" "}
          <br />
        </div>
        <div className="bloc2">
          <span>Année: </span>
          <span className="value">2024</span> <br />
          <span>Semestre: </span>
          <span className="value">N°{scolarite.semestre}</span> <br />
        </div>
      </div>
      <div className="versement">
        <div className="bloc1">
          <span>Montant Inscription: </span>{" "}
          <span className="value">{scolarite.montant}</span> <br />
          <span>Date Inscription: </span>{" "}
          <span className="value">{scolarite.dateInscription}</span> <br />
          <span>Mt à payer Redoublant: </span>
          <span className="value">0</span> <br />
        </div>
        <div className="bloc2">
          <span>Montant bourse: </span>
          <span className="value">{scolarite.bourse}</span> <br />
          <span>Mt rabais: </span>
          <span className="value">{scolarite.rabais}</span> <br />
          <span>Moratoire: </span>
          <span className="value">{scolarite.moratoire}</span> <br />
        </div>
      </div>
      <div className="historique">
        <div className="principal-row ">
          <span>N°OP</span>
          <span>Date Paiement</span>
          <span>Type de paiement</span>
          <span>Montant Payé</span>
        </div>
        {operation.map((operation) => {
          return (
            <div className="simple-row ">
              <span>#paie - {operation.idOp}</span>
              <span>{operation.datePaiement}</span>
              <span>{operation.type}</span>
              <span>{operation.montant}</span>
            </div>
          );
        })}
      </div>
      <div className="recap">
        <div className="info">
          <span>Reste à Payer Scolarité: </span>{" "}
          <span className="value">{scolarite.reste}</span> <br />
          {/* <span>Reste à Payer Total:  </span> <span className='value'>{550000 - scolarite.reste}</span> <br/> */}
          <span>Reste à Payer Redoublant:</span>
          <span className="value">00</span> <br />
        </div>
        <div className="imprimer">
          <img
            src="../images/icone/imprimer.svg"
            alt="imprimer"
            className="ico-imprimer"
          />
          <span>imprimer</span>
        </div>
      </div>
    </div>
  );
}

export default Scolarite;
