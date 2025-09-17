import {
    Typography,
    Button,
  } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ImageText = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+918438192377';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918438192377?text=Hi%2C%20I%20could%20like%20to%20book%20a%20scrap%20pickup%20appointment', '_blank');
  };

  return (
    <div className="imagetext">
        <Typography variant="h1" sx={{ mt: 3 }}>
            CALL NOW
        </Typography>
        <Typography variant="h1" sx={{ mt: 3, wordWrap: 'break-word', maxWidth: '100%' }}>
            TO SCRAP HARBOR<br />AND WE WILL COLLECT
        </Typography>
        <Typography 
          variant="h1" 
          sx={{ mt: 2, cursor: 'pointer' }}
          onClick={handlePhoneClick}
          className="phone-number"
        >
            +91 84381 92377
        </Typography>
        <Button 
          variant="contained" 
          sx={{ mt: 3 }}
          onClick={handleWhatsAppClick}
          startIcon={<WhatsAppIcon />}
        >
            SCRAP HARBOR
        </Button>
    </div>
  );
};

export default ImageText;
