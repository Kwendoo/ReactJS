

const ResponseScreen = ({station, departures}) => {

    const departuresJSX = departures.map(
        dep => <li key={dep.id}><span>{dep.destination} :</span> {dep.delay} minutes de retard</li>
    );

    return (
        <>
            <h3>{station}</h3>
            <ul>
                {departuresJSX}
            </ul>
        </>
    );

}

ResponseScreen.defaultProps = {
    departures : []
}


export default ResponseScreen;