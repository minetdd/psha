import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Link,
  Grid,
  Snackbar,
  Alert,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    contactMethod: "email",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs
      .send(serviceID, templateID, form, userID)
      .then(
        () => {
          setSubmitted(true);
          setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
            contactMethod: "email",
          });
        },
        () => {
          alert("Failed to send message, please try again.");
        }
      );
  };

  const handleClose = () => setSubmitted(false);

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: isMobile ? 2 : 6, p: isMobile ? 1 : 2 }}>
      <Paper elevation={3} sx={{ p: isMobile ? 2 : 4 }}>
        <Typography variant={isMobile ? "h5" : "h4"} gutterBottom>
          Contact Us
        </Typography>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center" gap={1} justifyContent={isMobile ? "center" : "flex-start"}>
              <EmailIcon color="primary" />
              <Link href="mailto:minetdd@gmail.com" underline="hover">
                preferredservice03@yahoo.com
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center" gap={1} justifyContent={isMobile ? "center" : "flex-start"}>
              <PhoneIcon color="primary" />
              <Link href="tel:+18015772442" underline="hover">
                +1 (801) 577-2442
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center" gap={1} justifyContent={isMobile ? "center" : "flex-start"}>
              <FacebookIcon color="primary" />
              <Link
                href="https://www.facebook.com/p/Preferred-Service-Heating-cooling-and-caring-100066845790428/?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                Facebook
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Typography variant={isMobile ? "h6" : "h5"} gutterBottom>
          Send us a message
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <FormControl fullWidth margin="normal" sx={{ textAlign: "left" }}>
            <InputLabel id="contact-method-label">
              Preferred Contact Method
            </InputLabel>
            <Select
              labelId="contact-method-label"
              id="contactMethod"
              name="contactMethod"
              value={form.contactMethod}
              label="Preferred Contact Method"
              onChange={handleChange}
            >
              <MenuItem value="email">Email</MenuItem>
              <MenuItem value="call">Call</MenuItem>
              <MenuItem value="text">Text</MenuItem>
            </Select>
          </FormControl>
          {form.contactMethod === "email" && (
            <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
            />
          )}
          {(form.contactMethod === "call" || form.contactMethod === "text") && (
            <TextField
              label="Phone Number"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
            />
          )}
          <TextField
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            fullWidth
          >
            Send
          </Button>
        </Box>
      </Paper>
      <Snackbar
        open={submitted}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Thank you for your message!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactUs;