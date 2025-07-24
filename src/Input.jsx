import { useState } from 'react';
import './App.css'

function Input() {

    const [input, setInput] = useState("");
    const [errorState, setErrorState] = useState(false)

    function handleChange(event) {
        setInput(event.target.value);
        if (errorState) setErrorState(false);
    }

    function validate(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (input.trim() === ""  || !validate(input)) {
            setErrorState(true)
        } else {
            setErrorState(false)
        }

        console.log("Submitted");

    }

    return (
        <>
            <div className='input-div'>
                <input onChange={handleChange} placeholder="Email Address" name="email" type="email" value={input} required/>
                {errorState && <img className='error-icon' src='images/icon-error.svg' alt=''/>}
                <button onClick={handleSubmit} className='submit' type='submit'><img src='images/icon-arrow.svg' alt='Submit'></img></button>
            </div>
            {errorState && <p className='error'>Please provide a valid email</p>}
        </>
    )
}

export default Input;