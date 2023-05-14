import React from 'react';
import {AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

function Item({href, children}) {
  return <Box sx={{
    mx: {
      sm: 0, md: 2,
    }, display: {
      xs: "none", sm: "flex"
    }
  }}><Link href={href}>
    <Button color={"inherit"}>{children}</Button>
  </Link></Box>
}

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleDrawerOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleDrawerClose = () => {
    setAnchorElNav(null);
  };

  const pages = ["Home", "How to Use this Website", "About", "General Resources", "Federal Poverty Limits"];

  function getLink(pageName) {
    if (pageName == "Home") {
      return "/"
    }
    return "/" + pageName.replace(/ /g, "_").toLowerCase();
  }

  return <AppBar position={"static"}>
    <Toolbar>
      <Box sx={{flexGrow: 1, display: {xs: 'flex', sm: 'none'}}}>
        <IconButton
            size="large"
            aria-label="open navigation menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleDrawerOpen}
            color="inherit"
        >
          <MenuIcon/>
        </IconButton>
        <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom', horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top', horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleDrawerClose}
            sx={{
              display: {xs: 'block', md: 'none'},
            }}
        >
          {pages.map((page) => (<MenuItem key={page} onClick={handleDrawerClose}>
            <Link href={getLink(page)}><span style={{ color: '#000' }}>{page}</span></Link>
          </MenuItem>))}
        </Menu>
      </Box>
      {
        pages.slice(0, 3).map((page) =>
            (<Item href={getLink(page)} key={page}>{page}</Item>))
      }
      <Box sx={{flexGrow: 1}}/>
      {
        pages.slice(3, 5).map((page) =>
            (<Item href={getLink(page)} key={page}>{page}</Item>))
      }
    </Toolbar>
  </AppBar>
}