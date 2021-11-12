import { useState } from "react";

const initialInputs = {
    nb1 : '',
    nb2 : '',
    operator : '+'
}

const Calculatrice = () => {

    const [inputs, setInputs] = useState(initialInputs);

    const [result, setResult] = useState('');

    const handleInputs = (e, validator) => {
        const {name, value} = e.target;

        if(!validator || validator(value)){
            setInputs(inputs => ({
                ...inputs,
                [name] : value
            }));
        }
    };

    const numberValidator = (v) => /^[0-9]*([0-9](\.|,)[0-9]*)?$/.test(v);

    const handleSubmit = (e) => {
        e.preventDefault();

        const nb1 = parseFloat(inputs.nb1.replace(',','.'))
        const nb2 = parseFloat(inputs.nb2.replace(',','.'))
        const operator = inputs.operator;

        let res;
        switch (operator){
            case '+':
                res = nb1+nb2
                break;
            case '-':
                res = nb1-nb2
                break;
            case '*':
                res = nb1*nb2
                break;
            case '/':
                if(nb2 === 0){
                    res = 'Math Error'
                }
                else {
                    res = nb1/nb2
                }
                break;
            default:
                break;
        }

        setResult(`${nb1} ${operator} ${nb2} = ${res}`);
        setInputs({...initialInputs});
    }

    const {nb1, nb2, operator} = inputs;
    return (
        <form onSubmit={handleSubmit}>

            <div>
                <label htmlFor="nb1">Nombre 1 : </label>
                <input type="text" 
                value={nb1} onChange={(e) => handleInputs(e, numberValidator)} name='nb1'/>
            </div>
            <div>
                <label htmlFor="operator">Opérateur : </label>
                <select value={operator} onChange={handleInputs} name='operator'>
                    <option value='+'>+</option>
                    <option value='-'>-</option>
                    <option value='*'>*</option>
                    <option value='/'>/</option>
                </select>
            </div>
            <div>
                <label htmlFor="nb2">Nombre 2 : </label>
                <input type="text" 
                value={nb2} onChange={(e) => handleInputs(e, numberValidator)} name='nb2'/>
            </div>
            <div>
                <button type='submit'>Calculer</button>
                <input type="text" readOnly value={result} />
            </div>

        </form>
    );
};

export default Calculatrice