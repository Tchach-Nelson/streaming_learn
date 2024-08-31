import React, { useState, useEffect } from "react";
import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";

type Props = {
    slug: string;
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<Boolean>>;
    refreshTable: () => void;
    editUser?: any;
};

function Add(props: Props) {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (props.editUser) {
            setFormData(props.editUser);
        }
    }, [props.editUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const isValidDate = (dateString) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (!regex.test(dateString)) {
            return false;
        }
        const date = new Date(dateString);
        return date instanceof Date && !isNaN(date.getTime());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.date && !isValidDate(formData.date)) {
            alert('Erreur: La date doit être au format YYYY-MM-DD.');
            return;
        }

        const entityId = props.editUser ? props.editUser.id : formData.id;
        const method = props.editUser ? 'PUT' : 'POST';
        const url = props.editUser
            ? `http://192.168.118.18:3032/${props.slug.toLowerCase()}/${entityId}`
            : `http://192.168.118.18:3032/${props.slug.toLowerCase()}`;

        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert(`${props.slug} ${props.editUser ? 'modifié' : 'ajouté'} avec succès!`);
            props.refreshTable();
            props.setOpen(false);
        } else {
            alert(`Erreur lors de ${props.editUser ? 'la modification' : 'l\'ajout'} de ${props.slug}.`);
        }
    };

    return (
        <div className="add">
            <div className="modal">
                <span className="close" onClick={() => { props.setOpen(false) }}>X</span>
                <h1>{props.editUser ? 'Modifier' : 'Ajouter'} {props.slug}</h1>
                <form onSubmit={handleSubmit}>
                    {props.columns
                        .filter(item => item.field !== "id" && item.field !== "img")
                        .map(column => (
                            <div className="item" key={column.field}>
                                <label>{column.headerName}</label>
                                {column.options ? (
                                    <select
                                        required
                                        name={column.field}
                                        value={formData[column.field] || ''}
                                        onChange={handleChange}
                                    >
                                        <option value="">Sélectionner</option>
                                        {column.options.map(option => (
                                            <option key={option.id} value={option.id}>
                                                {option.name} {option.val ? `: ${option.val}` : ``}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        required
                                        type={column.type === 'number' ? 'number' : 'text'}
                                        placeholder={column.headerName}
                                        name={column.field}
                                        value={formData[column.field] || ''}
                                        onChange={handleChange}
                                        disabled={
                                            column.field === 'idUser' ||
                                            column.field === 'idProf' || 
                                            column.field === 'idCours' || 
                                            column.field === 'idClasse' || 
                                            column.field === 'idMatiere'  || 
                                            column.field === 'idMessage' || 
                                            column.field === 'idNote' || 
                                            column.field === 'idDiscipline' || 
                                            column.field === 'iddisciplineetudiant' ||
                                            column.field === 'idProgramme' ||
                                            column.field === 'idOp' ||
                                             column.field === 'reste'
                                        }
                                    />
                                )}
                            </div>
                        ))}
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </div>
    );
}

export default Add;
