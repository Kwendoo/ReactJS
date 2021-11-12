/*
Contenur du formulaire :
    - Email (obligatoire)
    - Prenom
    - Present
    - Nombre de personne
    - Commentaire 
*/
// Utilistation de plusieur State

import { useState } from "react";

const ComplexeFormV1 = () => {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [isPresent, setIsPresent] = useState(false);
    const [nbPerson, setNbPerson] = useState('0');
    const [comment, setComment] = useState('');

    const handleInputNumber = (setState, event) => {
        const value = event.target.value;
        const regex = /^[0-9]+$/

        if(value === '' || regex.test(value)){
            setState(value);
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const data = {
            email,
            firstName,
            isPresent,
            nbPerson : parseInt(isPresent) ? nbPerson : 0,
            comment
        };

        // Cas pratique => envoie vers API
        console.log(data);

        // Reset du form
        setEmail('');
        setEmailError(false);
        setFirstName('');
        setIsPresent(false);
        setNbPerson('');
        setComment('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input id='email' type="email" required
                    value= {email} onChange={(e) => setEmail(e.target.value.trim())}
                                    onBlur={() => setEmailError(email === '')}/>
                {emailError &&(
                    <span>L'email est obligatoire !'</span>
                )}
            </div>
            <div>
                <label htmlFor="firstname">Prenom</label>
                <input id='firstname' type="text" 
                    value= {firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="isPresent">Présent</label>
                <input id='isPresent' type="checkbox" 
                    value= {isPresent} onChange={(e) => setIsPresent(e.target.checked)}/>
            </div>
            {isPresent && (
                <div>
                    <label htmlFor="nbPerson">Nombre de personne</label>
                    <input id='nbPerson' type="text" 
                    value= {nbPerson} onChange={(e) => handleInputNumber(setNbPerson, e)}/>
                </div>
            )}
            <div>
                <label htmlFor="comment">Commentaire</label>
                <textarea id="comment" 
                    value= {comment} onChange={(e) => setComment(e.target.value)}/>
            </div>
            <button type='submit'>Envoyer</button>
        </form>
    );
};

export default ComplexeFormV1;