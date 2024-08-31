import React, { useState, useEffect } from "react";
import "./myProfil.scss";
import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import Cookies from "js-cookie";

const data = [
  { name: "--", value: 10, color: "#7777f6" },
  { name: "--", value: 90, color: "#ffffff75" },
];

function MyProfil() {
  const [presence, setPresence] = useState({ presence: 0, absence: 0 });
  const [discipline, setdiscipline] = useState([]);
  const [blame, setblame] = useState(0);
  const [exclusion, setexclusion] = useState(0);

  const fecthPresence = async () => {
    const presenceReponse = await fetch(
      `http://192.168.118.18:3032/cours/presence/${Cookies.get(
        "idUser"
      )}/${Cookies.get("idClasse")}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const presenceData = await presenceReponse.json();
    setPresence(presenceData);
  };

  const fetchDispline = async () => {
    //recuperer la displine et compte le nbre d'occurence
    const disciplineReponse = await fetch(
      `http://192.168.118.18:3032/disciplineetudiant/info/${Cookies.get("idUser")}/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const disciplineData = await disciplineReponse.json();
    setdiscipline(disciplineData);

    //compter les blame
    const countB = disciplineData.filter((term) => term === "Blame").length;
    setblame(countB);
    //compter les explusions
    const countE = disciplineData.filter((term) => term === "Exclusion").length;
    setexclusion(countE);
  };

  useEffect(() => {
    fecthPresence();
    fetchDispline();
  }, []);

  //voir les changement lors du chargement de l'objet
  useEffect(() => {
    // console.log('Blame:', blame, 'Exclusion:', exclusion);
  }, [blame, exclusion]);

  return (
    <div className="myProfil">
      <div className="bloc-principal">
        <div className="bloc-img">
          <b>matricule{` ${Cookies.get("matricule")}`}</b>
          <div className="circle1">
            <div className="circle2">
              <img
                width={152}
                height={135}
                style={{
                  marginLeft: 4,
                  marginTop: 2,
                  borderRadius: "100%",
                  objectFit: "cover",
                }}
                src={`http://192.168.118.18:3032/user/file/${Cookies.get(
                  "matricule"
                )}-profilePhoto.png`}
              />
            </div>
          </div>
          <p>Present a {presence.presence}% des cours</p>
        </div>
        <div className="bloc-info">
          <h1>Mon profil</h1>
          <div className="input-info">
            <span>Nom</span>
            <input
              type="text"
              placeholder={` ${Cookies.get("nom")}`}
              disabled
            />
          </div>
          <div className="input-info">
            <span>Date de naissance</span>
            <input
              type="text"
              placeholder={` ${Cookies.get("date")}`}
              disabled
            />
          </div>
          <div className="input-info">
            <span>Spécialité</span>
            <input
              type="text"
              placeholder={` ${Cookies.get("specialite")}`}
              disabled
            />
          </div>
          <div className="input-info">
            <span>Niveau</span>
            <input
              type="text"
              placeholder={`niveau ${Cookies.get("niveau")}`}
              disabled
            />
          </div>
          <div className="input-info large-input-info">
            <span>Email</span>
            <input
              type="text"
              placeholder={`${Cookies.get("email")}`}
              disabled
            />
          </div>
        </div>
      </div>

      <div className="bloc-secondaire">
        <div className="bloc-chart">
          <h2>General</h2>
          <div className="chart-genreral">
            <ResponsiveContainer width="99%" height={250}>
              <PieChart>
                <Tooltip
                  contentStyle={{ background: "white", borderRadius: "10px" }}
                />
                <Pie
                  data={data}
                  innerRadius={"60%"} //trouc a l'interier
                  outerRadius={"80%"} //grosseur
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  stroke="white" //couleur bordure
                  strokeWidth={1} //epaisseur bordures
                >
                  {data.map((item) => (
                    <Cell key={item.name} fill={item.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* {data.map((item) => (
                        <div className="option" key={item.name}>
                            <div className="title">
                                <div className="dot" style={{ backgroundColor: item.color }} />
                                <span>{item.name}</span> :
                            </div> 
                            <span className='value'> {item.value}</span> 
                        </div>
                    ))} */}
          <div className="displine">
            <span>{blame}</span>blâme-----------<span>{exclusion}</span>
            exclusions-----------<span>{presence.absence}%</span>d'absences
          </div>
        </div>
        <div className="bloc-info">
          <h1>
            {" "}
            Avez vous une erreur a <br /> nous signaler ?{" "}
          </h1>
          <p>
            Si vous avez un problème a nous signalez a propos de vos
            informations vous êtez prier de nous appelez au numéro suivant pour
            le signaler :<span> 6 76 56 78 865</span>
          </p>
          <button>WhatsApp</button>
        </div>
      </div>
      <br />
    </div>
  );
}

export default MyProfil;
