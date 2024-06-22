// src/pages/Dashboard.js
import React from 'react';
import { Paper, Typography } from '@mui/material';

const Dashboard = () => (
  <div className="dashboard">
    <Typography variant="h4" className="title">
      Dashboard
    </Typography>
    <Paper className="paper">
      <Typography variant="h6">Welcome to the Dashboard</Typography>
    </Paper>
  </div>
);

export default Dashboard;
