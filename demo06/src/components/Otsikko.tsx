import { Typography } from '@mui/material';

interface Props {
    children? : React.ReactElement | React.ReactElement[] | string; 
    tyyli? : string;
}

const Otsikko : React.FC<Props> = (props : Props) => {
    return (
        <Typography 
        style={{
              fontSize : (props.tyyli === "pieni") ? 18 : 22, 
              marginBottom : 10
              }}
        >{props.children}</Typography>
    )
}

export default Otsikko;