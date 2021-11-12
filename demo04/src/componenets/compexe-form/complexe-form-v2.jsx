/*
Contenur du formulaire :
    - Email (obligatoire)
    - Nom 
    - Prenom
    - Present
    - Nombre de personne
*/

import { useState } from "react";

const initialData = {
    email : '',
    emailError : false,
    firstName : '',
    isPresent : false,
    nbPerson : '0',
    comment : ''
}

const ComplexeFormV2 = () => {

    const [inputs, setInputs] = useState(initialData);

    const handleInput = (event, validator) => {
        const {value, name, checked, type} = event.target;

        if(!validator || validator(value)){

            setInputs(inputs => ({
                ...inputs,
                [name] : type === 'checkbox' ? checked : value
            }));

        }

    }

    const validatorNbPerson = (value) => {
        const regex = /^[0-9]*$/;

        return regex.test(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            email : inputs.email,
            firstName : inputs.firstName,
            isPresent : inputs.isPresent,
            nbPerson : inputs.isPresent ? parseInt(inputs.nbPerson) : 0,
            comment : inputs.comment
        }

        // cas pratique => Envoie vers un autre composant ou vers une API
        console.log(data);

        // Reset des valeurs
        setInputs({...initialData});
    }

    const {email, emailError, firstName, isPresent, nbPerson, comment} = inputs;

    return (
        <form onSubmit = {handleSubmit}>
            
            <div>
                <label htmlFor="email">Email</label>
                <input id='email' type="text" name='email'
                value ={email} onChange={handleInput} 
                onBlur={(e) => setInputs(i => ({...i, emailError: e.target.value.trim() === ''}))}/>
                {emailError &&(
                    <span>L'email est obligatoire !'</span>
                )}
            </div>
            <div>
                <label htmlFor="firstName">Prénom</label>
                <input id='firstName' type="text" name='firstName'
                value={firstName} onChange={handleInput}/>
            </div>
            <div>
                <label htmlFor="isPresent">Présent</label>
                <input id='isPresent' type="checkbox" name='isPresent'
                checked={isPresent} onChange={handleInput}/>
            </div>
            {isPresent && (
                <div>
                    <label htmlFor="nbPerson">Nombre de personne</label>
                    <input id='nbPerson' type="text" name='nbPerson' 
                    value={nbPerson} onChange={(e) => handleInput(e, validatorNbPerson)}/>
                </div>
            )}
            <div>
                <label htmlFor="comment">Commentaire</label>
                <textarea id='comment' value={comment} name='comment'
                onChange={handleInput}/>
            </div>
            <button type='submit'>Valider</button>

        </form>
    );
};

export default ComplexeFormV2;