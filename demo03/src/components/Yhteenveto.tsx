interface Props {
    children? : React.ReactElement | React.ReactElement[] | string 
    yhteensa : number
}

const Yhteenveto : React.FC<Props> = (props : Props) : React.ReactElement => {

    return (
        <p>Kulkuneuvoja yhteensä: {props.yhteensa}</p>
    ); 

}

export default Yhteenveto;