import React, { useRef } from 'react';

function Refexample(props) {
    const nameRef = useRef();
    const emailRef = useRef();

    const inputRef = () => {
        console.log(nameRef.current.value);
        nameRef.current.style.background='red';
        emailRef.current.focus();
    }

    return (
        <div>
            <input ref={nameRef} type='text' name='text' placeholder='Enter Your Name' />
            <input ref={emailRef} type='text' name='text' placeholder='Enter Your Email' />
            <button onClick={()=>{inputRef()}}>Click...!</button>
        </div>
    );
}

export default Refexample;