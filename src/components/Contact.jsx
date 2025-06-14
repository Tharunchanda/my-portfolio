// src/components/Contact.jsx
import React, { useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
  Paper,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    captcha: "",
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ open: false, success: true, message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!form.name || !form.email || !form.subject || !form.message || !form.captcha) {
      setFeedback({ open: true, success: false, message: "Please fill in all fields." });
      return;
    }

    if (form.captcha !== "5") {
      setFeedback({ open: true, success: false, message: "CAPTCHA incorrect. Try again." });
      return;
    }

    setLoading(true);

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
    };

    emailjs
      .send(
        "service_jb4domf",
        "template_oip0e3b",
        templateParams,
        "U86fw4FLrlofzoFqR"
      )
      .then(
        () => {
          setLoading(false);
          setFeedback({ open: true, success: true, message: "Message sent successfully!" });
          setForm({ name: "", email: "", subject: "", message: "", captcha: "" });
        },
        () => {
          setLoading(false);
          setFeedback({ open: true, success: false, message: "Failed to send message." });
        }
      );
  };

  const svgRef = useRef(null);
  const svgInView = useInView(svgRef, { once: true, margin: "-100px" });

  return (
    <Box
      id="contact"
      className="bg-gradient-to-br from-gray-600 via-gray-900 to-gray-600"
      sx={{
        py: 10,
        color: "#f5f5f5",
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 5,
              backgroundColor: "rgba(0,0,0,0)",
              borderRadius: 3,
              boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)",
              backdropFilter: "blur(100px)",
            }}
          >
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              fontWeight={700}
              color="#ffffff"
            >
              Let’s Work Together
            </Typography>
            <Typography variant="body1" align="center" color="#aaa" mb={4}>
              Have a project, question, or just want to connect? I’d love to hear from you.
            </Typography>

            {/* Animated SVG Mail Icon */}
            <Box display="flex" justifyContent="center" mb={3} ref={svgRef}>
              <motion.svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial="hidden"
                animate={svgInView ? "visible" : "hidden"}
              >
                <motion.rect
                  x="8"
                  y="16"
                  width="48"
                  height="32"
                  rx="6"
                  stroke="#00bcd4"
                  strokeWidth="3"
                  fill="none"
                  variants={{
                    hidden: { pathLength: 0 },
                    visible: { pathLength: 1, transition: { duration: 1.2, ease: "easeInOut" } }
                  }}
                />
                <motion.path
                  d="M8 16L32 36L56 16"
                  stroke="#00bcd4"
                  strokeWidth="3"
                  fill="none"
                  variants={{
                    hidden: { pathLength: 0 },
                    visible: { pathLength: 1, transition: { duration: 1.2, delay: 0.6, ease: "easeInOut" } }
                  }}
                />
              </motion.svg>
            </Box>

            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                {["name", "email", "subject", "message", "captcha"].map((field) => (
                  <Grid item xs={12} key={field}>
                    <motion.div
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 100 }}
                    >
                      <TextField
                        fullWidth
                        required={field !== "subject"}
                        label={
                          field === "captcha" ? "2 + 3 = ?" :
                            field.charAt(0).toUpperCase() + field.slice(1)
                        }
                        name={field}
                        type={field === "email" ? "email" : "text"}
                        value={form[field]}
                        onChange={handleChange}
                        multiline={field === "message"}
                        rows={field === "message" ? 4 : undefined}
                        variant="outlined"
                        InputLabelProps={{ style: { color: "#bbb" } }}
                        InputProps={{
                          style: {
                            color: "#fff",
                            borderColor: "#555",
                          },
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#555",
                            },
                            "&:hover fieldset": {
                              borderColor: "#888",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#00bcd4",
                            },
                          },
                        }}
                      />
                    </motion.div>
                  </Grid>
                ))}
              </Grid>

              <Box textAlign="center" mt={4}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={loading}
                    sx={{
                      minWidth: 160,
                      background: "linear-gradient(135deg, #00bcd4, #006064)",
                      color: "#fff",
                      fontWeight: "bold",
                      boxShadow: "0px 4px 20px rgba(0, 188, 212, 0.3)",
                      "&:hover": {
                        background: "linear-gradient(135deg, #00acc1, #004d40)",
                      },
                    }}
                  >
                    {loading ? <CircularProgress size={24} color="inherit" /> : "Send Message"}
                  </Button>
                </motion.div>
              </Box>
            </Box>

            <Box mt={6} textAlign="center">
              <Typography variant="body2" color="#aaa" gutterBottom>
                Or connect with me on
              </Typography>
              <Box display="flex" justifyContent="center" gap={2}>
                {[{
                  icon: <FaEnvelope />,
                  label: "Email",
                  link: "mailto:b23121@students.iitmandi.ac.in",
                }, {
                  icon: <FaGithub />,
                  label: "GitHub",
                  link: "https://github.com/TharunChanda",
                }, {
                  icon: <FaLinkedin />,
                  label: "LinkedIn",
                  link: "https://linkedin.com/in/ChandaTharun",
                }].map(({ icon, label, link }) => (
                  <motion.div whileHover={{ scale: 1.2 }} key={label}>
                    <IconButton
                      aria-label={label}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: "#00bcd4" }}
                    >
                      {icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>
            </Box>
          </Paper>
        </motion.div>
      </Container>

      <Snackbar
        open={feedback.open}
        autoHideDuration={4000}
        onClose={() => setFeedback({ ...feedback, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setFeedback({ ...feedback, open: false })}
          severity={feedback.success ? "success" : "warning"}
          sx={{ width: "100%" }}
        >
          {feedback.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
