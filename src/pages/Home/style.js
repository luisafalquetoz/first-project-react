import styled from "styled-components";
import BgImage from "../../assets/bg image1.svg"

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

export const Label = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.408px;
    font-style: normal;
    color: #EEE;
    margin-left: 25px;
`;

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    border: none;
    outline: none;
    padding-left: 25px;
    margin-bottom: 34px;

    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    font-style: normal;
    color: #FFF;

`;

