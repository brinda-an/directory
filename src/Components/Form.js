import React, { useState } from "react";
import PropTypes from 'prop-types';

//import material-ui
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { toast } from "react-toastify";

const Form = ({mode, data = {}, submitHandler}) => {
  
  const [name, setName] = useState(data.name || "");
  const [phone, setPhone] = useState(data.phone || "");
  const [email, setEmail] = useState(data.email || "");
  const [address, setAddress] = useState(data.address || "");
  const [dob, setDob] = useState(data.dob || "");

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const clearForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setAddress('');
    setDob('');
  }

  return (
    <div>
      <TextField
        onChange={(e) => {
          setName(e.target.value);
        }}
        required
        className="inputText"
        label="Name"
        value={name}
        variant="outlined"
      />
      <br />
      <br />
      <TextField
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        required
        className="inputText"
        label="Phone"
        value={phone}
        variant="outlined"
      />
      <br />
      <br />
      <TextField
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required
        className="inputText"
        label="Email"
        value={email}
        variant="outlined"
      />
      <br />
      <br />
      <TextField
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        required
        className="inputText"
        label="Address"
        value={address}
        variant="outlined"
      />
      <br />
      <br />
      <TextField
        type="date"
        onChange={(e) => {
          setDob(e.target.value);
        }}
        required
        className="inputText"
        label="DOB"
        InputLabelProps={{
          shrink: true,
        }}
        value={dob}
        variant="outlined"
      />
      <br />
      <br />
      <Button
        type="submit"
        onClick={() => {
          if (
            name === "" ||
            phone === "" ||
            email === "" ||
            address === "" ||
            dob === ""
          ) {
            toast.error("Please, Fill all fields");
            return;
          }
          if (phone.length !== 10) {
            toast.error("Please, Enter valid phone number");
            return;
          }
          if (!validateEmail(email)) {
            toast.error("Please, Enter valid email address");
            return;
          }
          const varDate = new Date(dob);
          const today = new Date();

          if (varDate >= today) {
              toast.error("Please, Enter valid Date of Birth");
              return;
          }

          const details = {
            name: name,
            phone: phone,
            email: email,
            address: address,
            dob: dob,
          };
          //   const details = {name, phone, email, address, dob };
          if (mode === "add") {
            submitHandler(details, clearForm);
          } else {
            submitHandler(data.id, details);
          }
        }}
        size="large"
      >
        {mode === "add" ? "Submit" : "Update"}
      </Button>
    </div>
  );
};


Form.propTypes = {
  mode: PropTypes.string.isRequired,
  data: PropTypes.object,
  submitHandler: PropTypes.func.isRequired
}


export default Form;
