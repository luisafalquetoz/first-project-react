import styled from "styled-components";

export const Button = styled.button`
    width: 342px;
    height: 74px;
    border-radius: 14px;
    background: ${ props => props.isTransparent ? 'transparent' : 'rgba(0, 0, 0, 0.8)'} ;
    border-radius: 14px;
    border: ${ props => props.isTransparent ? '1px solid #FFF' :  'none'};
    margin-top: 130px;

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
        transform: ${ props => props.isTransparent && 'rotateY(180deg)'};
    }
`;
