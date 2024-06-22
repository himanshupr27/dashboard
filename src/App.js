// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './themes';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';
import Tables from './pages/Tables';
import Charts from './pages/Charts';
import Sidebar from './components/Sidebar';

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme.palette.mode === 'light' ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Sidebar toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
