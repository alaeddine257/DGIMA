import { useEffect } from 'react';
import './Footer.css';

import { Paper, Grid, Typography } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';


function Footer() {
  return (
    <Paper
      style={{
        padding: '20px',
        marginTop: '20px',
        background: '#f1f1f1',
      }}
      elevation={3}
    >
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" align="center">
            Adresse : 123 Rue du Paradis, 75001 Paris, France
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            Téléphone : +33 1 23 45 67 89
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Replace the following map component with your map implementation */}
          <div style={{ height: '200px', border: '1px solid #ccc' }}>
            {/* Your map component goes here */}
            {/* For example, you can use Google Maps or another map library */}
            <RoomIcon style={{ fontSize: 60 }} color="primary" />
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Footer;
