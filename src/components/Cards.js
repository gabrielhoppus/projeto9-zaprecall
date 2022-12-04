import { useState } from "react"
import CARDS from "../mock.js"
import Question from "./Question"


export default function Cards({setContador, contador}) {
    const [cards] = useState([...CARDS.sort( () => .5 - Math.random() )])
    const [pergunta, setPergunta] = useState("pergunta-fechada")
    const [perguntaSelecionada, setPerguntaSelecionado] = useState([])


    return (
        
        <>
        {cards.slice(0,4)
            .map((card, index) =>                
                <Question
                contador={contador}
                setContador={setContador}
                setPergunta={setPergunta}
                setPerguntaSelecionado={setPerguntaSelecionado}
                index={index}
                perguntaSelecionada={perguntaSelecionada}
                card={card}
                pergunta={pergunta}
                
                />

        )}
        </>
    )
}