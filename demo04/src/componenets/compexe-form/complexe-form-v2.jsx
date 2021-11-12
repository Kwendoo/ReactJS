/*
Contenur du formulaire :
    - Email (obligatoire)
    - Nom 
    - Prenom
    - Present
    - Nombre de personne
*/

const ComplexeFormV2 = () => {



    return (
        <form >
            
            <div>
                <label htmlFor="email">Email</label>
                <input id='email' type="text" />
            </div>
            <div>
                <label htmlFor="firstName">Prénom</label>
                <input id='firstName' type="text" />
            </div>
            <div>
                <label htmlFor="isPresent">Présent</label>
                <input id='isPresent' type="text" />
            </div>
            {isPresent && (
                <div>
                    <label htmlFor="nbPerson">Nombre de personne</label>
                    <input id='nbPerson' type="text" />
                </div>
            )}
            <div>
                <label htmlFor="comment">Commentaire</label>
                <textarea id='comment'/>
            </div>
            <button type='submit'></button>

        </form>
    );
};

export default ComplexeFormV2;