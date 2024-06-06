import "./Header.css";
import React from 'react';
import logo from '../../../public/logo.png';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "@mui/material";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      <img src={logo} alt="" className="logo" />
      <Button
        className="main-nav-link"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{marginLeft: "20px"}}
      >
        Home
      </Button>
      <Button className="main-nav-link">Inventory</Button>
      <Button className="main-nav-link">Estimates</Button>
      <Button className="main-nav-link">Sales</Button>
      <Button className="main-nav-link">Receivables</Button>
      <Button className="main-nav-link">Purchases</Button>
      <Button className="main-nav-link">Payables</Button>
      <Button className="main-nav-link">Accounting</Button>
      <Button className="main-nav-link">Accounting</Button>
      <Button className="main-nav-link">Reports</Button>
      <Button className="main-nav-link">Settings</Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <Button variant="contained" sx={{ marginLeft: "auto", marginRight: 0.5 }}>+ Product</Button>
      <Button variant="contained" sx={{ marginLeft: 0.5, marginRight: 0.5 }}>+ Invoice</Button>
      <Link sx={{ marginLeft: 0.5, marginRight: 0.5, textDecoration: "none", color: "#333333", fontSize: "0.857143rem" }}>Sign Out</Link>
    </header>
  );
}