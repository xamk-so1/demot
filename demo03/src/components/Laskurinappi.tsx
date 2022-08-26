import { useState } from "react";

interface Props {
    children : string
    paivitaSumma : () => void    
}

const Laskurinappi : React.FC<Props> = (props : Props) : React.ReactElement => {

    const [laskuri, setLaskuri] = useState<number>(0);

    return (
        <button
            style={{
                    width: "460px",
                    padding: "20px",
                    marginBottom: "5px"
            }}
            onClick={() : void => { 
                props.paivitaSumma();
                setLaskuri(laskuri + 1); 
            }}
        >{props.children} ({laskuri})</button>
    ); 

}

export default Laskurinappi;