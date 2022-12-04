import Play from "../assets/seta_play.png"
import Turn from "../assets/seta_virar.png"
import Erro from "../assets/icone_erro.png"
import Quase from "../assets/icone_quase.png"
import Certo from "../assets/icone_certo.png"
import { useState } from "react"
import Botoes from "./Botoes"
import styled from "styled-components"

function Question({ index, perguntaSelecionada, setPergunta, setPerguntaSelecionado, card, pergunta, setContador, contador }) {
    const [icon, setIcon] = useState(Play)
    const [fase, setFase] = useState(`Pergunta ${index + 1}`)
    const [temIcone, setIcone] = useState(true)
    const [estaAberto, setAberto] = useState(false)
    const [color, setColor] = useState("")
    const [foiRespondida, setRespondida] = useState(false)
    const [temBotao, setBotao] = useState(false)
    const [finished, setFinished] = useState(false)
    const [dataTest, setDataTest] = useState("")

    function abrirPergunta(card) {

        if (icon === Play) {
            const perguntas = [...perguntaSelecionada, card]
            setPergunta("pergunta-aberta")
            setPerguntaSelecionado(perguntas)
            setIcon(Turn)
            setIcone(false)
            setAberto(true)
            setFase(card.question)
        } else if (icon === Turn) {
            setFase(card.answer)
            setIcone(false)
            setBotao(true)
            setAberto(false)
        }
    }

    return (
        <div data-test="flashcard">
            {temIcone && (
                <PerguntaFechada>
                    <p data-test="flashcard-text">{fase}</p>
                    <img data-test="play-btn" onClick={() => abrirPergunta(card)}
                        alt="play_symbol"
                        src={icon} />
                </PerguntaFechada>
            )}
            {estaAberto && (
                <PerguntaAberta>
                    <p data-test="flashcard-text">{fase}</p>
                    <img data-test="turn-btn" onClick={() => abrirPergunta(card)}
                        alt="play_symbol"
                        src={icon} />
                </PerguntaAberta>
            )}
            {temBotao && (
                <PerguntaAberta>
                    <p data-test="flashcard-text">{fase}</p>
                    <Botoes
                        contador={contador}
                        setContador={setContador}
                        setPergunta={setPergunta}
                        setIcone={setIcone}
                        setFase={setFase}
                        index={index}
                        Erro={Erro}
                        setIcon={setIcon}
                        Certo={Certo}
                        Quase={Quase}
                        setColor={setColor}
                        perguntaSelecionada={perguntaSelecionada}
                        setPerguntaSelecionado={setPerguntaSelecionado}
                        card={card}
                        pergunta={pergunta}
                        setRespondida={setRespondida}
                        setBotao={setBotao}
                        setFinished={setFinished}
                        setDataTest={setDataTest}
                    />
                </PerguntaAberta>
            )}
            {foiRespondida && (
                <PerguntaFechada color={color} finished={finished}>
                    <p data-test="flashcard-text">{fase}</p>
                    <img data-test={dataTest} alt="play_symbol" src={icon} />
                </PerguntaFechada>
            )}

        </div>
    )
}

export default Question


const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF; 
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.color};
        text-decoration: ${props => props.finished ? "line-through" : "none"}
    }
`

const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`