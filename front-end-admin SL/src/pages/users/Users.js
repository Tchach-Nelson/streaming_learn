import React, { useState, useEffect } from 'react';
import DataTable from "../../components/dataTable/DataTable";
import "./Users.scss";
import { GridColDef } from '@mui/x-data-grid';
import Add from "../../components/add/Add";

const columns1: GridColDef[] = [
    { field: 'idUser', headerName: 'ID Utilisateur', width: 80, type: 'number' },
    { field: 'nom', headerName: 'Nom', width: 140, editable: true, type: 'string' },
    { field: 'date', headerName: 'Date', width: 140, editable: true, type: 'Date' },
    { field: 'email', headerName: 'Email', width: 180, type: 'string' },
    { field: 'sexe', headerName: 'Sexe', type: 'string', width: 110, editable: true },
    { field: 'type', headerName: 'type', type: 'string', width: 110, editable: true, options:[{id:'Admin',name:'Admin'},{id:'Prof',name:'Prof'},{id:'Etudiant',name:'Etudiant'}] },
    { field: 'telephone', headerName: 'Téléphone', type: 'number', width: 110 },
    { field: 'status', headerName: 'status', type: 'boolean', width: 110, options:[{id:'0',name:'Desactivé'},{id:'1',name:'Activé'}]},
];

function Users() {
    const [open, setOpen] = useState(false);
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const userResponse = await fetch('http://192.168.118.18:3032/user/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const userData = await userResponse.json();
            if (Array.isArray(userData)) {
                setUsers(userData);
            } else {
                console.error('API response is not an array:', userData);
                setUsers([]);
            }
        } catch (error) {
            console.error('Error fetching users:', error);
            setUsers([]);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDeleteUser = (id) => {
        setUsers(users.filter((user) => user.idUser !== id));
    };

    return (
        <div className="users">
            <div className="info">
                <h1>Utilisateurs</h1>
                <button onClick={() => setOpen(true)}>Ajouter</button>
            </div>
            <DataTable 
                slug="User" 
                columns={columns1} 
                rows={users.map((u) => ({ id: u.idUser, ...u }))}
                getRowId={(row) => row.idUser}
                onDelete={handleDeleteUser}
                entityType="user"
                refreshTable={fetchUsers}
            />
            {open && <Add slug="User" columns={columns1} setOpen={setOpen} refreshTable={fetchUsers} />}
        </div>
    );
}

export default Users;
