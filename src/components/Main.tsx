import styled from "styled-components";

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 40%;
    height: auto;
    align-items: center;
    margin: 1% 10% 0%;

`

const Main = ({children}) => {
    return(
        <MainWrapper>
            {children}
        </MainWrapper>
    )
}

export default Main