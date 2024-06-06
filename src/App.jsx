import React from 'react';
import Header from "./components/Header/Header.jsx";
import DataTable from "./components/DataTable.jsx";
import { Box } from '@mui/material';
import ActionBar from './components/ActionBar.jsx';

function App() {
  return (
    <>
      <Box className="AppWrap">
        <Header/>
        <ActionBar className="action-bar" />
        <DataTable />
      </Box>
    </>
  );
}

export default App;