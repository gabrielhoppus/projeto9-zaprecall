import { useState } from "react";
import CARDS from "../mock.js";
import Question from "./Question";


export default function Cards({setCounter, counter}) {
    const [cards] = useState([...CARDS.sort( () => .5 - Math.random() )]);

    return (        
        <>
        {cards.slice(0,4)
            .map((card, index) =>
                <Question
                counter={counter}
                setCounter={setCounter}
                index={index}
                card={card}
                />
        )}
        </>
    );
}