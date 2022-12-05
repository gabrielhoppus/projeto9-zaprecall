import Cards from "./Cards";
import Footer from "./Footer";
import Logo from "./Logo";
import styled from "styled-components";
import { useState } from "react";

export default function Main() {
    const [counter, setCounter] = useState(0);

    return (
        <ScreenContainer>
            <Logo />
            <Cards setCounter={setCounter} counter={counter}/>
            <Footer counter={counter}/>
        </ScreenContainer>
    );
}


const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`