import { useEffect,useState } from "react";
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

    const {formState,onInputChange,username, email, password,resetInputs} = useForm({
        username:'',
        email:'',
        password:''
    });

    
  
    return (
        <>
            <h1>Formulario con CustomHook</h1>
            <hr></hr>
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="example@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contrasena"
                name="password"
                value={password}
                onChange={onInputChange}
            />
            <button
                className="btn btn-primary mt-2"
                onClick={resetInputs} >Reset</button>
            
        </>
    )
}
