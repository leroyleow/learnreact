import { useEffect } from "react";
import { useRef } from "react";

const Toggle = ({toggle, onToggle}) => {
    const [title, setTitle] = useState("Hello React");
    const didMount = useRef(false);

    useEffect(() => {
        if(didMount.current)
        {
            console.log('I run only if toggle changes')
        }
        else {
            didMount.current = true;
        }        
        console.log('I run on every update');
    },[toggle]);
    function handleChange(e) {
        setTitle(e.target.value)
    }

    
    return (
        <div>
            <input type="text" value={title} onChange={handleChange} />
            <button type="button" onClick={onToggle}>
                Toogle
            </button>
            {toggle && <div>{title}</div>}
        </div>
    );
}

const ToggleUEOnce = ({toggle, onToggle}) => {
    const [title, setTitle] = useState("Hello React");
    const calledOnce = useRef(false);
    useEffect(() => {
        if(calledOnce.current) {
            return;
        }
        if(toggle === false) {
            console.log(' I run only once if toggle is false.');
            calledOnce.current = true;
        }
    },[toggle]);
    function handleChange(e) {
        setTitle(e.target.value)
    }
    return (
        <div>
            <input type="text" value={title} onChange={handleChange} />
            <button type="button" onClick={onToggle}>
                Toggle
            </button>
            {toggle && <div>{title}</div>}
        </div>
    );
}
function StopWatch() {
    const [timer, setTimer] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => setTimer(timer+1), 1000);
        //clean up resource 
        return clearInterval(interval)
    }, [])
    return <div>{time}</div>
}
export  {Toggle, ToggleUEOnce};