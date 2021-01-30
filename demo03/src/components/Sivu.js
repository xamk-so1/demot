function Sivu(props) {

    return (
            <div style={{
                            margin: "10px",
                            fontFamily: "'Arial', 'Helvetica', sans-serif",
                            maxWidth : "500px",    
            }}>
                {props.children}
            </div>
           );

}

export default Sivu;