import styled from "styled-components"

function Botoes({setPergunta, setIcone, setFase, index, Erro, setIcon, Certo, Quase, setColor, setRespondida, setBotao, setContador, contador, setFinished, setDataTest}) {

    function escolherErro(){
        setRespondida(true)
        setBotao(false)
        setIcone(false)
        setPergunta("pergunta-fechada")
        setFase(`Pergunta ${index+1}`) 
        setIcon(Erro)
        setColor("#FF3030")
        setContador(contador+1)
        setFinished(true)
        setDataTest("no-icon")
    }

    function escolherDuvida(){
        setRespondida(true)
        setBotao(false)
        setIcone(false)
        setPergunta("pergunta-fechada")
        setFase(`Pergunta ${index+1}`) 
        setIcon(Quase)
        setColor("#FF922E")
        setContador(contador+1)
        setFinished(true)
        setDataTest("partial-icon")
    }

    function escolherAcerto(){
        setRespondida(true)
        setBotao(false)
        setIcone(false)
        setPergunta("pergunta-fechada")
        setFase(`Pergunta ${index+1}`) 
        setIcon(Certo)
        setColor("#2FBE34")
        setContador(contador+1)
        setFinished(true)
        setDataTest("zap-icon")
    }

    return (
        <ContainerBotao>
            <Botao data-test="no-btn" onClick={() => escolherErro()} color="#FF3030">Não lembrei</Botao>
            <Botao data-test="partial-btn" onClick={() => escolherDuvida()} color="#FF922E">Quase lembrei</Botao>
            <Botao data-test="zap-btn" onClick={() => escolherAcerto()} color="#2FBE34">Zap!</Botao>
        </ContainerBotao>
    )
}


export default Botoes

const ContainerBotao = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin-left: 20px;
    column-gap: 10px;
`

const Botao = styled.button`
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
`