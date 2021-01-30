function Otsikko(props) {

    return (
            (props.tyyli === "pieni")
            ? <h2>{props.children}</h2>
            : <h1>{props.children}</h1>
    );

}

export default Otsikko;