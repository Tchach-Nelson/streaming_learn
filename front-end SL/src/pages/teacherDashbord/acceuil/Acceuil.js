import React from 'react'
import './acceuil.scss'
import {Line, LineChart, Legend, Area, XAxis, YAxis, CartesianGrid, AreaChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data3 = [
    {
        name: "Sun",
        gsi1: 4000,
        ama1: 2400,
    },
    {
        name: "Mon",
        gsi1: 3000,
        ama1: 1398,
    },
    {
        name: "Tus",
        gsi1: 2000,
        ama1: 3800,
    },
    {
        name: "Wed",
        gsi1: 2780,
        ama1: 3908,
    },
    {
        name: "Thu",
        gsi1: 1890,
        ama1: 4800,
    },
    {
        name: "Fri",
        gsi1: 2390,
        ama1: 3800,
    },
    {
        name: "Sat",
        gsi1: 3490,
        ama1: 4300,
    },
]

const datakeys = [
    { name: "gsi1", color: "#82ca9d" },
    { name: "ama1", color: "#8884d8" },
]

const data2 = [
    {
        name: 'Sun',
        gsi1: 40,
        ama1: 24,
        dot1: 24,
    },
    {
        name: 'Mon',
        gsi1: 30,
        ama1: 14,
        dot1: 22,
    },
    {
        name: 'Tue',
        gsi1: 20,
        ama1: 98,
        dot1: 23,
    },
    {
        name: 'Wed',
        gsi1: 28,
        ama1: 39,
        dot1: 20,
    },
    {
        name: 'Thu',
        gsi1: 19,
        ama1: 48,
        dot1: 22,
    },
    {
        name: 'Fri',
        gsi1: 24,
        ama1: 38,
        dot1: 25,
    },
    {
        name: 'Sat',
        gsi1: 35,
        ama1: 43,
        dot1: 21,
    }
]

const data = [
    { name: "Absence", value: 10, color: "#7777f6" },
    { name: "Presence", value: 90, color: "#00000071" },
]

const props = {
    title: "Profit Earned",
    color: "#7777f6",
    dataKey: "participation",
    chartData: [
        { name: "Lundi", participation: 80 },
        { name: "Mardi", participation: 90 },
        { name: "Mercredi", participation: 60 },
        { name: "Jeudi", participation: 10 },
        { name: "Vendredi", participation: 100 },
        { name: "Samedi", participation: 30 },
    ]
}

function Acceuil() {
  return (
    <div className='acceuil'>
        <div className='messages-dash'>
            <div className='presenveEtu'>
                <h3>Presence Etudiant</h3>
                <div className='presenveEtu-content'>
                <ResponsiveContainer width="99%" height="100%">
                    <AreaChart
                        data={data2}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.4)" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip 
                            contentStyle={{backgroundColor:'transparent', borderColor: 'transparent' , width:"10px" ,   fontSize:"12px", color:'#7777f6' }}
                        />
                        <Area type="monotone" dataKey="gsi1" stackId="1" stroke="#7777f6" fill="#7777f6" />
                        <Area type="monotone" dataKey="ama1" stackId="1" stroke="#7777f6c4" fill="#7777f6c4" />
                        <Area type="monotone" dataKey="dot1" stackId="1" stroke="#7777f696" fill="#7777f696" />
                    </AreaChart>
                </ResponsiveContainer>
                </div>
                {/* <span>Plus</span> */}
            </div>
            
            <div className='participationEtu'>
                <h3>Participation Etudiant</h3>
                <div className='participationEtu-content'>
                    <ResponsiveContainer width="98%" height="100%" >
                            <LineChart
                                width={500}
                                height={300}
                                data={data3}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <XAxis dataKey="name" />
                                <YAxis />
                                {/* <Tooltip /> */}
                                <Tooltip 
                                    contentStyle={{backgroundColor:'transparent', borderColor: 'transparent' , width:"10px" ,   fontSize:"12px", color:'#7777f6' }}
                                />
                                <Legend />
                                {datakeys.map((datakey) => (
                                    <Line
                                        type="monotone"
                                        dataKey={datakey.name}
                                        stroke={datakey.color}
                                    />
                                ))}

                            </LineChart>
                        </ResponsiveContainer>
                </div>
                {/* <span>Plus</span> */}
            </div>
        </div>

        <div className='info-dash'>
            <div className='recents'>
                    <h3>Mes cours récents</h3>
                    <div className='recents-content'>
                        <div className='cours-recent'>
                            <h3>Nom du cours</h3>
                            <hr/>
                            <span>Salle :</span> <span>GSI1 ...</span><br/>
                            <span>Lien :</span> <span className='link-cours'>cours-2009-01</span><br/>
                            <span>Durée :</span> <span>4h</span><br/>
                            <b>12-01-2009 <span className='participation-cr'></span> </b>
                        </div>
                        <div className='cours-recent'>
                            <h3>Nom du cours</h3>
                            <hr/>
                            <span>Salle :</span> <span>GSI1 ...</span><br/>
                            <span>Lien :</span> <span className='link-cours'>cours-2009-01</span><br/>
                            <span>Durée :</span> <span>4h</span><br/>
                            <b>12-01-2009 <span className='participation-cr cr-red'></span> </b>
                        </div>
                    </div>
                    <div className='recents-content'>
                        <div className='cours-recent'>
                            <h3>Nom du cours</h3>
                            <hr/>
                            <span>Salle :</span> <span>GSI1 ...</span><br/>
                            <span>Lien :</span> <span className='link-cours'>cours-2009-01</span><br/>
                            <span>Durée :</span> <span>4h</span><br/>
                            <b>12-01-2009 <span className='participation-cr cr-red'></span> </b>
                        </div>
                        <div className='cours-recent'>
                            <h3>Nom du cours</h3>
                            <hr/>
                            <span>Salle :</span> <span>GSI1 ...</span><br/>
                            <span>Lien :</span> <span className='link-cours'>cours-2009-01</span><br/>
                            <span>Durée :</span> <span>4h</span><br/>
                            <b>12-01-2009 <span className='participation-cr cr-red'></span> </b>
                        </div>
                    </div>
            </div>
            <div className='annonce-etu'>
                    <h3>Annonces</h3>
                    <h3 className='annonce-etu-val'>{ `10`}</h3>
                        <div className='annonce-content'>
                            <div className='annonce an-1'>
                                <div className='profil-an'></div>
                                <div className="info-an">
                                    <h4>Mr ...</h4>
                                    <p>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum velit et
                                        enim pulvinar, id fermentum est sagittis. Aliquam erat volutpat. “
                                    </p>
                                    <b>12-01-2009</b>
                                </div>
                            </div>
                            <div className='annonce an-2'>
                                <div className='profil-an'></div>
                                <div className="info-an">
                                    <h4>Mr ...</h4>
                                    <p>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum velit et
                                        enim pulvinar, id fermentum est sagittis. Aliquam erat volutpat. “
                                    </p>
                                    <b>12-01-2009</b>
                                </div>
                            </div>
                            <div className='annonce an-3'>
                                <div className='profil-an'></div>
                                <div className='info-an'>
                                    <h4>Mr ...</h4>
                                    <p>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum velit et
                                        enim pulvinar, id fermentum est sagittis. Aliquam erat volutpat. “
                                    </p>
                                    <b>12-01-2009</b>
                                </div>
                            </div>
                        </div>
                        <span>Plus</span>
                
            </div>
        </div>
    </div>
      
  )
}

export default Acceuil