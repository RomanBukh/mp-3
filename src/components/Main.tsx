import styled from "styled-components";
import { ReactNode } from "react";

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 40%;
    height: auto;
    align-items: center;
    margin: 1% 10% 0%;
`

interface ChildProp {
    children: ReactNode;
}

const Main = ({children}: ChildProp) => {
    return(
        <MainWrapper>
            {children}
        </MainWrapper>
    )
}

export default Main