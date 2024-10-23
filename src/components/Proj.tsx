import Main from "./Main";
import { useEffect  } from "react";
import { TitleProps } from "../interfaces/TitleProps.ts";
import Calc from "./Calculator.tsx"

export default function Proj({setTitle}: TitleProps){
    useEffect(() => {
        setTitle('Projects');
    }, [setTitle]);
    
    return(
        <Main>
            <h3>Calculator</h3>
            <Calc/>
        </Main>
    )
}