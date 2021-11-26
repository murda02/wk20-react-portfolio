import React, { useState } from "react";

const ContactForm = () => {

  var formStyle = {
    paddingLeft: '5%',
    padding: '1%',
    display: 'block'
  };

  var inputFields = {
    display: 'block'
  };

  var padElementsStyle = {
    paddingTop: '1%'
  };

  var submitBtnsStyle = {
    marginTop: '1%'
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
        <textarea style={inputFields} id="message" required />
      </div>
      <button style={submitBtnsStyle} type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;