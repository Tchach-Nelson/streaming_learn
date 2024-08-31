import React, { useState, useEffect } from 'react';
import DataTable from "../../components/dataTable/DataTable";
import "./style.scss";
import { GridColDef } from '@mui/x-data-grid';
import Add from "../../components/add/Add";

const columns2: GridColDef[] = [
    { field: 'idCours', headerName: 'ID Cours', width: 110, type: 'number' },
    { field: 'idMatiere', headerName: 'Nom', width: 140, editable: true, type: 'select', options: [] },
    { field: 'date', headerName: 'Date', width: 140, editable: true, type: 'string' },
    { field: 'uuid', headerName: 'UUID', width: 120, type: 'string' },
    { field: 'duree', headerName: 'Durée', type: 'string', width: 80, editable: true },
    { field: 'idProf', headerName: 'Professeur', type: 'select', width: 180, editable: true, options: [] },
    { field: 'idClasse', headerName: 'Classe', type: 'select', width: 110, options: [] },
];

function Cours() {
    const [open, setOpen] = useState(false);
    const [cours, setCours] = useState([]);
    const [matiereOptions, setMatiereOptions] = useState([]);
    const [profOptions, setProfOptions] = useState([]);
    const [classeOptions, setClasseOptions] = useState([]);

    const fetchProf = async () => {
        const profReponse = await fetch('http://192.168.118.18:3032/prof/allinfo', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const profData = await profReponse.json();
        setProfOptions(profData.map(prof => ({ id: prof.idProf, name: prof.nom }))); // Stocke les profs avec ID et nom
    
    };

    const fetchMatiere = async () => {
        const matiereReponse = await fetch('http://192.168.118.18:3032/matiere', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const matiereData = await matiereReponse.json();
        setMatiereOptions(matiereData.map(matiere => ({ id: matiere.idMatiere, name: matiere.nom })));
    };

    const fetchCours = async () => {
        const coursReponse = await fetch('http://192.168.118.18:3032/cours', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const coursData = await coursReponse.json();
        setCours(coursData);
    };

    const fetchClasses = async () => {
        const classesReponse = await fetch('http://192.168.118.18:3032/classe/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const classesData = await classesReponse.json();
        setClasseOptions(classesData.map(classe =>({id: classe.idClasse, name: classe.nomClasse}) )); // Assuming 'nom' is the name of the class
    };

    useEffect(() => {
        fetchProf();
        fetchMatiere();
        fetchCours();
        fetchClasses();
    }, []);

    const handleDeleteCours = async (id) => {
        await fetch(`http://192.168.118.18:3032/cours/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setCours(cours.filter((cours) => cours.idCours !== id));
    };

    // Update columns with options
    columns2.find(col => col.field === 'idProf').options = profOptions;
    columns2.find(col => col.field === 'idClasse').options = classeOptions;
    columns2.find(col => col.field === 'idMatiere').options = matiereOptions;

    return (
        <div className="users">
            <div className="info">
                <h1>Cours</h1>
                <button onClick={() => setOpen(true)}>Ajouter</button>
            </div>
            <DataTable 
                slug="cours" 
                columns={columns2} 
                rows={cours.map((c) => ({ id: c.idCours, ...c }))} 
                getRowId={(row) => row.idCours}
                onDelete={handleDeleteCours}
                entityType="cours"
                refreshTable={fetchCours}
            />
            {open && <Add slug="cours" columns={columns2} setOpen={setOpen} refreshTable={fetchCours} />}
        </div>
    );
}

export default Cours;
