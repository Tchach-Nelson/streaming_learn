import React, { useState, useEffect } from "react";
import "./notes.scss";
import Cookies from "js-cookie";

function Notes() {
  const [notes, setNotes] = useState();

  const fecthNote = async () => {
    const noteReponse = await fetch(
      `http://192.168.118.18:3032/note/info/${Cookies.get("idUser")}/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const noteData = await noteReponse.json();
    setNotes(noteData);
  };

  useEffect(() => {
    fecthNote();
  }, []);

  useEffect(() => {
    console.log(notes);
  }, [notes]);

  if (!notes) {
    return (
      <div className="loading">
        <img src="../images/loading/5.gif" alt="loading.." />{" "}
      </div>
    ); // Affiche un indicateur de chargement si les annonces ne sont pas encore disponibles
  }

  return (
    <div className="notes">
      <div className="bloc-note">
        <div className="principal-row ">
          <span>Nom de la matiere</span>
          <span>Nombre de credit</span>
          <span>Note</span>
          <span>Note Decision (V/N)</span>
        </div>

        {notes.map((note) => {
          return (
            <div className="simple-row ">
              <span>{note.nom}</span>
              <span>{note.credit}</span>
              <span>{note.note}</span>
              <span>{note.decision}</span>
            </div>
          );
        })}

        {/* <div className='simple-row '> 
                    <span>200168014</span> 
                    <span>200168014</span> 
                    <span>200168014</span>
                    <span>200168014</span> 
                </div> */}
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
  );
}

export default Notes;
