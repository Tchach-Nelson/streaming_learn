import React from 'react';
import './myProfil.scss';
import {Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
    { name: "Positif", value: 10, color: "#7777f6" },
    { name: "Presence", value: 90, color: "#ffffff75" },
]

function MyProfil() {
  return (
    <div className='myProfil'>
        <div className='bloc-principal'>
            <div className='bloc-img'>
                <b>Matricule</b>
                <div className='circle1'>
                    <div className='circle2'></div>
                </div>
                <p>5k h de cours ateint</p>
            </div>
            <div className='bloc-info'>
                <h1>Mon profil</h1>
                <div className='input-info'>
                    <span>Nom</span>
                    <input type='text' placeholder='Nom etudiant' disabled/>
                </div>
                <div className='input-info'>
                    <span>Date de naissance</span>
                    <input type='text' placeholder='17-01-2004' disabled/>
                </div>
                <div className='input-info'>
                    <span>Spécialité</span>
                    <input type='text' placeholder='G.S.I' disabled/>
                </div>
                <div className='input-info'>
                    <span>Niveau</span>
                    <input type='text' placeholder='niveau 1' disabled/>
                </div>
                <div className='input-info large-input-info'>
                    <span>Email</span>
                    <input type='text' placeholder='etudiant@gmail.com' disabled/>
                </div>
            </div>
        </div>

        <div className='bloc-secondaire'>
            <div className='bloc-chart'>
                <h2>General</h2>  
                <div className='chart-genreral'>
                    <ResponsiveContainer width="99%" height={250} >
                            <PieChart>
                                <Tooltip
                                    contentStyle={{ background: "white", borderRadius: "10px" }}
                                />
                                <Pie
                                    data={data}

                                    innerRadius={"60%"}  //trouc a l'interier
                                    outerRadius={"80%"} //grosseur
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                    stroke='white'  //couleur bordure
                                    strokeWidth={1} //epaisseur bordures
                                >
                                    {
                                        data.map((item) => (
                                            <Cell
                                                key={item.name}
                                                fill={item.color}
                                            />
                                        ))
                                    }
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
                        <span className='value'> {item.value}</span>
                    </div>
                ))}
            </div>
            <div className='bloc-info'>
                <h1> Avez vous une erreur a <br/> nous signaler ? </h1>
                <p>
                    Si vous avez un problème a nous signalez a propos de vos informations
                    vous êtez prier de nous appelez au numéro suivant pour le signaler : 
                    <span> 6 76 56 78 865</span>
                </p>
                <button>WhatsApp</button>
            </div>
        </div>
        <br/>
    </div>
  )
}

export default MyProfil