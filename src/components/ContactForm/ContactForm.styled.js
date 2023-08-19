import styled from 'styled-components'

export const Container = styled.div`
    background: black;
    text-align: center;
    color: lawngreen;
    padding: 50px;
    font-family: math ,sans-serif;
    font-size: 20px;
`;

export const Form = styled.form`
    max-width: 50%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    border: 1px solid yellow;
    box-shadow: 0px 2px 16px 0px lawngreen;
    border-radius: 8px;
    
    padding: 30px 20px;
    margin: 0 auto;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;

    font-weight: 600;
    line-height: 1.10;
    letter-spacing: 0.2px;
    color: lawngreen;
    margin: 0 auto;
    padding-top: 20px;
`;

export const Input = styled.input`
    appearance: none;
    border: none;
    outline: none;
    border-bottom: 3px solid #757575;
    background-color: #0000;
    border-radius: 0 16px 0 16px;

    margin-bottom: 25px;
    margin-left: 15px;
    padding: 8px 10px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.11;
    letter-spacing: 0.72px;
    color: #757575;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: yellow;
    padding: 10px 30px;

    border-radius: 4px;
    box-shadow: 0px 2px 6px 0px lawngreen;
    border: 1px solid lawngreen;

    transition: all 300ms ease-in-out;

    &:hover {
        transform: scale(1.03);
        background-color: #09f;
    }
`;
