function Botoes({setPergunta, setIcone, setFase, index, setDisabled, Erro, setIcon, Certo, Quase, setColor}) {

    function escolherErro(){
        setPergunta("pergunta-fechada")
        setIcone(true)
        setFase(`Pergunta ${index+1}`) 
        setDisabled(true)
        setIcon(Erro)
        setColor("vermelho_cor")
    }

    function escolherDuvida(){
        setPergunta("pergunta-fechada")
        setIcone(true)
        setFase(`Pergunta ${index+1}`) 
        setDisabled(true)
        setIcon(Quase)
        setColor("amarelo_cor")
    }

    function escolherAcerto(){
        setPergunta("pergunta-fechada")
        setIcone(true)
        setFase(`Pergunta ${index+1}`) 
        setDisabled(true)
        setIcon(Certo)
        setColor("verde_cor")
    }

    return (
        <div className="container-botoes">
            <button onClick={() => escolherErro()} className="vermelho">Não lembrei</button>
            <button onClick={() => escolherDuvida()} className="amarelo">Quase lembrei</button>
            <button onClick={() => escolherAcerto()} className="verde">Zap!</button>
        </div>
    )
}





export default Botoes