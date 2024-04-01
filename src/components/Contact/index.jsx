import React, { useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import { staggerContainer, textVariant, fadeIn } from "../../utils/motion.js";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    error: false,
  });

  // use a change handler to update the state object
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // use a submit handler to validate and send the form data
  const handleSubmit = (event) => {
    event.preventDefault();
    // validate the form data
    const { name, email, message } = form;
    if (!name || !email || !message) {
      setForm((prevForm) => ({
        ...prevForm,
        error: true,
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        error: false,
      }));
      // send the form data using emailjs
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            to_name: "Laura Wahied",
            from_email: form.email,
            to_email: "laurawahied@gmail.com",
            message: form.message,
          },
          // formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then((result) => {
          console.log(result.text);
          // do something on success
          alert("Message sent successfully!");
          setForm(
            {
              name: "",
              email: "",
              message: "",
              error: false,
            },
            (error) => {
              console.log(error.text);
              // do something on error
              alert("Message failed to send!");
            }
          );
        });
    }
  };

  return (
    <>
      <Container
        id="contact"
        sx={{
          paddingX: { xs: 0, md: 26 },
          paddingY: { xs: 5, md: 15 },
          marginY: { xs: 5, md: 10 },
          fontFamily: "Roboto",
          // height: { md: '100vh' },
        }}
        maxWidth
      >
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeIn("up", "spring", 0.75, 0.75)}>
            <Grid
              container
              spacing={12}
              justifyContent="center"
              //   alignItems="center"
            >
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: "1rem",
                  }}
                >
                  Contact Me
                </Typography>
                <Typography
                  variant="body1"
                  sx={
                    {
                      // width: "50%",
                      // marginRight: "2rem",
                    }
                  }
                >
                  If you’re excited about collaborating or would like to drop me
                  a line, please don’t hesitate to be in touch.
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                {/* FORM */}
                <Box
                  component="form"
                  ref={formRef}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    maxWidth: 600,
                    margin: "0 auto",
                    padding: 4,
                  }}
                  onSubmit={handleSubmit}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    label="Your name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    error={form.error && !form.name}
                    helperText={
                      form.error && !form.name ? "Please enter your name" : ""
                    }
                    sx={{ width: "100%", marginBottom: 2 }}
                  />
                  <TextField
                    label="Your email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    error={form.error && !form.email}
                    helperText={
                      form.error && !form.email ? "Please enter your email" : ""
                    }
                    sx={{ width: "100%", marginBottom: 2 }}
                  />
                  <TextField
                    label="Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    error={form.error && !form.message}
                    helperText={
                      form.error && !form.message
                        ? "Please enter your message"
                        : ""
                    }
                    multiline
                    rows={4}
                    sx={{ width: "100%", marginBottom: 2 }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                      bgcolor: "black",
                      ":hover": { bgcolor: "darkgrey" },
                      color: "white",
                      borderRadius: "20px",
                      px: 4,
                      py: 1,
                      textTransform: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Send
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </motion.div>
        </motion.section>
      </Container>
    </>
  );
};

export default Contact;
