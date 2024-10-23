import styled from "styled-components";
import HeaderProps from "../interfaces/HeaderProps.ts"

const HeaderWrapper = styled.header`
    position: relative;
    background-color: gold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-shadow: 2px 2px red;
    border-style: double;
    border-color: red;
`;

export default function Header({title}: HeaderProps){
    return(
        <HeaderWrapper>
            <h1>Roman Bukhovko</h1>
            <p>{title}</p>
        </HeaderWrapper>
    )
}