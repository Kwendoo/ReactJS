import { useEffect } from "react"


const MessageCounter = () =>{
    useEffect(() => {
        console.log('Activation de l\'effet');

        return () => {
            console.log('Nettoyage de l\'effet');
        }
    });
    return (
        <p>Arrète de me cliquer dessus, CONNARD !</p>
    );
};

export default MessageCounter;