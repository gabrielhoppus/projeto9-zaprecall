import styled from "styled-components"
import logo from "../assets/logo.png"

function Logo() {
    return (
        <LogoContainer>
            <img src={logo} alt="spark-logo"/>
            <h1>ZapRecall</h1>
        </LogoContainer>
    )
}

export default Logo

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0; 
    img{
        width: 52px;
    }
    h1{
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }
`