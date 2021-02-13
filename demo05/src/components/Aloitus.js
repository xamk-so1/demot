import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'; 

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
    }
});

function Aloitus() {

    const tyylit = useStyles();

    return (
        <Container>

            <Typography className={tyylit.otsikko}>
                Demo 5: Reititys (React Router)
            </Typography>

            <Typography className={tyylit.alaotsikko}>
                Aloitusnäkymä
            </Typography>

            <Typography className={tyylit.kappale}>
                Tämä on demo Reactin reitityksestä. Nyt olemme sovelluksen aloitusnäkymässä.
            </Typography>

        </Container>
    )
}

export default Aloitus