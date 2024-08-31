import React, { useState, useEffect } from 'react';
import "./topBox.scss";
import { topDealsUsers } from "../../data";



function TopBox() {
    const [etudiant, setEtudiant] = useState([]);

    const fecthEtudiant = async() =>{

        const etudiantReponse = await fetch(`http://192.168.118.18:3032/user/infoEtu/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const etudiantData = await etudiantReponse.json();
        setEtudiant(etudiantData);
    } 

    useEffect(() => {
        fecthEtudiant(); 
    }, []); 


    return (
        <div className="topBox">
             {/* <img src={`http://192.168.118.18:3032/user/file/11-profilePhoto.png`} alt="" /> */}
            <h1>Derniere Inscristion</h1>
            <div className="list">
                {

                    etudiant.map((etudiant) =>{
                        return(
                        <div className="listItem" key={etudiant.idUser}>
                            <div className="user">
                                {/* <img src={`http://192.168.118.18:3032/user/file/${etudiant.idUser}-profilePhoto.png`} alt="" /> */}
                               <img src='' />
                                <div className="userTexts">
                                    <span className="userName">{etudiant.nom} </span>
                                    <span className="email" style={{fontSize:8}}>{etudiant.email} </span>
                                </div>
                            </div>
                            <span className="amount">{etudiant.date}</span>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TopBox;