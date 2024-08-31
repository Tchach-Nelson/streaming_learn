import React, { useState, useEffect } from 'react';
import DataTable from "../../components/dataTable/DataTable";
import "./style.scss";
import { GridColDef } from '@mui/x-data-grid';
import Add from "../../components/add/Add";

const columns2: GridColDef[] = [
    { field: 'idProgramme', headerName: 'Id programme', width: 110, type: 'number' },
    { field: 'idClasse', headerName: 'classe', width: 140, editable: true, type: 'select', options: [] },
    { field: 'heure', headerName: 'Heure interval', width: 140, editable: true, type: 'string' },
    { field: 'date', headerName: 'date', width: 120, type: 'string' },
    { field: 'idMatiere', headerName: 'Matiere', type: 'string', width: 120, editable: true },
    { field: 'idNomProf', headerName: 'Prof', type: 'string', width: 120, editable: true, options: [] }
];

function Programme() {
    const [open, setOpen] = useState(false);
    const [programme, setProgramme] = useState([]);
    const [matiereOptions, setMatiereOptions] = useState([]);
    const [classeOptions, setClasseOptions] = useState([]);
    const [profOptions, setProfOptions] = useState([]);

    const fetchProgramme = async () => {
        const programmeReponse = await fetch('http://192.168.118.18:3032/programme/infoProgramme', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const programmeData = await programmeReponse.json();
        setProgramme(programmeData);
    };


    const fetchMatiere = async () => {
        const matiereReponse = await fetch('http://192.168.118.18:3032/matiere', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const matiereData = await matiereReponse.json();
        setMatiereOptions(matiereData.map(matiere => ({ id: matiere.idMatiere, name: matiere.nom, val: ""  })));
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

    const fetchProf = async () => {
        const profReponse = await fetch('http://192.168.118.18:3032/prof/allinfo', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const profData = await profReponse.json();
        setProfOptions(profData.map(prof => ({ id: prof.idProf +"-"+prof.nom, name: prof.nom }))); // Stocke les profs avec ID et nom
    
    };

    useEffect(() => {
        fetchProf();
        fetchMatiere();
        fetchClasses();
        fetchProgramme();
    }, []);

    const handleDeleteCours = async (id) => {
        await fetch(`http://192.168.118.18:3032/programme/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setProgramme(programme.filter((programme) => programme.idProgramme !== id));
    };

    // Update columns with options
    columns2.find(col => col.field === 'idClasse').options = classeOptions;
    columns2.find(col => col.field === 'idMatiere').options = matiereOptions;
    columns2.find(col => col.field === 'idNomProf').options = profOptions;

    return (
        <div className="users">
            <div className="info">
                <h1>Programme</h1>
                <button onClick={() => setOpen(true)}>Ajouter</button>
            </div>
            <DataTable 
                slug="programme" 
                columns={columns2} 
                rows={programme.map((c) => ({ id: c.idProgramme, ...c }))} 
                getRowId={(row) => row.idProgramme}
                onDelete={handleDeleteCours}
                entityType="programme"
                refreshTable={fetchProgramme}
            />
            {open && <Add slug="programme" columns={columns2} setOpen={setOpen} refreshTable={fetchProgramme} />}
        </div>
    );
}

export default Programme;
