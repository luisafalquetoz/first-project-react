import styled from "styled-components";
import BgImage from "../../assets/bg image2.svg"

export const Container = styled.div`
    background: url("${BgImage}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;
`;

export const Img = styled.img`
    margin-top: 30px;
`;

export const Button = styled.button`
    width: 342px;
    height: 74px;
    border-radius: 14px;
    background: transparent;
    border-radius: 14px;
    border: 1px solid #FFF;
    margin-top: 120px;

    font-size: 17px;
    font-weight: 700;
    line-height: 28px;
    font-style: normal;
    color: #FFF;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    cursor: pointer;
    
    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 0.6;
    }
    img {
        transform: rotateY(180deg);
    }
`;

export const User = styled.li `
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    border: none;
    outline: none;
    margin-top: 20px;
    p {
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
        font-style: normal;
        color: #FFF;
    }
    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`;