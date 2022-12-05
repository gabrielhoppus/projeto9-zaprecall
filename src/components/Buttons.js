import styled from "styled-components";
import Miss from "../assets/icone_erro.png";
import Almost from "../assets/icone_quase.png";
import Correct from "../assets/icone_certo.png";

function Buttons({  setHasIcon,
                    setState,
                    index,
                    setIcon,
                    setColor,
                    setAnswered,
                    setButton,
                    setCounter,
                    counter,
                    setFinished,
                    setDataTest
                    }){

    function pickError(){
        setAnswered(true);
        setButton(false);
        setHasIcon(false);
        setState(`Pergunta ${index+1}`);
        setIcon(Miss);
        setColor("#FF3030");
        setCounter(counter+1);
        setFinished(true);
        setDataTest("no-icon");
        }

    function pickAlmost(){
        setAnswered(true);
        setButton(false);
        setHasIcon(false);
        setState(`Pergunta ${index+1}`);
        setIcon(Almost);
        setColor("#FF922E");
        setCounter(counter+1);
        setFinished(true);
        setDataTest("partial-icon");
        }

    function pickCorrect(){
        setAnswered(true);
        setButton(false);
        setHasIcon(false);
        setState(`Pergunta ${index+1}`);
        setIcon(Correct);
        setColor("#2FBE34");
        setCounter(counter+1);
        setFinished(true);
        setDataTest("zap-icon");
        }

    return (
        <ButtonContainer>
            <AnswerButton data-test="no-btn" onClick={() => pickError()} color="#FF3030">Não lembrei</AnswerButton>
            <AnswerButton data-test="partial-btn" onClick={() => pickAlmost()} color="#FF922E">Quase lembrei</AnswerButton>
            <AnswerButton data-test="zap-btn" onClick={() => pickCorrect()} color="#2FBE34">Zap!</AnswerButton>
        </ButtonContainer>
    )
}


export default Buttons;

const ButtonContainer = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin-left: 20px;
    column-gap: 10px;
`;

const AnswerButton = styled.button`
    background-color: ${props => props.color};
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    border-radius: 5px;
    border: 1px solid transparent;
    padding:5px;
`;