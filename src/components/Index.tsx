import Main from "./Main.tsx";
import me from "../images/mp1-image.jpg";
import { useEffect } from "react";
import { TitleProps } from "../interfaces/TitleProps.ts";

export default function Index({setTitle}: TitleProps){
    useEffect(() => {
        setTitle('Home');
    }, [setTitle]);

    return (
        <Main>
            <div>
            <img src={me} alt="Me at Niagara Falls" style={{width:'90%', margin:'2%'}}/>
            <p>
                My name is Roman Bukhovko, and I am currently pursuing a degree in Computer Science at Boston University.
                This website serves as a showcase of my educational background, professional experiences, and the various projects I've had the opportunity to work on.
                From academic achievements to hands-on coding projects, I aim to demonstrate my passion for technology and problem-solving.
                Thank you for visiting, and I invite you to explore my journey and accomplishments further.
            </p>
            </div>
        </Main>
    )
}