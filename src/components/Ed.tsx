import bu from "../images/bu_logo.png";
import ssu from "../images/ssu_logo.png";
import Main from "./Main";
import { useEffect } from "react";
import { TitleProps } from "../interfaces/TitleProps.ts";

export default function Ed({setTitle}: TitleProps){
    useEffect(() => {
        setTitle('Education');
    }, [setTitle]);

    return(
        <Main>
            <h3>Boston University, (Boston, MA)</h3>
            <p><strong>BA Computer Science</strong> May 2025</p>
            <p>Course Work: Concepts Of Programming Languages, Probability in Computing, Analysis of Algorithms</p>
            <h3>Salem State University, (Salem, MA)</h3>
            <p><strong>BA Computer Science</strong> September 2021 - May 2023</p>
            <p>Course Work: Survey of CS, Software Design/Programming I & II, Data Structures and Algorithms, Computer Architecture/Organization, Database Systems</p>
            <img src={bu} alt="Boston University" style={{width:'30%', margin:'2%'}}></img>
            <img src={ssu} alt="Salem State University" style={{width:'30%', margin:'2%'}}></img>
        </Main>
    )
}