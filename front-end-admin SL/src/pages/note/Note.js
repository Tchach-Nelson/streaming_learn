import React, { useState, useEffect } from 'react';
import DataTable from "../../components/dataTable/DataTable";
import "./style.scss";
import { GridColDef } from '@mui/x-data-grid';
import Add from "../../components/add/Add";

const columns2: GridColDef[] = [
    { field: 'idNote', headerName: 'ID Note', width: 110, type: 'number' },
    { field: 'idUser', headerName: 'Etudiant', width: 140, editable: true, type: 'string', options:[] },
    { field: 'idMatiere', headerName: 'Matiere', width: 140, editable: true, type: 'string', options:[] },
    { field: 'note', headerName: 'Note', width: 80, type: 'string' },
    { field: 'date', headerName: 'Date', type: 'string', width: 120, editable: true },
    { field: 'semestre', headerName: 'Semestre', type: 'string', width: 120, editable: true },
    { field: 'decision', headerName: 'Decision', type: 'string', width: 110 },
];

function Note() {
    const [open, setOpen] = useState(false);
    const [note, setNote] = useState([]);
    const [etuOptions, setEtuOptions] = useState([]);
    const [matiereOptions, setMatiereOptions] = useState([]);
    // const [classeOptions, setClasseOptions] = useState([]);

    const fetchEtu = async () => {
        const etuReponse = await fetch('http://192.168.118.18:3032/etudiant/etuAllInfo', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const etuData = await etuReponse.json();
        setEtuOptions(etuData.map(etuOptions => ({ id: etuOptions.idUser, name: etuOptions.nom }))); // Stocke les profs avec ID et nom
    
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

    const fetchNote = async () => {
        const noteReponse = await fetch('http://192.168.118.18:3032/note/infoNote', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const noteData = await noteReponse.json();
        setNote(noteData);
    };

    // const fetchClasses = async () => {
    //     const classesReponse = await fetch('http://192.168.118.18:3032/classe/', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //     const classesData = await classesReponse.json();
    //     setClasseOptions(classesData.map(classe =>({id: classe.idClasse, name: classe.nomClasse}) )); // Assuming 'nom' is the name of the class
    // };

    useEffect(() => {
        fetchEtu();
        fetchMatiere();
        fetchNote();
    }, []);

    const handleDeleteNote = async (id) => {
        await fetch(`http://192.168.118.18:3032/cours/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setNote(note.filter((note) => note.idNote !== id));
    };

    // Update columns with options
    columns2.find(col => col.field === 'idUser').options = etuOptions;
    // columns2.find(col => col.field === 'idClasse').options = classeOptions;
    columns2.find(col => col.field === 'idMatiere').options = matiereOptions;

    return (
        <div className="users">
            <div className="info">
                <h1>Note</h1>
                <button onClick={() => setOpen(true)}>Ajouter</button>
            </div>
            <DataTable 
                slug="note" 
                columns={columns2} 
                rows={note.map((c) => ({ id: c.idNote, ...c }))} 
                getRowId={(row) => row.idNote}
                onDelete={handleDeleteNote}
                entityType="note"
                refreshTable={fetchNote}
            />
            {open && <Add slug="note" columns={columns2} setOpen={setOpen} refreshTable={fetchNote} />}
        </div>
    );
}

export default Note;
