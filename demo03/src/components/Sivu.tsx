interface Props {
    children : React.ReactElement | React.ReactElement[] | string 
}

const Sivu : React.FC<Props> = (props : Props) : React.ReactElement => {

    return (
        <div
            style={{
                maxWidth : "500px",
                margin: "10px",
                fontFamily: "'Arial', sans-serif"                
            }}
        >
            {props.children}
        </div>
    ); 

}

export default Sivu;