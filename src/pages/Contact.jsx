import React, { useState } from "react";

const Contact = function () {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formInfo);
  };

  return (
    <form id="contact-form" onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email Address</label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Contact;
