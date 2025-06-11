import { useState } from "react"

const Welcome = (props) => {
    return <h1>{props.text}</h1>
}

const MessageContainer = () => {
    const [isShow, setShow] = useState(true);
    const greeting = "Hello";

    return (
        <div>
            <button onClick={() => setShow(!isShow)}>Toggle</button>
            {!isShow ? <Welcome text={greeting} /> : null}
        </div>
    );
}

const today = new Date();

function formatDate(date){
    return new Intl.DateTimeFormat(
        'en-US',
        {weekday: 'long'}
    ).format(date);
}

const person = {
    name: "Leroy",
    theme: {
        backgroundColor: 'black',
        color: 'white'
    }
}

function ToDoList() {
    
    return (
        <>
            <h1>{person.name}'s To Do List for {formatDate(today)}</h1>
            <ul style={{
                backgroundColor: person.theme.backgroundColor,
                color: 'white'
            }}>
                <li>Improve the videophone</li>
                <li>Perform aeronutics lecturers</li>
            </ul>
        </>
    );
}

const WelcomeState = ({text, onClickHandler}) => {
    return (<div>{text}</div>);
}

const Button = ({label, onClickHandler}) => {
    return (
        <button onClick={onClickHandler}>{label}</button>    
    );
}

const MessageStateEg = () => {
    const [greeting, SetGreeting] = useState("Welcome to React");
    const [isShow, setShow] = useState(true);

    const handleChange = (event) => {
        SetGreeting(event.target.value);
    }

    const handleToggle = () => {
        setShow(!isShow);
    };

    return (

        <>
            <Button label="Toggle" onClickHandler={handleToggle} />
            <input type="text" value={greeting} onChange={handleChange} />
            {isShow ? <WelcomeState text={greeting} /> : null}
        </>
    );
}

function Item({name, isPacked}) {
    return (
        <li className="item">
            {name} {isPacked && '✅'}
        </li>
    )
}

function PackingList(){
    return (
        <section>
          <h1>Sally Ride's Packing List</h1>
          <ul>
            <Item 
              isPacked={true} 
              name="Space suit" 
            />
            <Item 
              isPacked={true} 
              name="Helmet with a golden leaf" 
            />
            <Item 
              isPacked={false} 
              name="Photo of Tam" 
            />
          </ul>
        </section>
      );
}


const User = ({user}) => (
    <Profile user={user}>
        <AvatarRound user={user} />
    </Profile>
);

const Profile = ({user, children}) => {

    return (
        <div className="profile">
            <div>{children}</div>
            <div>
                <p>{user.name}</p>
            </div>
        </div>
    );
}

const AvatarRound = ({user}) => (
    <img className="round" alt="avatar" src={user.avatarUrl} />
);
    
const ButtonOuter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <ButtonInner onClick={()=> setCount(count + 1)}>
                {count}
            </ButtonInner>
        </div>
    );
}

const ButtonInner = ({onClick, children}) => {
    console.log(children);
    return (
        <button onClick={onClick}>{children}</button>
    );
}

//Start destructuring props , lazy way to pass props
const Welcome2Container = () => {
    return (
        <div>
            <Welcome2 title={title} description={description} />
        </div>
    );
};

const Welcome2 = (props) => {
    return (
        <div style={{
        border: '1px solid black',
        height: '200px',
        width: '400px',
        }}>
        <Message {...props} />
        </div>
    );
}

const Message2 = ({title, description}) => {
    return (
         <>
          <h1>{title}</h1>
          <p>{description}</p>
        </>
    );
};

export {Welcome, MessageContainer, ToDoList, MessageStateEg, PackingList, Profile, AvatarRound, ButtonOuter, ButtonInner}