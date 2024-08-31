import React, { useState, useEffect } from 'react';
import DataTable from "../../components/dataTable/DataTable";
import "./style.scss";
import { GridColDef } from '@mui/x-data-grid';
import Add from "../../components/add/Add";

const columns2: GridColDef[] = [
    { field: 'idClasse', headerName: 'ID Classe', width: 110, type: 'number' },
    { field: 'nomClasse', headerName: 'Nom', width: 140, editable: true, type: 'string' },
    { field: 'effectif', headerName: 'Effectif', width: 140, editable: true, type: 'number' },
    { field: 'chefId', headerName: 'chef de classe', width: 120, type: 'string' },
    { field: 'sousChefId', headerName: 'sous chef de classe', type: 'string', width: 120, editable: true },
    // { field: 'idProf', headerName: 'Professeur', type: 'select', width: 180, editable: true, options: [] },
    // { field: 'idClasse', headerName: 'Classe', type: 'select', width: 110, options: [] },
];

function Classe() {
    const [open, setOpen] = useState(false);
    const [classe, setClasse] = useState([]);
   

    const fetchClasses = async () => {
        const classeReponse = await fetch('http://192.168.118.18:3032/classe', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const classeData = await classeReponse.json();
        setClasse(classeData); 
    
    };

    useEffect(() => {
       
        fetchClasses();
    }, []);

    const handleDeleteClasse = async (id) => {
        await fetch(`http://192.168.118.18:3032/classe/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setClasse(classe.filter((classe) => classe.idClasse !== id));
    };

    // Update columns with options
    // columns2.find(col => col.field === 'idProf').options = profOptions;
    // columns2.find(col => col.field === 'idClasse').options = classeOptions;
    // columns2.find(col => col.field === 'idMatiere').options = matiereOptions;

    return (
        <div className="users">
            <div className="info">
                <h1>Classe</h1>
                <button onClick={() => setOpen(true)}>Ajouter</button>
            </div>
            <DataTable 
                slug="classe" 
                columns={columns2} 
                rows={classe.map((c) => ({ id: c.idClasse, ...c }))} 
                getRowId={(row) => row.idClasse}
                onDelete={handleDeleteClasse}
                entityType="classe"
                refreshTable={fetchClasses}
            />
            {open && <Add slug="classe" columns={columns2} setOpen={setOpen} refreshTable={fetchClasses} />}
        </div>
    );
}

export default Classe;
