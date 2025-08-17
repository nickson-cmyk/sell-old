import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918012377237', '_blank');
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
