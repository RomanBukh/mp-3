import Main from "./Main";
import { useEffect } from "react";
import { TitleProps } from "../interfaces/TitleProps.ts";

export default function Ref({setTitle}: TitleProps){
    useEffect(() => {
        setTitle('References');
    }, [setTitle]);
    
    return(
        <Main>
            <p><b>Dale Laroque</b></p>
            <p>Electronics Teacher, Peabody Veterans Memorial High School</p>
            <p>larocqued@peabody.k12.ma.us</p>
            <p><b>Allan Brockenbrough</b></p>
            <p>CS Professor, Salem State University</p>
            <p>abrockenbrough@salemstate.edu</p>
            <p><b>Leonid Maltsev</b></p>
            <p>IT Manager, Salem State University</p>
            <p>lmaltsev@salemstate.edu</p>
        </Main>
    )
}