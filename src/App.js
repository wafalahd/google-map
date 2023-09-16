// src/App.js
import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import MapContainer from './MapContainer';

function App() {
  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', margin: '20px' }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Our Map Page
        </Typography>
        <MapContainer />
      </Paper>
    </Container>
  );
}

export default App;
