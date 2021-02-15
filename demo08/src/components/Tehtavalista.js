import { Badge, Button, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import DeleteIcon from '@material-ui/icons/Delete';
import Otsikko from "./Otsikko";
import { Link } from 'react-router-dom';
import { format, differenceInDays } from 'date-fns';

function Tehtavalista(props) {

    const suoritettu = (indeksi) => {

      let tehtavatApu = [...props.tehtavat];

      tehtavatApu[indeksi].suoritettu = !tehtavatApu[indeksi].suoritettu;

      props.setTehtavat([...tehtavatApu]);

    }

    return (

        <>

        <Otsikko tyyli="pieni">Tehtävälista v2.0</Otsikko>

        <Button
          component={Link}
          to="/uusi"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >Lisää uusi tehtävä</Button>

        <List>

        { props.tehtavat.map( (tehtava, idx) => {
  
          return (
                  <ListItem key={idx}>
                      <ListItemIcon>
                          <IconButton
                            onClick={() => {suoritettu(idx)}}
                          >
                            {(tehtava.suoritettu)
                                ? <CheckBoxIcon color="secondary" />
                                : (differenceInDays(tehtava.deadline, new Date()) <= 0 )
                                    ? <Badge badgeContent="!" color="error">
                                        <CheckBoxOutlineBlankIcon />
                                      </Badge>
                                    : <CheckBoxOutlineBlankIcon />
                            } 
                          </IconButton>
                      </ListItemIcon>
                      <ListItemText primary={tehtava.nimi} secondary={format(tehtava.deadline, "d.M.y HH:mm")}/>
                      <ListItemIcon>
                        <IconButton 
                          edge="end"
                          component={Link}
                          to={`/poista/${idx}`} 
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

export default Tehtavalista
