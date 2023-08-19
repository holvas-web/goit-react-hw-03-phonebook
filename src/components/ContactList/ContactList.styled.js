import styled from 'styled-components'

export const Button = styled.button`
        background-color: yellow;
        align-items: center;

        margin: 10px 10px;
        padding: 2px 10px;

        border-radius: 4px;
        box-shadow: 0px 2px 6px 0px lawngreen;
        border: 2px solid lawngreen;

        transition: all 300ms ease-in-out;

        &:hover {
            transform: scale(1.03);
            background-color: #09f;
            border: 1px solid yellow;
        }
`;

export const List = styled.ul `
    width: 50%;
    margin: 0 auto;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: stretch;

    border: 2px solid yellow;
    border-radius: 8px;
    box-shadow: 0px 2px 16px 0px lawngreen;
    
    margin: 0 auto;
    list-style: none;
    font-size: 16px;
`;

export const Item = styled.li `
    font-size: 14px;
    line-height: 1.2;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin: 5px;
    padding-left: 5px;
    padding-right: 15px;
`;

export const Header = styled.h2`
    padding-top: 20px;
`;
