// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, Button } from '@mui/material';

const Sidebar = ({ toggleTheme }) => (
  <Drawer className="sidebar" variant="permanent">
    <List>
      <ListItem button component={Link} to="/" className="list-item">
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/calendar" className="list-item">
        <ListItemText primary="Calendar" />
      </ListItem>
      <ListItem button component={Link} to="/kanban" className="list-item">
        <ListItemText primary="Kanban" />
      </ListItem>
      <ListItem button component={Link} to="/tables" className="list-item">
        <ListItemText primary="Tables" />
      </ListItem>
      <ListItem button component={Link} to="/charts" className="list-item">
        <ListItemText primary="Charts" />
      </ListItem>
    </List>
    <Button onClick={toggleTheme} className="toggle-button">Toggle Theme</Button>
  </Drawer>
);

export default Sidebar;
