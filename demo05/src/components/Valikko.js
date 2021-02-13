import {useState} from 'react';
import {AppBar ,IconButton,Toolbar, CssBaseline, Drawer, List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import {Link} from 'react-router-dom';

function Valikko() {

    const [naytaValikko, setNaytaValikko] = useState(false);

    return (
        <CssBaseline>
            <AppBar position="static">
                <Toolbar>
                    <IconButton 
                        edge="start" 
                        color="inherit"
                        onClick={ () => { setNaytaValikko(true) } }
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        open={naytaValikko}
                        onClose={ () => { setNaytaValikko(false) } }
                    >
                        <List style={{
                                width : 220,
                                marginTop : 50 
                            }}
                            onClick={ () => { setNaytaValikko(false) } }
                        >
                            <ListItem button component={Link} to="/">
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Aloitus"/>
                            </ListItem>

                            <ListItem button component={Link} to="/info">
                                <ListItemIcon>
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemText primary="Info"/>
                            </ListItem>

                        </List>
                    </Drawer>
                </Toolbar>
            </AppBar>
        </CssBaseline>
    )
}

export default Valikko;
