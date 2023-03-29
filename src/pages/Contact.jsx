import React, { useState } from "react";
import { Typography, Grid, TextField, Button } from "@mui/material";

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
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
        <Typography component="h4" variant="h4" fontFamily="Odibee Sans">
          Contact Me
        </Typography>
        <form id="contact-form" onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                variant="outlined"
                sx={{ backgroundColor: "#fcc931", color: "#000000" }}
                value={formInfo.name}
                onChange={(e) =>
                  setFormInfo({ ...formInfo, name: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                variant="outlined"
                sx={{ backgroundColor: "#fcc931", color: "#000000" }}
                value={formInfo.email}
                onChange={(e) =>
                  setFormInfo({ ...formInfo, email: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="message"
                label="Message"
                multiline
                rows={5}
                variant="outlined"
                sx={{ backgroundColor: "#fcc931", color: "#000000" }}
                value={formInfo.message}
                onChange={(e) =>
                  setFormInfo({ ...formInfo, message: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: "#fcc931", color: "#000000" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Contact;
