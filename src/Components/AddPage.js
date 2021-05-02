import React from 'react';
import { toast } from 'react-toastify';


//import components
import Form from './Form';

const AddPage = () => {

const addHandler = (details,clearForm) => {
        
        fetch(`https://608ec49e0294cd001765dbc2.mockapi.io/directory`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(details),
        })
            .then((data)=>{
                toast.success("Data entered Successfully");
                clearForm();
            });
    }
    
    return (
        <div>
         <Form mode="add" submitHandler={addHandler}/> 
        </div>
    )
}



export default AddPage;


