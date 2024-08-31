import React, { useState, useEffect } from 'react';
import DataTable from "../../components/dataTable/DataTable";
import "./style.scss";
import { GridColDef } from '@mui/x-data-grid';
import Add from "../../components/add/Add";

const columns2: GridColDef[] = [
    { field: 'idMessage', headerName: 'ID Message', width: 80, type: 'number' },
    { field: 'nom', headerName: 'Nom Annonceur', width: 140, type: 'string' , options: [{id:'azer admin', name: 'azer admin'}] },
    { field: 'heure', headerName: 'heure', width: 80, editable: true, type: 'string' },
    { field: 'date', headerName: 'date', width: 140, type: 'string' },
    { field: 'idClasse', headerName: 'Classe', width: 80, type: 'select' },
    { field: 'contenu', headerName: 'contenu', width: 400, editable: true, type: 'text' },
    // { field: 'sousChefId', headerName: 'sous chef de classe', type: 'string', width: 120, editable: true },
    // { field: 'idProf', headerName: 'Professeur', type: 'select', width: 180, editable: true, options: [] },
    // { field: 'idClasse', headerName: 'Classe', type: 'select', width: 110, options: [] },
];

function Annonce() {
    const [open, setOpen] = useState(false);
    const [matiere, setMatiere] = useState([]);
    const [classeOptions, setClasseOptions] = useState([]);
   

    const fetchmatiere = async () => {
        const matiereReponse = await fetch('http://192.168.118.18:3032/message/AnnonceInfo', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const matiereData = await matiereReponse.json();
        setMatiere(matiereData); 
    
    };

    const fetchClasses = async () => {
        const classesReponse = await fetch('http://192.168.118.18:3032/classe/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const classesData = await classesReponse.json();
        setClasseOptions(classesData.map(classe =>({id: classe.nomClasse, name: classe.nomClasse}) )); // Assuming 'nom' is the name of the class
    };

    useEffect(() => {
        fetchClasses();
        fetchmatiere();
    }, []);

    const handleDeleteClasse = async (id) => {
        await fetch(`http://192.168.118.18:3032/matiere/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setMatiere(matiere.filter((matiere) => matiere.idMessage !== id));
    };

    // Update columns with options
    // columns2.find(col => col.field === 'idProf').options = profOptions;
    columns2.find(col => col.field === 'idClasse').options = classeOptions;
    // columns2.find(col => col.field === 'idMessage').options = matiereOptions;

    return (
        <div className="users">
            <div className="info">
                <h1>Annonce</h1>
                <button onClick={() => setOpen(true)}>Ajouter</button>
            </div>
            <DataTable 
                slug="message/AnnonceInfo" 
                columns={columns2} 
                rows={matiere.map((c) => ({ id: c.idMessage, ...c }))} 
                getRowId={(row) => row.idMessage}
                onDelete={handleDeleteClasse}
                entityType="message/AnnonceInfo"
                refreshTable={fetchmatiere}
            />
            {open && <Add slug="message/AnnonceInfo" columns={columns2} setOpen={setOpen} refreshTable={fetchmatiere} />}
        </div>
    );
}

export default Annonce;
