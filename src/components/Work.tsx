import Main from "./Main";
import { useEffect } from "react";
import { TitleProps } from "../interfaces/TitleProps.ts";

export default function Work({setTitle}: TitleProps){
    useEffect(() => {
        setTitle('Work');
    }, [setTitle]);

    return(
        <Main>
            <h3>Grader Than, Boston, MA</h3>
            <p><strong>Educational Content Developer (Contractor)</strong>: May 2024 - Present</p>
            <ul>
                <li>Developed comprehensive education modules for high school students, focusing on programming and computer science concepts.</li>
                <li>Built interactive and engaging lessons, including coding exercises, quizzes, and projects to enhance student understanding and retention.</li>
            </ul>
            <h3>Boston University LETS, Boston, MA</h3>
            <p><strong>IT Support Specialist</strong>: September 2023 - Present</p>
            <ul>
                <li>Provided specialized technical support for classrooms, ensuring seamless operation of instructional technology.</li>
                <li>Responded promptly to technical issues, troubleshooting and resolving hardware and software problems.</li>
            </ul>
            <h3>Salem State University IT Department, Salem, MA</h3>
            <p><strong>IT Service Desk Aide</strong>: October 2021 - August 2023</p>
            <ul>
                <li>Coordinated with 3 technicians on installation, configuration, and maintenance of hardware and software components, ensuring optimal system performance.</li>
                <li>Collaborated with other technical teams to escalate and resolve complex technical issues in a timely manner.</li>
            </ul>
        </Main>
    )
}