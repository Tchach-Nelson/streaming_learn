import React, { useState, useEffect } from 'react';
import DataTable from "../../components/dataTable/DataTable";
import "./style.scss";
import { GridColDef } from '@mui/x-data-grid';
import Add from "../../components/add/Add";

const columns2: GridColDef[] = [
    { field: 'idMatiere', headerName: 'ID Classe', width: 110, type: 'number' },
    { field: 'nom', headerName: 'Nom', width: 140, editable: true, type: 'string' },
    { field: 'credit', headerName: 'Effectif', width: 140, editable: true, type: 'number' },
    { field: 'semestre', headerName: 'Semestre', width: 140, type: 'string' },
    // { field: 'sousChefId', headerName: 'sous chef de classe', type: 'string', width: 120, editable: true },
    // { field: 'idProf', headerName: 'Professeur', type: 'select', width: 180, editable: true, options: [] },
    // { field: 'idClasse', headerName: 'Classe', type: 'select', width: 110, options: [] },
];

function Matiere() {
    const [open, setOpen] = useState(false);
    const [matiere, setMatiere] = useState([]);
   

    const fetchmatiere = async () => {
        const matiereReponse = await fetch('http://192.168.118.18:3032/matiere', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const matiereData = await matiereReponse.json();
        setMatiere(matiereData); 
    
    };

    useEffect(() => {
       
        fetchmatiere();
    }, []);

    const handleDeleteClasse = async (id) => {
        await fetch(`http://192.168.118.18:3032/matiere/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setMatiere(matiere.filter((matiere) => matiere.idMatiere !== id));
    };

    // Update columns with options
    // columns2.find(col => col.field === 'idProf').options = profOptions;
    // columns2.find(col => col.field === 'idClasse').options = classeOptions;
    // columns2.find(col => col.field === 'idMatiere').options = matiereOptions;

    return (
        <div className="users">
            <div className="info">
                <h1>Matiere</h1>
                <button onClick={() => setOpen(true)}>Ajouter</button>
            </div>
            <DataTable 
                slug="matiere" 
                columns={columns2} 
                rows={matiere.map((c) => ({ id: c.idMatiere, ...c }))} 
                getRowId={(row) => row.idMatiere}
                onDelete={handleDeleteClasse}
                entityType="matiere"
                refreshTable={fetchmatiere}
            />
            {open && <Add slug="matiere" columns={columns2} setOpen={setOpen} refreshTable={fetchmatiere} />}
        </div>
    );
}

export default Matiere;
