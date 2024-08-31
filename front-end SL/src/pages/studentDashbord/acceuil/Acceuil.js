import React, { useState, useEffect } from "react";
import "./acceuil.scss";
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

function Acceuil() {
  const [annonces, setAnnonces] = useState([]);
  const [cours, setCours] = useState([]);
  const [matiere, setMatiere] = useState([]);
  const [prof, setProf] = useState([]);
  const [userProf, setUserProf] = useState([]);
  // const [presence, setPresence] = useState({}) ;
  const [presence, setPresence] = useState({ presence: 0, absence: 0 });
  const [data, setData] = useState([
    { name: "Absence", value: 0, color: "#7777f6" },
    { name: "Presence", value: 0, color: "#00000071" },
  ]);
  const [participation, setParticipation] = useState(true);
  const [props, setProps] = useState({
    title: "Profit Earned",
    color: "#7777f6",
    dataKey: "participation",
    chartData: [
      { name: "Lundi", participation: 8000 },
      { name: "Mardi", participation: 9000 },
      { name: "Mercredi", participation: 6000 },
      { name: "Jeudi", participation: 1000 },
      { name: "Vendredi", participation: 10000 },
      { name: "Samedi", participation: 3000 },
      // { name: "Sat", participation: 3490 },
    ],
  });
  const [loading, setLoading] = useState(true);
  const [showWindow, setShowWindow] = useState(false);
  const [windowMessage, setWindowMessage] = useState("");

  const fetchAnnonces = async () => {
    try {
      const annoncesResponse = await fetch(
        `http://192.168.118.18:3032/message/annonce/${Cookies.get("idClasse")}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!annoncesResponse.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await annoncesResponse.json();
      setAnnonces(data);
    } catch (error) {
      console.error("Error fetching annonces:", error);
    }
  };

  const fetchCours = async () => {
    try {
      // Récupérer les cours
      const coursReponse = await fetch(
        `http://192.168.118.18:3032/cours/infoClasse/${Cookies.get("idClasse")}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const coursData = await coursReponse.json();
      setCours(coursData);

      // Récupérer les matières pour chaque cours
      const matiereList = await Promise.all(
        coursData.map(async (cour) => {
          const matiereReponse = await fetch(
            `http://192.168.118.18:3032/matiere/info/${cour.idMatiere}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          const matiereData = await matiereReponse.json();
          return matiereData;
        })
      );
      setMatiere(matiereList);

      //recupere le prof ()id
      const profList = await Promise.all(
        coursData.map(async (cour) => {
          const profResponse = await fetch(`http://192.168.118.18:3032/user/join/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              table1: "cours",
              table2: "professeur",
              cle1: "idProf",
              cle2: "idProf",
              valeur: `${cour.idProf}`,
            }),
          });
          const profData = await profResponse.json();
          return profData[0];
        })
      );
      setProf(profList);
      // console.log(profList);

      //recuperer info user du prof (nom)
      setUserProf(
        await Promise.all(
          profList.map(async (prof) => {
            const userProfResponse = await fetch(
              `http://192.168.118.18:3032/user/join/`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  table1: "professeur",
                  table2: "utilisateur",
                  cle1: "idUser",
                  cle2: "idUser",
                  valeur: `${prof.idUser}`,
                }),
              }
            );
            const userProfData = await userProfResponse.json();
            return userProfData;
          })
        )
      );
      // console.log(userProf);
    } catch (error) {
      console.error("Error fetching annonces:", error);
    }
  };

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
    // data[0].value = presence.absence
    // data[1].value = presence.presence
    // console.log(presenceData);
  };

  const fecthParticipation = async () => {
    const participationReponse = await fetch(
      `http://192.168.118.18:3032/cours/participation/${Cookies.get(
        "idUser"
      )}/${Cookies.get("idClasse")}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let participationData = await participationReponse.json();

    //pour attendre 6 elements
    function completeTab(arr) {
      const nbreDesire = 6;
      const currentLength = arr.length;

      if (currentLength >= nbreDesire) {
        return arr.slice(0, nbreDesire); // Tronquer si la longueur est déjà suffisante
      }

      const zeroesToAdd = nbreDesire - currentLength;
      const zeroArray = new Array(zeroesToAdd).fill(0);

      // Utiliser unshift pour ajouter les zéros au début du tableau
      for (let i = 0; i < zeroesToAdd; i++) {
        arr.unshift(0);
      }

      return arr;
    }

    participationData = completeTab(participationData);

    setParticipation(participationData);
    console.log(participationData);
  };

  useEffect(() => {
    fetchCours();
    fecthPresence();
    fecthParticipation();
    const intervalId = setInterval(fetchAnnonces, 5000);
    return () => clearInterval(intervalId);

    fetchAnnonces();
  }, []);

  useEffect(() => {
    setData([
      { name: "Absence", value: presence.absence, color: "#7777f6" },
      { name: "Presence", value: presence.presence, color: "#00000071" },
    ]);

    setProps({
      title: "Profit Earned",
      color: "#7777f6",
      dataKey: "participation",
      chartData: [
        { name: "Lundi", participation: participation[0] + 0.1 },
        { name: "Mardi", participation: participation[1] + 0.1 },
        { name: "Mercredi", participation: participation[2] + 0.1 },
        { name: "Jeudi", participation: participation[3] + 0.1 },
        { name: "Vendredi", participation: participation[4] + 0.1 },
        { name: "Samedi", participation: participation[5] + 0.1 },
        // { name: "Sat", participation: 3490 },
      ],
    });
    setLoading(false);
  }, [presence, participation]);

  if (loading) {
    return (
      <div className="loading">
        <img src="../images/loading/5.gif" alt="loading.." />
      </div>
    );
  } else {
    console.log(`annonces : `);
    console.log(annonces);
    console.log(`matiere : `);
    console.log(matiere);
    console.log(`prof : `);
    console.log(prof);
    console.log(`userProf : `);
    console.log(userProf);
  }

  if (
    !annonces.length ||
    !matiere.length ||
    !prof.length ||
    !userProf.length ||
    !cours.length ||
    loading
  ) {
    return (
      <div className="loading">
        <img src="../images/loading/5.gif" alt="loading.." />{" "}
      </div>
    ); // Affiche un indicateur de chargement si les annonces ne sont pas encore disponibles
  } else {
    console.log("annonces" + annonces);
    console.log("matiere" + matiere);
    console.log("prof" + prof);
    console.log("userProf" + userProf);
  }

  const showAnnonces = () => {
    setWindowMessage(
      <div style={{ overflowY: "auto", height: "600px" }}>
        {/* pour ecarter */}
        <div style={{ width: 500 }}></div>
        {annonces.map((annonce) => {
          return (
            <div>
              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  width: 450,
                  borderRadius: 10,
                  fontSize: 12,
                  padding: 10,
                  borderColor: "white",
                  borderWidth: "4px",
                }}
              >
                <div
                  style={{
                    textAlign: "left",
                    marginLeft: 10,
                    color: "#7777f6",
                    fontSize: 13,
                    fontWeight: "bolder",
                  }}
                >
                  {annonce.userNom}
                </div>
                <div style={{ textAlign: "justify", margin: 20 }}>
                  {annonce.contenu}
                </div>
                <div
                  style={{
                    textAlign: "right",
                    marginRight: 30,
                    color: "#7777f6",
                    fontSize: 13,
                    fontWeight: "bolder",
                  }}
                >
                  {annonce.date}
                </div>
              </div>
              <br />
            </div>
          );
        })}
      </div>
    );
    setShowWindow(true);
  };

  const closeWindow = () => {
    setShowWindow(false);
  };

  return (
    <div className="acceuil">
      {showWindow && (
        <div className="window" onClick={closeWindow}>
          <div className="window-content" style={{ whiteSpace: "pre-line" }}>
            {windowMessage}
          </div>
        </div>
      )}
      <div className="messages-dash">
        <div className="annonces">
          <h3>Annonces</h3>
          <div className="annonce-content">
            <div className="annonce an-1">
              <div className="profil-an"></div>
              <div className="info-an">
                <h4>{`-${annonces[0].userNom}`}</h4>
                <p>
                  {annonces[0].contenu.length > 120
                    ? `" ${annonces[0].contenu.slice(0, 140)}... "`
                    : annonces[0].contenu}
                </p>
                <b>{`${annonces[0].date}`}</b>
              </div>
            </div>
            <div className="annonce an-2">
              <div className="profil-an"></div>
              <div className="info-an">
                <h4>{`-${annonces[1].userNom}`}</h4>
                <p>
                  {annonces[1].contenu.length > 120
                    ? `"${annonces[1].contenu.slice(0, 140)}... "`
                    : annonces[1].contenu}
                </p>
                <b>{`${annonces[1].date}`}</b>
              </div>
            </div>
            <div className="annonce an-3">
              <div className="profil-an"></div>
              <div className="info-an">
                <h4>{`-${annonces[2].userNom}`}</h4>
                <p>
                  {annonces[2].contenu.length > 120
                    ? `"${annonces[2].contenu.slice(0, 140)}... "`
                    : annonces[2].contenu}
                </p>
                <b>{`${annonces[2].date}`}</b>
              </div>
            </div>
          </div>
          <span onClick={showAnnonces}>Plus</span>
        </div>
        <div className="recents">
          <h3>Cours récents</h3>
          <div className="recents-content">
            <div className="cours-recent">
              <h3>{matiere[0].nom}</h3>
              <hr />
              <span>Prof :</span> <span>{userProf[0][0].nom}</span>
              <br />
              <span>Lien :</span>{" "}
              <span className="link-cours">{`cours-${cours[0].uuid.slice(
                0,
                10
              )}...`}</span>
              <br />
              <span>Durée :</span> <span>{cours[0].duree}</span>
              <br />
              <b>
                {cours[0].date} <span className="participation-cr"></span>{" "}
              </b>
            </div>
            <div className="cours-recent">
              <h3>{matiere[1].nom}</h3>
              <hr />
              <span>Prof :</span> <span>{userProf[1][0].nom}</span>
              <br />
              <span>Lien :</span>{" "}
              <span className="link-cours">{`cours-${cours[1].uuid.slice(
                0,
                10
              )}...`}</span>
              <br />
              <span>Durée :</span> <span>{cours[1].duree}</span>
              <br />
              <b>
                {cours[1].date}{" "}
                <span className="participation-cr cr-red"></span>{" "}
              </b>
            </div>
          </div>
          <div className="recents-content">
            <div className="cours-recent">
              <h3>{matiere[2].nom}</h3>
              <hr />
              <span>Prof :</span> <span>{userProf[2][0].nom}</span>
              <br />
              <span>Lien :</span>{" "}
              <span className="link-cours">{`cours-${cours[2].uuid.slice(
                0,
                10
              )}...`}</span>
              <br />
              <span>Durée :</span> <span>{cours[2].duree}</span>
              <br />
              <b>
                {cours[2].date}{" "}
                <span className="participation-cr cr-red"></span>{" "}
              </b>
            </div>
            <div className="cours-recent">
              <h3>{matiere[3].nom}</h3>
              <hr />
              <span>Prof :</span> <span>{userProf[3][0].nom}</span>
              <br />
              <span>Lien :</span>{" "}
              <span className="link-cours">{`cours-${cours[3].uuid.slice(
                0,
                10
              )}...`}</span>
              <br />
              <span>Durée :</span> <span>{cours[3].duree}</span>
              <br />
              <b>
                {cours[3].date}{" "}
                <span className="participation-cr cr-red"></span>{" "}
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="info-dash">
        <div className="absence">
          <h3>Absence</h3>
          <h3 className="absence-val">
            {`${data[0].value} `.slice(0, 4) + "%"}
          </h3>
          <div className="chart">
            <ResponsiveContainer width="99%" height={300}>
              <PieChart>
                <Tooltip
                  contentStyle={{ background: "white", borderRadius: "10px" }}
                />
                <Pie
                  data={data}
                  innerRadius={"0%"} //trouc a l'interier
                  outerRadius={"80%"} //grosseur
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  stroke="white" //couleur bordure
                  strokeWidth={3} //epaisseur bordures
                >
                  {data.map((item) => (
                    <Cell key={item.name} fill={item.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          {data.map((item) => (
            <div className="option" key={item.name}>
              <div className="title">
                <div className="dot" style={{ backgroundColor: item.color }} />
                <span>{item.name}</span> :
              </div>
              <span className="value"> {item.value}</span>
            </div>
          ))}
        </div>
        <div className="participation">
          <h3>Participation</h3>
          <h3 className="participation-val">{`-- %`}</h3>
          <div className="chart">
            <ResponsiveContainer width="80%" height={200}>
              <BarChart data={props.chartData}>
                <Tooltip
                  contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                  labelStyle={{ display: "none" }}
                  cursor={{ fill: "none" }}
                />
                <Bar dataKey={props.dataKey} fill={props.color} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acceuil;
