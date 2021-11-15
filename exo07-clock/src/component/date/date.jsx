

const DateJour = () => {

    const toDay = new Date();

    const option = {
        day : '2-digit',
        month : 'long',
        year : 'numeric'
    }

    return (
        
        <p>{toDay.toLocaleDateString('fr-be', option)}</p>

    );

}

export default DateJour;