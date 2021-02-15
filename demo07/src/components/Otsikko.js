import { Typography } from '@material-ui/core';

function Otsikko(props) {
    return (
        <Typography 
        style={{
              fontSize : (props.tyyli === "pieni") ? 18 : 22, 
              marginBottom : 10
              }}
        >{props.children}</Typography>
    )
}

export default Otsikko
