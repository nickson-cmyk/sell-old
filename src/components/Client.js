import React from "react";
import { Grid, Typography, Button, IconButton, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <Grid
      container
      sx={{
        background: "linear-gradient(90deg, #f8f7fc 0%, #f3f0ff 100%)",
        color: "#333",
        padding: "3rem 2rem",
        marginTop: "3rem",
      }}
      justifyContent="space-between"
      alignItems="flex-start"
    >
      {/* Left Section */}
      <Grid item xs={12} md={4}>
        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#ffde0f' }}>
          Scrap Harbor
        </Typography>
        <Typography variant="body2" sx={{ maxWidth: "300px", lineHeight: 1.6 }}>
          Discover the reliable scrap collection and recycling solutions of Scrap
          Harbor. We help you sell scrap easily, ensure timely pickup, and
          promote eco-friendly disposal methods.
        </Typography>
      </Grid>

      {/* Links */}
      <Grid item xs={12} md={2}>
        <Typography variant="h6" fontWeight="600" gutterBottom>
          Links
        </Typography>
        <Grid container direction="column" spacing={1}>
          <Grid item>
            <Link href="#features" underline="hover" color="inherit">
              Features
            </Link>
          </Grid>
          <Grid item>
            <Link href="#pricing" underline="hover" color="inherit">
              Pricing
            </Link>
          </Grid>
          <Grid item>
            <Link href="#contact" underline="hover" color="inherit">
              Contact Us
            </Link>
          </Grid>
        </Grid>
      </Grid>

      {/* Contact Section */}
      <Grid item xs={12} md={3}>
        <Typography variant="h6" fontWeight="600" gutterBottom>
          Get in Touch
        </Typography>
        <Grid container direction="column" spacing={1}>
          <Grid item display="flex" alignItems="center">
            <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
            <Typography variant="body2">+91 84381 92377</Typography>
          </Grid>
          <Grid item display="flex" alignItems="center">
            <EmailIcon fontSize="small" sx={{ mr: 1 }} />
            <Typography variant="body2">sellscrap@gmail.com</Typography>
          </Grid>
          <Grid item display="flex" gap={1}>
            <IconButton color="inherit" size="small">
              <LinkedInIcon />
            </IconButton>
            <IconButton color="inherit" size="small">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit" size="small">
              <FacebookIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>

      {/* Right Section with Buttons */}
      <Grid
        item
        xs={12}
        md={3}
        display="flex"
        flexDirection="column"
        alignItems={{ xs: "flex-start", md: "flex-end" }}
        gap={2}
      >
        <Button
          variant="outlined"
          sx={{ borderRadius: "30px", paddingX: "1.5rem" }}
        >
          Book Pickup
        </Button>
        <Button
          variant="contained"
          sx={{ borderRadius: "30px", paddingX: "1.5rem" }}
        >
          Contact Us
        </Button>
      </Grid>

      {/* Bottom Section */}
      <Grid item xs={12} mt={4}>
        <Typography variant="body2" align="center" color="text.secondary">
          © 2025 by Scrap Harbor | All rights reserved
        </Typography>
      </Grid>

      {/* WhatsApp Floating Button */}
      <IconButton
        href="https://wa.me/918438192377"
        target="_blank"
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          backgroundColor: "#25D366",
          color: "#fff",
          "&:hover": { backgroundColor: "#1ebe57" },
        }}
      >
        <WhatsAppIcon />
      </IconButton>
    </Grid>
  );
};

export default Footer;
