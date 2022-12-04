import Play from "../assets/seta_play.png"
import Turn from "../assets/seta_virar.png"
import Erro from "../assets/icone_erro.png"
import Quase from "../assets/icone_quase.png"
import Certo from "../assets/icone_certo.png"
import { useState } from "react"
import Botoes from "./Botoes"

function Question({ index, perguntaSelecionada, setPergunta, setPerguntaSelecionado, card, pergunta }) {
    const [icon, setIcon] = useState(Play)
    const [fase, setFase] = useState(`Pergunta ${index + 1}`)
    const [temIcone, setIcone] = useState(true)
    const [disabled, setDisabled] = useState(false)
    const [color, setColor] = useState("")

    function abrirPergunta(card) {
        if (!perguntaSelecionada.includes(card)) {
            const perguntas = [...perguntaSelecionada, card]
            setPergunta("pergunta-aberta")
            setPerguntaSelecionado(perguntas)
            setIcon(Turn)
            setFase(card.question)
        } else if (icon === Turn) {
            setFase(card.answer)
            setIcone(false)
        }
    }

    return (
        <>
            {temIcone && (
                <div  key={icon} className={perguntaSelecionada.includes(card) ? pergunta : "pergunta-fechada"}>
                    <p className={color}>{fase}</p>
                    <img disabled={disabled} onClick={() => abrirPergunta(card)}
                        alt="play_symbol"
                        src={icon} />
                </div>
            )}
            {!temIcone && (
                <div  key={icon} className={perguntaSelecionada.includes(card) ? pergunta : "pergunta-fechada"}>
                    <p>{fase}</p>
                    <Botoes 
                        setPergunta={setPergunta}
                        setIcone={setIcone}
                        setFase={setFase}
                        index={index}
                        setDisabled={setDisabled}
                        Erro={Erro}
                        setIcon={setIcon}
                        Certo={Certo}
                        Quase={Quase}
                        setColor={setColor}
                    />
                </div>
            )}
        </>
    )
}

export default Question
