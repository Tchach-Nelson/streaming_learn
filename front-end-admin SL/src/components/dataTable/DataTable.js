import React, { useState, useEffect } from 'react';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import "./dataTable.scss";
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import Add from '../add/Add';  

type Props = {
    columns: GridColDef[];
    rows: Object[];
    slug: String;
    getRowId: (row: any) => any;
    onDelete: (id: number) => void;
    entityType: string; // Ajouter un type d'entité pour différencier entre utilisateurs et professeurs
    refreshTable: () => void; // Ajouter une méthode de rafraîchissement pour réutilisation
};

function DataTable(props: Props) {
    const [open, setOpen] = useState(false);
    const [editEntity, setEditEntity] = useState(null);
    const [rows, setRows] = useState(props.rows);

    useEffect(() => {
        setRows(props.rows);
    }, [props.rows]);

    const handleDelete = async (id: number) => {
        if (!window.confirm("ETES VOUS SÛR DE VOULOIR SUPPRIMER")) {
            alert('SUPPRESSION ANNULEE');
            return;
        }

        await fetch(`http://192.168.118.18:3032/${props.entityType}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        props.onDelete(id);
        setRows(rows.filter(row => row.id !== id));
        alert('ÉLÉMENT SUPPRIMÉ');
    }

    const handleEdit = (entity) => {
        setEditEntity(entity);
        setOpen(true);
    }

    const actionColumns: GridColDef = {
        field: "actions",
        headerName: "Actions",
        width: 100,
        renderCell: (params) => {
            return (
                <div className="action">
                    <div className="edit" onClick={() => handleEdit(params.row)}>
                        <b className="fas fa-edit" style={{ color: "green", fontSize: "14px" }}></b>
                    </div>

                    <div className="delete">
                        <b className="fas fa-trash-alt" style={{ color: "red", fontSize: "14px" }} onClick={() => handleDelete(params.row.id)}></b>
                    </div>
                </div>
            );
        }
    }

    return (
        <div className="dataTable" style={{ width: "92%" }}>
            <DataGrid
                className="dataGrid"
                rows={rows}
                columns={[...props.columns, actionColumns]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 7,
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 }
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
                getRowId={props.getRowId}
                sx={{
                    '& .MuiDataGrid-root': {
                        width: '80%',
                        margin: '0 auto',
                    }
                }}
            />
            {open && (
                <Add
                    slug={props.slug}
                    columns={props.columns}
                    setOpen={setOpen}
                    refreshTable={props.refreshTable}
                    editUser={editEntity}
                />
            )}
        </div>
    );
}

export default DataTable;
