import React, { useState, useEffect } from 'react';
import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data";
import "./home.scss";


function Home() {
    const [user, setUser] = useState([]);
    const [cours, setCours] = useState([]);
    const [matiere, setMatiere] = useState([]);

    const fetchUser = async () => {
        const userReponse = await fetch(`http://192.168.118.18:3032/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const userData = await userReponse.json();
        setUser(userData);
    };

    const fetchCours = async () => {
        const coursReponse = await fetch(`http://192.168.118.18:3032/cours`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const coursData = await coursReponse.json();
        setCours(coursData);
    };

    const fetchMatiere = async () => {
        const matiereReponse = await fetch(`http://192.168.118.18:3032/matiere`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const matiereData = await matiereReponse.json();
        setMatiere(matiereData);
    };

    useEffect(() => {
        fetchUser();
        fetchCours();
        fetchMatiere();
    }, []);

    return (
        <div className="home">
            <div className="box box1">
                <TopBox />
            </div>
            <div className="box box2">
                <ChartBox {...chartBoxUser} user={user} />
            </div>
            <div className="box box3">
                <ChartBox {...chartBoxProduct} />
            </div>
            <div className="box box4">
                <PieChartBox />
            </div>
            <div className="box box5">
                <ChartBox {...chartBoxConversion} user={cours} />
            </div>
            <div className="box box6">
                <ChartBox {...chartBoxRevenue} user={matiere} />
            </div>
            <div className="box box7">
                <BigChartBox />
            </div>
            <div className="box box8">
                <BarChartBox {...barChartBoxVisit} />
            </div>
            <div className="box box9">
                <BarChartBox {...barChartBoxRevenue} />
            </div>
        </div>
    );
}

export default Home;
