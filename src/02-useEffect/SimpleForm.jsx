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

    useEffect(() => {
        console.log('Hey');
    }, []);

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
