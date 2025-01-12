import { useEffect,useState } from "react";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username:'strider',
        email:'whoisyio@gmail.com'
    });
    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }
    //Se ejecutara 1 vez el useEffect al montar el componente
    useEffect(() => {
        console.log('Hey');
    }, []);
    //Se ejecutar cada vez que el formsState cambie
    useEffect(() => {
        console.log('formState');
    }, [formState]);
    //Se ejecutara cada vez que el email cambie
    useEffect(() => {
        console.log('email');
    }, [email]);
    return (
        <>
            <h1>useEffect</h1>
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
        </>
    )
}
