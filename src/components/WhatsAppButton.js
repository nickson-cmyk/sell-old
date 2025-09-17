import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918438192377?text=Hi%2C%20I%20could%20like%20to%20book%20a%20scrap%20pickup%20appointment', '_blank');
  };

  return (
    <Tooltip title="Chat with us on WhatsApp" placement="left">
      <Fab
        color="primary"
        className="whatsapp-button"
        onClick={handleWhatsAppClick}
        aria-label="whatsapp"
      >
        <WhatsAppIcon />
      </Fab>
    </Tooltip>
  );
};

export default WhatsAppButton;
