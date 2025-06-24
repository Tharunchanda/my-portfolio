import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

const navItems = [
  "home",
  "education",
  "experience",
  "projects",
  "certifications",
  "contact",
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "black", boxShadow: 3, zIndex: 1201 }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Typography
              variant="h6"
              component="a"
              href="#home"
              sx={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
                "&:hover": { color: "gray.300" },
              }}
            >
              Portfolio
            </Typography>
          </motion.div>

          {/* Desktop Nav */}
          {!isMobile && (
            <Box
              component={motion.ul}
              sx={{
                display: "flex",
                gap: 4,
                listStyle: "none",
                m: 0,
                p: 0,
                alignItems: "center",
              }}
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {navItems.map((item) => (
                <motion.li
                  key={item}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={`#${item}`}
                    style={{
                      textTransform: "capitalize",
                      color: "lightgray",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "white")}
                    onMouseLeave={(e) => (e.target.style.color = "lightgray")}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}

              {/* Resume Download Button */}
              <motion.li
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ listStyle: "none" }}
              >
                <Button
                  variant="contained"
                  href="/my-portfolio/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textTransform: "none",
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
                  Resume
                </Button>
              </motion.li>
            </Box>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <>
              <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box
                  sx={{ width: 250, bgcolor: "black", height: "100%", p: 2 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    {navItems.map((item) => (
                      <ListItem
                        button
                        component="a"
                        href={`#${item}`}
                        key={item}
                      >
                        <ListItemText
                          primary={item}
                          primaryTypographyProps={{
                            sx: {
                              color: "white",
                              textTransform: "capitalize",
                            },
                          }}
                        />
                      </ListItem>
                    ))}

                    {/* Resume in Drawer */}
                    <ListItem
                      button
                      component="a"
                      href="/my-portfolio/Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ListItemText
                        primary="Resume"
                        primaryTypographyProps={{
                          sx: {
                            color: "white",
                            textTransform: "capitalize",
                            fontWeight: "bold",
                          },
                        }}
                      />
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>
      {/* Spacer for fixed AppBar */}
      <Toolbar />
    </motion.div>
  );
}
