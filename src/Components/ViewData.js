import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { toast } from 'react-toastify';
import { Paper } from '@material-ui/core';

const ViewData = () => {

    const [list, setList] = useState([]);
    const history = useHistory();

    const fetchData = () => {
        fetch(`https://608ec49e0294cd001765dbc2.mockapi.io/directory`)
            .then((data) => data.json())
            .then((data) => setList(data));
    }
    useEffect(() => {
        fetchData();
    }, []);

    const deleteHandler = (id) => {
        fetch(`https://608ec49e0294cd001765dbc2.mockapi.io/directory/${id}`, {
            method: "DELETE",
        })
            .then((data) => {
                toast.success("Deleted successfully");
                fetchData();
            })
    }


    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {list.map((item) => {
                    return (
                        <div key={item.id} style={{ width: 500, margin: 10 }}>
                            <Paper elevation={3}>
                                <h3>{item.name}</h3>
                                <p>{item.phone}</p>
                                <p>{item.email}</p>
                                <p>{item.address}</p>
                                <p>{item.dob}</p>
                                <span>
                                    <Button color="secondary" startIcon={<DeleteOutlineOutlinedIcon />} onClick={() => { deleteHandler(item.id) }}>Delete</Button>
                                    <Button color="primary" startIcon={<EditOutlinedIcon />} onClick={() => { history.push(`update/${item.id}`) }}>Edit</Button>
                                </span>
                            </Paper>
                        </div>
                    );
                })
                }
            </div>
        </div>
    )
}

export default ViewData;
