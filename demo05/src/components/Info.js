import { Button, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'; 
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    otsikko : {
        marginTop : 10,
        fontSize : 22
    },
    alaotsikko : {
        marginTop : 10,
        fontSize : 18
    },
    kappale : {
        marginTop : 10,
        fontSize : 14
    },
    nappi : {
        marginTop : 10,
        marginRight : 10,
    }
});

function Info() {

    const tyylit = useStyles();
    const history = useHistory();

    const palaaAloitukseen = () => {

        if (window.confirm("Palaa aloitusnäkymään?")) {
            history.push("/");
        }

    }

    return (
        <Container>

            <Typography className={tyylit.otsikko}>
                Demo 5: Reititys (React Router)
            </Typography>

            <Typography className={tyylit.alaotsikko}>
                Info
            </Typography>

            <Typography className={tyylit.kappale}>
                Nyt olemme sovelluksen infonäkymässä.
            </Typography>

            <Button
                component={Link}
                to="/"
                variant="contained"
                color="primary"
                className={tyylit.nappi}
            >Palaa aloitusnäkymään</Button>

            <Button
                variant="contained"
                color="primary"
                className={tyylit.nappi}
                onClick={palaaAloitukseen}
            >Palaa aloitusnäkymään (vahvistuksella)</Button>

        </Container>
    )
}

export default Info