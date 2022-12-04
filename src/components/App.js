function App() {
  return (

    <div className="screen-container">
      <div className="logo-container">
        <img src="./assets/img/logo.png" />
        <h1>ZapRecall</h1>
      </div>
      <div className="perguntas">
        <div className="pergunta-fechada">
          <p className="concluido">Pergunta 1</p>
          <img src="./assets/img/seta_play.png" />
        </div>
        <div className="pergunta-aberta">
          <p>O que é JSX?</p>
          <img src="./assets/img/seta_virar.png" />
        </div>
        <div className="pergunta-aberta">
          <p>Uma extensão de linguagem do JavaScript</p>
          <div className="container-botoes">
            <button className="verde">Não lembrei</button>
            <button className="amarelo">Quase lembrei</button>
            <button className="vermelho">Zap!</button>
          </div>
        </div>
        <div className="pergunta-fechada">
          <p>Pergunta 4</p>
          <img src="./assets/img/seta_play.png" />
        </div>
      </div>
      <div className="footer-concluidos">
        0/4 Concluídos
      </div>
    </div>


  )
}

export default App;
