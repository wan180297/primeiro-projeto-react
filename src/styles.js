import styled from "styled-components";
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export const ToDoList = styled.div`
    background-color: #ffffff;
    padding: 30px 20px;
    border-radius: 5px;

    ul {
        padding: 0;

        h3 {
            text-align: center;
        }
    }
`

export const Input = styled.input`
    outline: none;
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    height: 40px;
    margin-right: 40px;
    width: 342px;
`
export const Button = styled.button`
    background-color: #8052EC;
    border-radius: 5px;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    height: 40px;
    border: none;
    color: #ffffff;
    width: 130px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 0.6;
    }
`

export const ListItem = styled.div`
    background: ${props => props.isFinished ? "#e8ff8b" : "#e4e4e4"};
    box-shadow: 1px 4px 10px rgba( 0, 0, 0, 0.2);
    border-radius: 5px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 0px 10px;
    width: 500px;
    transition: all 0.5s;
    li {
        list-style: none;
    }
`
export const Check = styled(FcCheckmark)`
    cursor: pointer;
`
export const Trash = styled(FcEmptyTrash)`
    cursor: pointer;
`