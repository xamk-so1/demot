import { AppBar, CssBaseline, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Valikko : React.FC = () : React.ReactElement => {
  
  const [valikkoAuki, setValikkoAuki] = useState<boolean>(false);

  return (
    <CssBaseline>
    <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setValikkoAuki(true)}
          >
            <MenuIcon/>
          </IconButton>

          <Drawer
            open={valikkoAuki}
            onClose={() => setValikkoAuki(false)}
          >

            <List
              sx={{
                width : "220px",
                marginTop : "50px"
              }}
              onClick={() => setValikkoAuki(false)}
            >
              <ListItemButton
                component={Link}
                to="/"
              >
                <ListItemIcon>
                  <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary="Aloitus" />
              </ListItemButton>

              <ListItemButton
                component={Link}
                to="/info"
              >
                <ListItemIcon>
                  <InfoIcon/>
                </ListItemIcon>
                <ListItemText primary="Info" />
              </ListItemButton>

            </List>
            
          </Drawer>

        <Typography 
            component="div"
            sx={{fontSize: "16pt", flexGrow : 1}}
        >Demo 5: Reititys (React Router)</Typography>
        </Toolbar>
    </AppBar>
    </CssBaseline>
  );
}

export default Valikko;
