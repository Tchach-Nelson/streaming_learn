import React, { useState, useEffect } from 'react';
import DataTable from "../../components/dataTable/DataTable";
import "./style.scss";
import { GridColDef } from '@mui/x-data-grid';
import Add from "../../components/add/Add";

const columns2: GridColDef[] = [
    { field: 'idOp', headerName: 'ID operation', width: 110, type: 'number' },
    { field: 'datePaiement', headerName: 'date', width: 140, editable: true, },
    { field: 'type', headerName: 'type', width: 140, editable: true, type: 'string' },
    { field: 'montant', headerName: 'montant', width: 120, type: 'number' },
    { field: 'idScolarite', headerName: 'scolarité', type: 'select', width: 120, editable: true },
    // { field: 'reste', headerName: 'reste', type: 'string', width: 120, editable: false }
];

function Scolarite() {
    const [open, setOpen] = useState(false);
    const [operation, setOperation] = useState([]);
    const [userOptions, setuserOptions] = useState([]);

    // const [profOptions, setProfOptions] = useState([]);
    // const [classeOptions, setClasseOptions] = useState([]);

    const fetchoperation = async () => {
        const operationReponse = await fetch('http://192.168.118.18:3032/operation', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const operationData = await operationReponse.json();
        setOperation(operationData); // Stocke les profs avec ID et nom
    
    };

    const fetchUser = async () => {
        const userReponse = await fetch('http://192.168.118.18:3032/etudiant/etuAllInfo', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const userData = await userReponse.json();
        setuserOptions(userData.map(user => ({ id: user.idScolarite, name: user.nom })));
    };

    // const fetchCours = async () => {
    //     const coursReponse = await fetch('http://192.168.118.18:3032/cours', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //     const coursData = await coursReponse.json();
    //     setCours(coursData);
    // };

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
        // fetchProf();
        // fetchMatiere();
        // fetchCours();
        fetchUser();
        fetchoperation();
    }, []);

    const handleDeleteOperation = async (id) => {
        await fetch(`http://192.168.118.18:3032/operation/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setOperation(operation.filter((operation) => operation.idOp !== id));
    };

    // Update columns with options
    columns2.find(col => col.field === 'idScolarite').options = userOptions;
    // columns2.find(col => col.field === 'idClasse').options = classeOptions;
    // columns2.find(col => col.field === 'idMatiere').options = matiereOptions;

    return (
        <div className="users">
            <div className="info">
                <h1>Scolarité</h1>
                <button onClick={() => setOpen(true)}>Ajouter</button>
            </div>
            <DataTable 
                slug="operation" 
                columns={columns2} 
                rows={operation.map((c) => ({ id: c.idOp, ...c }))} 
                getRowId={(row) => row.idOp}
                onDelete={handleDeleteOperation}
                entityType="operation"
                refreshTable={fetchoperation}
            />
            {open && <Add slug="operation" columns={columns2} setOpen={setOpen} refreshTable={fetchoperation} />}
        </div>
    );
}

export default Scolarite;
