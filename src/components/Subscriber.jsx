import { useState } from "react";

export default function Subscriber() {
    const [name, setName] = useState("");

    function onSubscribe(event) {
        event.preventDefault();
        alert(`Hey ${name}! Cakes love you`)
    }

    function onName(event) {
        setName(event.target.value);
    }

    return(
        <div className="Subscribe">
            <form onSubmit={onSubscribe}>
                <input value={name} onChange ={(event) => 
                onName(event)}/>
                <br/>
                <button>Subscribe us</button>
            </form>
        </div>
    )
}
