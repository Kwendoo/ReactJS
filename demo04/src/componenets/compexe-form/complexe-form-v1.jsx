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
    const [firstName, setFirstName] = useState('');
    const [isPresent, setIsPresent] = useState(false);
    const [nbPerson, setNbPerson] = useState('0');
    const [comment, setComment] = useState('');

    return (
        <form>
            <div>
                <label htmlFor="email">Email</label>
                <input id='email' type="text" required
                    value= {email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="firstname">Prenom</label>
                <input id='firstname' type="text" 
                    value= {firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="isPresent">Présent</label>
                <input id='isPresent' type="checkbox" 
                    value= {isPresent} onChange={(e) => setIsPresent(e.target.value)}/>
            </div>
            {isPresent && (
                <div>
                    <label htmlFor="nbPerson">Nombre de personne</label>
                    <input id='nbPerson' type="text" 
                    value= {nbPerson} onChange={(e) => setNbPerson(e.target.value)}/>
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