import React, { useState } from "react";

const ContactForm = () => {

  var formStyle = {
    paddingLeft: '3%',
    padding: '1%',
    display: 'block',
    fontSize: '1.5rem'
  };

  var inputFields = {
    display: 'block',
    width: '20%',
    padding: '12px 20px',
    margin: '8px 0',
    boxSizing: 'border-box',
    border: '2px solid #d3ade7'
    
  };

  var messageStyle = {
    width: '50%',
    display: 'block',
    padding: '12px 40px',
    margin: '8px 0',
    boxSizing: 'border-box',
    border: '2px solid #d3ade7',
    height: '250px'
  };

  var padElementsStyle = {
    paddingTop: '1%'
  };

  var submitBtnsStyle = {
    marginTop: '1%',
    boxShadow: `5px 5px 3px gray`,
    backgroundColor: '#d3ade7',
    borderRadius: '8px',
    padding: '8px 16px',
    fontSize: '20px'

  };
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div>
        <label htmlFor="name">Name:</label>
        <input style={inputFields} type="text" id="name" required />
      </div>
      <div style={padElementsStyle}>
        <label htmlFor="email">Email:</label>
        <input style={inputFields} type="email" id="email" required />
      </div>
      <div style={padElementsStyle}>
        <label htmlFor="message">Message:</label>
        <textarea style={messageStyle} id="message" required />
      </div>
      <button style={submitBtnsStyle} type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;