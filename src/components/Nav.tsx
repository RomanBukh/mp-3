import styled from "styled-components";
import { Link } from "react-router-dom";

const NavWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: gold;
    border-style: double;
    border-color: red;
    height: auto;
    margin: 5% 2% 0%;
    padding: 0% 5% 0%;

    a:hover{
        background-color: lightblue;
    }

    @media screen and (max-width: 750px){
        display: flex;
        flex-direction: row;
        height: 12vh;
        padding: 0%;
        align-items: center;
    }
`

const NavLink = ({to, children}: {to: string, children: React.ReactNode}) => {
    return (
        <Link style={{padding: "0.5rem", margin: "0.75rem", border: 'solid', color: 'red', textAlign: 'center'}} to={to}>
            {children}
        </Link>
    )
}

export default function Nav(){
    return(
        <NavWrapper>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={"/education"}>Education</NavLink>
            <NavLink to={"/work"}>Work</NavLink>
            <NavLink to={"projects"}>Projects</NavLink>
            <NavLink to={"/activites"}>Activites</NavLink>
            <NavLink to={"/references"}>References</NavLink>
        </NavWrapper>
    )
}