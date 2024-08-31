import React, { useState, useEffect } from 'react';
import DataTable from "../../components/dataTable/DataTable";
import "./style.scss";
import { GridColDef } from '@mui/x-data-grid';
import Add from "../../components/add/Add";

const columns2: GridColDef[] = [
    { field: 'iddisciplineetudiant', headerName: 'N°', width: 110, type: 'number' },
    { field: 'idUser', headerName: 'Matricule', width: 110, type: 'number' },
    { field: 'matricule', headerName: 'Nom', width: 200, editable: true, type: 'select', options:[]},
    { field: 'idDiscipline', headerName: 'valeur', width: 200, editable: true, type: 'select', options:[] },
    { field: 'motif', headerName: 'motif', width: 300, type: 'string' }
];

function Discipline() {
    const [open, setOpen] = useState(false);
    const [discipline, setDiscipline] = useState([]);
    const [etuOptions, setEtuOptions] = useState([]);
    const [disciplineValOptions, setDisciplineValOptions] = useState([]);
    const [userOption, setUserOption ] = useState([]);
    // const [profOptions, setProfOptions] = useState([]);
    // const [classeOptions, setClasseOptions] = useState([]);

    const fetchDiscipline = async () => {
        const disciplineReponse = await fetch('http://192.168.118.18:3032/disciplineetudiant/infoDispline', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const disciplineData = await disciplineReponse.json();
        setDiscipline(disciplineData); // Stocke les profs avec ID et nom
    
    };

    const fetchDisciplineVal = async () => {
        const disciplineValReponse = await fetch('http://192.168.118.18:3032/discipline', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const disciplineValData = await disciplineValReponse.json();
        setDisciplineValOptions(disciplineValData.map(d => ({ id: d.idDiscipline, name: d.valeur }))); // Stocke les profs avec ID et nom
        
    };

    const fetchEtu = async () => {
        const etuReponse = await fetch('http://192.168.118.18:3032/etudiant/etuAllInfo', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const etuData = await etuReponse.json();
        setEtuOptions(etuData.map(etuOptions => ({ id: etuOptions.matricule, name: etuOptions.nom }))); // Stocke les profs avec ID et nom
        setUserOption(etuData.map(etuOptions => ({ id: etuOptions.idUser, name: etuOptions.matricule, val: etuOptions.nom }))); 
    };

    

    useEffect(() => {
        fetchEtu();
        fetchDisciplineVal();
        fetchDiscipline();
    }, []);

    const handleDeleteDiscipline = async (id) => {
        await fetch(`http://192.168.118.18:3032/disciplineetudiant/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setDiscipline(discipline.filter((discipline) => discipline.iddisciplineetudiant !== id));
    };

    // Update columns with options
    columns2.find(col => col.field === 'matricule').options = etuOptions;
    columns2.find(col => col.field === 'idDiscipline').options = disciplineValOptions;
    columns2.find(col => col.field === 'idUser').options = userOption;
    // columns2.find(col => col.field === 'idMatiere').options = matiereOptions;

    return (
        <div className="users">
            <div className="info">
                <h1>Discipline</h1>
                <button onClick={() => setOpen(true)}>Ajouter</button>
            </div>
            <DataTable 
                slug="disciplineetudiant" 
                columns={columns2} 
                rows={discipline.map((c) => ({ id: c.iddisciplineetudiant, ...c }))} 
                getRowId={(row) => row.iddisciplineetudiant}
                onDelete={handleDeleteDiscipline}
                entityType="disciplineetudiant"
                refreshTable={fetchDiscipline}
            />
            {open && <Add slug="disciplineetudiant" columns={columns2} setOpen={setOpen} refreshTable={fetchDiscipline} />}
        </div>
    );
}

export default Discipline;
