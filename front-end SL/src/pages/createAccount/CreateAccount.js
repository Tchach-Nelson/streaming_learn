import React, { useState, useRef } from "react";
import "./CreateAccount.scss";
import { Link, useNavigate } from "react-router-dom";

function CreateAccount() {
  const navigate = useNavigate();

  const [showWindow, setShowWindow] = useState(false);
  const [windowMessage, setWindowMessage] = useState("");
  const [formData, setFormData] = useState({
    matricule: 0,
    idUser: 0,
    nom: "",
    pass: "",
    date: "",
    email: "",
    sexe: "",
    type: "Etudiant",
    telephone: "",
    status: 1,
    idClasse: 0,
    idScolarite: 0,
    lettreMotivation: null,
    bourse: null,
    specialite: "GSI",
    niveau: "1",
    diplomeNature: "",
    diplome: null,
    bulletin: null,
    redoublant: false,
  });

  const [imagePreview, setImagePreview] = useState("");

  const profilePhotoRef = useRef(null);
  const motivationLetterRef = useRef(null);
  const scholarshipRef = useRef(null);
  const notesRef = useRef(null);
  const diplomaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else if (type === "file") {
      const file = files[0];
      setFormData((prevState) => ({
        ...prevState,
        [name]: file,
      }));
      if (name === "profilePhoto") {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      "profilePhoto",
      "lettreMotivation",
      "bulletin",
      "diplome",
    ];

    const emptyFields = requiredFields.filter((field) => !formData[field]);

    if (emptyFields.length > 0) {
      setWindowMessage("Veullez remplir tous les champs");
      setShowWindow(true);
      return;
    }

    const files = {
      profilePhoto: formData.profilePhoto,
      lettreMotivation: formData.lettreMotivation,
      bourse: formData.bourse,
      bulletin: formData.bulletin,
      diplome: formData.diplome,
    };

    const jsonFormData = { ...formData };
    delete jsonFormData.profilePhoto;
    delete jsonFormData.lettreMotivation;
    delete jsonFormData.bourse;
    delete jsonFormData.bulletin;
    delete jsonFormData.diplome;

    const jsonString = JSON.stringify(jsonFormData);

    fetch("http://192.168.118.18:3032/etudiant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonString,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(async (data) => {
        console.log(data);

        if (data.matricule == undefined) {
          setWindowMessage("Erreur lors de la creation du compte");
          setShowWindow(true);
          return false;
        }

        for (const key in files) {
          if (files[key]) {
            console.log(key);
            const modifiedFile = new File(
              [files[key]],
              `${key}.${files[key].name.split(".").pop()}`,
              { type: files[key].type }
            );
            const fileData = new FormData();
            fileData.append("file", modifiedFile);
            console.log(fileData);
            fetch(`http://192.168.118.18:3032/etudiant/${data.matricule}/upload`, {
              method: "POST",
              body: fileData,
            })
              .then((fileResponse) => {
                if (!fileResponse.ok) {
                  throw new Error("Network response was not ok");
                }
                return fileResponse.json();
              })
              .then((fileData) => {
                console.log(fileData);
              })
              .catch((error) =>
                console.error(
                  "There was a problem with your fetch operation:",
                  error
                )
              );
          }
        }

        setWindowMessage("Compte creer avec succes");
        setShowWindow(true);
        await new Promise((resolve) => setTimeout(resolve, 3000));

        navigate("/");
      })
      .catch((error) =>
        console.error("There was a problem with your fetch operation:", error)
      );
  };

  const closeWindow = () => {
    setShowWindow(false);
  };

  return (
    <div className="createAccount">
      {showWindow && (
        <div className="window" onClick={closeWindow}>
          <div className="window-content">{windowMessage}</div>
        </div>
      )}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="logo">
          <img
            src="images/icone/plume2.svg"
            className="ico_plune"
            alt="plume"
          />
        </div>
        <br />
        <div className="bloc-perso">
          <div className="info-perso">
            <br />
            <div className="bloc-input large-input">
              <img
                src="images/icone/user.svg"
                alt="user"
                className="ico_user"
              />
              <input
                required
                type="text"
                minLength={5}
                name="nom"
                placeholder="Entrez votre nom"
                value={formData.nom}
                onChange={handleChange}
              />
            </div>
            <div className="bloc-input">
              <img
                src="images/icone/pass.svg"
                alt="pass"
                className="ico_pass"
              />
              <input
                required
                type="password"
                minLength={8}
                name="pass"
                placeholder="creer un mot de passe"
                value={formData.pass}
                onChange={handleChange}
              />
            </div>
            <div className="bloc-input">
              <img
                src="images/icone/mail.svg"
                alt="mail"
                className="ico_mail"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Entrez votre mail"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="bloc-input large-input">
              <img
                src="images/icone/calender.svg"
                alt="calender"
                className="ico_calender"
              />
              <input
                required
                type="date"
                name="date"
                placeholder="Entrez votre date de naissance"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="bloc-radio">
              <span>Sexe</span>
              <br />
              <br />
              <input
                required
                type="radio"
                id="feminin"
                name="sexe"
                value="Feminin"
                checked={formData.sexe === "Feminin"}
                onChange={handleChange}
              />
              <label htmlFor="feminin">Feminin</label>
              <input
                required
                type="radio"
                id="masculin"
                name="sexe"
                value="Masculin"
                checked={formData.sexe === "Masculin"}
                onChange={handleChange}
              />
              <label htmlFor="masculin">Masculin</label>
            </div>
          </div>
          <div className="profil">
            <div className="img-profil">
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Profile Preview"
                  width={200}
                  height={180}
                  style={{
                    marginLeft: 10,
                    marginTop: 2,
                    borderRadius: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
            </div>
            <input
              accept=".png, .jpg"
              type="file"
              id="file_photo"
              name="profilePhoto"
              ref={profilePhotoRef}
              onChange={handleChange}
            />
            <button type="button">
              <label htmlFor="file_photo">Photo</label>
            </button>
          </div>
        </div>
        <div className="bloc-general">
          <div className="info-doc1">
            <div className="bloc-input large-input first">
              <img
                src="images/icone/nombre.svg"
                alt="nombre"
                className="ico_nombre"
              />
              <input
                required
                type="number"
                name="telephone"
                placeholder="numero de telephone"
                value={formData.telephone}
                onChange={handleChange}
              />
            </div>
            <div className="bloc-input">
              <img
                src="images/icone/word.svg"
                alt="nombre"
                className="ico_word"
              />
              <input
                type="file"
                id="file_word"
                accept=".pdf"
                name="lettreMotivation"
                ref={motivationLetterRef}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="lettre de motivation"
                value={
                  formData.lettreMotivation
                    ? formData.lettreMotivation.name
                    : ""
                }
                disabled
              />
              <label htmlFor="file_word">+</label>
            </div>
            <div className="bloc-input large-input">
              <img
                src="images/icone/bourse.svg"
                alt="nombre"
                className="ico_bourse"
              />
              <input
                type="file"
                accept=".pdf"
                id="file_bourse"
                name="bourse"
                ref={scholarshipRef}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="bourse (facultatif)"
                value={formData.bourse ? formData.bourse.name : ""}
                disabled
              />
              <label htmlFor="file_bourse">+</label>
            </div>
            <div className="bloc-check">
              <input
                type="checkbox"
                id="check"
                name="redoublant"
                checked={formData.redoublant}
                onChange={handleChange}
              />
              <label htmlFor="check" className="check">
                Etes vous redoublant ?
              </label>
            </div>
          </div>
          <div className="info-doc2">
            <div className="bloc-input large-input">
              <img
                src="images/icone/document.svg"
                alt="specialite"
                className="ico_specialite"
              />
              <select
                name="specialite"
                value={formData.specialite}
                onChange={handleChange}
              >
                <option value="GSI"> filiere: GSI </option>
                <option value="AMA"> filiere: AMA </option>
                <option value="GHR"> filiere: GHR </option>
                <option value="CGE"> filiere: CGE </option>
                <option value="BAN"> filiere: BAN </option>
                <option value="COG"> filiere: COG </option>
              </select>
            </div>
            <div className="bloc-input large-input">
              <img
                src="images/icone/niveau.svg"
                alt="niveau"
                className="ico_niveau"
              />
              <select
                name="niveau"
                value={formData.niveau}
                onChange={handleChange}
              >
                <option value="1"> niveau: 1 </option>
                <option value="2"> niveau: 2 </option>
              </select>
            </div>
            <div className="bloc-input small-input">
              <img
                src="images/icone/diplome.svg"
                alt="diplome_nature"
                className="ico_diplome_nature"
              />
              <input
                required
                type="text"
                name="diplomeNature"
                placeholder="La nature de votre diplome"
                value={formData.diplomeNature}
                onChange={handleChange}
              />
            </div>
            <div className="bloc-input large-input">
              <img src="images/icone/bic.svg" alt="note" className="ico_note" />
              <input
                type="file"
                accept=".pdf"
                id="file_note"
                name="bulletin"
                ref={notesRef}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Dernier bulletin de note"
                value={formData.bulletin ? formData.bulletin.name : ""}
                disabled
              />
              <label htmlFor="file_note">+</label>
            </div>
            <div className="bloc-input large-input">
              <img
                src="images/icone/diplome.svg"
                alt="diplome"
                className="ico_diplome"
              />
              <input
                type="file"
                accept=".pdf"
                id="file_diplome"
                name="diplome"
                ref={diplomaRef}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Copie de votre diplôme"
                value={formData.diplome ? formData.diplome.name : ""}
                disabled
              />
              <label htmlFor="file_diplome">+</label>
            </div>
          </div>
        </div>
        <br />
        <div className="bloc-btn">
          <button type="submit">S'incrire</button>
          <Link to={"/"}>
            <button type="button">Retour</button>
          </Link>
        </div>
        <br />
      </form>
    </div>
  );
}

export default CreateAccount;
