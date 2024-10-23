import Main from "./Main";
import prog from "../images/prog.jpg";
import ee from "../images/ee.png";
import cla from "../images/cla.jpg";
import swim from "../images/swim.jpg";
import { useEffect } from "react";
import { TitleProps } from "../interfaces/TitleProps.ts";

export default function Act({setTitle}: TitleProps){
    useEffect(() => {
        setTitle('Activites');
    }, [setTitle]);
    
    return(
        <Main>
            <h4>These are some of the activites I have done. </h4>
            <ul>
                <li>Programming Club</li>
                <li>Eastern European Society</li>
                <li>Clarinet in an orchresta</li>
                <li>Swim team</li>
            </ul>
            <div>
                <img src={prog} alt="Programming" style={{width:'40%', margin:'2%'}}></img>
                <img src={ee} alt="Eastern Europe" style={{width:'30%', margin:'2%'}}></img>
                <img src={cla} alt="Clarinet" style={{width:'40%', margin:'2%'}}></img>
                <img src={swim} alt="Swimming" style={{width:'40%', margin:'2%'}}></img>
            </div>
        </Main>
    )
}