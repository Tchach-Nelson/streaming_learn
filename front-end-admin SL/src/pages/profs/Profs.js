import React, { useState, useEffect } from 'react';
import DataTable from "../../components/dataTable/DataTable";
import "./Profs.scss";
import { GridColDef } from '@mui/x-data-grid';
import Add from "../../components/add/Add";

const columns2: GridColDef[] = [
    { field: 'idProf', headerName: 'ID Professeur', width: 80, type: 'number' },
    { field: 'nom', headerName: 'Nom', width: 140, editable: true, type: 'string' },
    { field: 'date', headerName: 'Date', width: 140, editable: true, type: 'string' },
    { field: 'email', headerName: 'Email', width: 180, type: 'string' },
    { field: 'sexe', headerName: 'Sexe', type: 'string', width: 80, editable: true },
    { field: 'specialite', headerName: 'Spécialité', type: 'string', width: 80, editable: true },
    { field: 'telephone', headerName: 'Téléphone', type: 'number', width: 110 },
    { field: 'poste', headerName: 'Poste', type: 'string', width: 100, editable: true },
    { field: 'salaire', headerName: 'Salaire', type: 'number', width: 100, editable: true }
];

function Profs() {
    const [open, setOpen] = useState(false);
    const [prof, setProf] = useState([]);

    const fetchProf = async () => {
        const profReponse = await fetch('http://192.168.118.18:3032/prof/allinfo', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const profData = await profReponse.json();
        setProf(profData);
    };

    useEffect(() => {
        fetchProf();
    }, []);

    const handleDeleteProf = (id) => {
        setProf(prof.filter((prof) => prof.idProf !== id));
    };

    return (
        <div className="users">
            <div className="info">
                <h1>Professeurs</h1>
                <button onClick={() => setOpen(true)}>Ajouter</button>
            </div>
            <DataTable 
                slug="Prof" 
                columns={columns2} 
                rows={prof.map((p) => ({ id: p.idProf, ...p }))} 
                getRowId={(row) => row.idProf}
                onDelete={handleDeleteProf}
                entityType="prof/allinfo"
                refreshTable={fetchProf}
            />
            {open && <Add slug="prof/allinfo" columns={columns2} setOpen={setOpen} refreshTable={fetchProf} />}
        </div>
    );
}

export default Profs;
