import React, { useState, useEffect } from "react";
import Form from "./Form";
import {useHistory} from "react-router-dom";
import { toast } from "react-toastify";

const UpdatePage = ({ match }) => {
  const [updateData, setUpdateData] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    fetch(
      `https://608ec49e0294cd001765dbc2.mockapi.io/directory/${match.params.id}`
    )
      .then((data) => data.json())
      .then((data) => {
        setUpdateData(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [match.params.id]);

  const updateHandler = (id, details) => {
    fetch(`https://608ec49e0294cd001765dbc2.mockapi.io/directory/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(details),
    }).then((data) => {
      toast.success("Data updated Successfully");
      history.goBack();
    });
  };

  return loading ? (
    <div>loading....</div>
  ) : (
    <div>
      {updateData === "Not found" ? (
        <div>No record found with id {match.params.id}</div>
      ) : (
        <div>
          <h2>Update Form</h2>
          <Form mode="update" data={updateData} submitHandler={updateHandler} />
        </div>
      )}
    </div>
  );
};

export default UpdatePage;
