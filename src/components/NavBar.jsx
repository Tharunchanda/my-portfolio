import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Typography, useMediaQuery, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

const navItems = ["home", "about", "experience", "projects", "certifications", "contact"];

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
      <AppBar position="fixed" sx={{ backgroundColor: "black", boxShadow: 3, zIndex: 1201 }}>
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
              Tharun
            </Typography>
          </motion.div>

          {/* Nav links - Desktop */}
          {!isMobile && (
            <Box component={motion.ul} sx={{ display: "flex", gap: 4, listStyle: "none", m: 0, p: 0 }}
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
                  whileHover={{ scale: 1.1, color: "#ffffff" }}
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
            </Box>
          )}

          {/* Hamburger menu - Mobile */}
          {isMobile && (
            <>
              <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box
                  sx={{ width: 250, bgcolor: "black", height: "100%", p: 2 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    {navItems.map((item) => (
                      <ListItem button component="a" href={`#${item}`} key={item}>
                        <ListItemText
                          primary={item}
                          primaryTypographyProps={{
                            sx: { color: "white", textTransform: "capitalize" },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>
      {/* Add spacing for fixed navbar */}
      <Toolbar />
    </motion.div>
  );
}
