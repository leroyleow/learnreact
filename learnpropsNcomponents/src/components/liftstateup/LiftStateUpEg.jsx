import { useState } from "react";

const WelcomeState = ({text, onClickHandler}) => {
    return (
        <div>{text}</div>
    );
}

const Button = ({label, onClickHandler}) => {
    return (
        <button onClick={onClickHandler}>{label}</button>
    );
}

const MessageStateEg = () => {
    const [greeting, SetGreeting] = useState("Welcome to React");
    const [isShow, SetShow] = useState(true);

    const handleChange = (event) => {
        SetGreeting(event.target.value);
    };

    const handleToggle = () => {
        SetShow(!isShow);
    };

    return (

        <>
            <Button label="Toggle" onClickHandler={handleToggle} />
            <input type="text" value={greeting} onChange={handleChange} />
            {isShow ? <WelcomeState text={greeting} /> : null}
        </>
    );

};

export default MessageStateEg;