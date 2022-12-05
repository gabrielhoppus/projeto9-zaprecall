import Play from "../assets/seta_play.png";
import Turn from "../assets/seta_virar.png";
import { useState } from "react";
import Buttons from "./Buttons";
import styled from "styled-components";

function Question({index, card, setCounter, counter}){
    const [icon, setIcon] = useState(Play);
    const [state, setState] = useState(`Pergunta ${index + 1}`);
    const [hasIcon, setHasIcon] = useState(true);
    const [isOpen, setOpen] = useState(false);
    const [color, setColor] = useState("");
    const [wasAnswered, setAnswered] = useState(false);
    const [hasButton, setButton] = useState(false);
    const [finished, setFinished] = useState(false);
    const [dataTest, setDataTest] = useState("");
    const [selectedQuestion, setSelected] = useState([]);

    function abrirPergunta(card) {

        if (icon === Play) {
            const perguntas = [...selectedQuestion, card];
            setSelected(perguntas);
            setIcon(Turn);
            setHasIcon(false);
            setOpen(true);
            setState(card.question);
        }else if (icon === Turn){
            setState(card.answer);
            setHasIcon(false);
            setButton(true);
            setOpen(false);
        };
    };

    return (
        <div data-test="flashcard">
            {hasIcon && (
                <ClosedQuestion>
                    <p data-test="flashcard-text">{state}</p>
                    <img data-test="play-btn" onClick={() => abrirPergunta(card)}
                        alt="play_symbol"
                        src={icon} />
                </ClosedQuestion>
            )}
            {isOpen && (
                <OpenQuestion>
                    <p data-test="flashcard-text">{state}</p>
                    <img data-test="turn-btn" onClick={() => abrirPergunta(card)}
                        alt="play_symbol"
                        src={icon} />
                </OpenQuestion>
            )}
            {hasButton && (
                <OpenQuestion>
                    <p data-test="flashcard-text">{state}</p>
                    <Buttons
                        setHasIcon={setHasIcon}
                        setState={setState}
                        index={index}
                        setIcon={setIcon}
                        setColor={setColor}
                        setAnswered={setAnswered}
                        setButton={setButton}
                        setCounter={setCounter}
                        counter={counter}
                        setFinished={setFinished}
                        setDataTest={setDataTest}
                    />
                </OpenQuestion>
            )}
            {wasAnswered && (
                <ClosedQuestion color={color} finished={finished}>
                    <p data-test="flashcard-text">{state}</p>
                    <img data-test={dataTest} alt="play_symbol" src={icon} />
                </ClosedQuestion>
            )}
        </div>
    );
}

export default Question


const ClosedQuestion = styled.div`
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

const OpenQuestion = styled.div`
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