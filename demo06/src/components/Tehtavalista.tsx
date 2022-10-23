import React from 'react'
import { List, ListItem, ListItemIcon, IconButton, ListItemText, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Otsikko from './Otsikko';
import { Link } from 'react-router-dom';

interface Tehtava {
    nimi : string;
    tehty : boolean;
}

interface Props {
    tehtavat : Tehtava[];
    setTehtavat : (arg0 : Tehtava[]) => void;
}

const Tehtavalista : React.FC<Props> = ({tehtavat, setTehtavat}) : React.ReactElement => {

    const merkitseTehdyksi = (indeksi : number) : void => {

        let tehtavatApu : Tehtava[] = [...tehtavat];
    
        tehtavatApu[indeksi].tehty = !tehtavatApu[indeksi].tehty;
    
        setTehtavat(tehtavatApu);
    
      }

    return (
        <>  

            <Otsikko tyyli="pieni">Tehtävälista v2.0</Otsikko>

            <Button
                variant="contained"
                fullWidth={true}
                component={Link}
                to="/uusi"
            >Lisää uusi tehtävä</Button>         

            <List>

                {tehtavat.map( (tehtava : Tehtava, idx : number) => {

                return (
                        <ListItem key={idx}>
                            <ListItemIcon>
                                <IconButton
                                    onClick={() => {merkitseTehdyksi(idx)}}
                                >
                                    {(tehtava.tehty)
                                        ? <CheckBoxIcon color="secondary" />
                                        : <CheckBoxOutlineBlankIcon />
                                    } 
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText primary={tehtava.nimi} />
                            <ListItemIcon>
                                <IconButton 
                                    component={Link}
                                    to={`/poista/${idx}`}
                                    edge="end"
                                >
                                    <DeleteIcon />
                                </IconButton>
                                </ListItemIcon>
                        </ListItem>
                        );

                } ) }

            </List>

        </>
    )
}

export default Tehtavalista;