import { VscGithubInverted   } from "react-icons/vsc";
import { useToggle, useWindowDimensions } from "@letele/hook-me-up"
import { randomElement } from "@letele/ecmascripts"
import { Linkedin, Stackoverflow } from "@letele/svg-icons"

import { About, DataAnalyst, WebDeveloper } from "./components"

import { landscape, portrait } from "./imgs"
import avatar from './imgs/avatar.jpg'
import { useEffect, useState } from "react";

export default function App(){

    const [bg,setBg] = useState(null)

    useEffect(() => {
        const img = height > width ? randomElement(portrait) : randomElement(landscape)       
        setBg(img)
        // eslint-disable-next-line
    },[])
    
    const  { toggle, setToggle } = useToggle()

    const {height, width} = useWindowDimensions()    
    const [about,analyst,developer] = ['about','analyst','developer']

    const divStyles = 'w-100pc h-100pc pof ovy-hide bg-cover bg-000 segoe_reg'
    
    return(
        <div 
            className={divStyles}
            style={{
                backgroundImage:`url(${bg})`,
                backgroundPosition: "center 0",
            }}
        >
            <div className="w-100pc h-100pc por flex bg-00000099">
                <div className="txt-c c-acacac m-auto">
                    <img 
                        src={avatar} 
                        alt="avatar pic" 
                        className="w-210px h-210px br-50pc hov-bshdw linear-03s"
                        onClick={() => setToggle(about)}
                    />
                    <div className="mb-03em fs-2em">Letele Motebang</div>
                    <div className="fs-12em">
                        <span onClick={() => setToggle(analyst)} 
                        className="c-arrow hov-tshdw linear-03s"> Data Analyst</span>
                        &nbsp; &#183; &nbsp; 
                        <span onClick={() => setToggle(developer)} 
                        className="c-arrow hov-tshdw linear-03s">Web Developer</span>
                    </div>
                    <ul className='flex mt-05em fs-2em jus-even'>
                        <li><a 
                                href = "https://www.linkedin.com/in/letele"
                                rel="noopener noreferrer"
                                target="_blank" 
                            ><Linkedin /></a>
                        </li>
                        <li><a 
                                href = "https://github.com/letele"
                                rel="noopener noreferrer"
                                target="_blank" 
                            ><VscGithubInverted /></a>
                        </li>
                        <li><a 
                                href = "https://stackoverflow.name/newbie"
                                rel="noopener noreferrer"
                                target="_blank" 
                            ><Stackoverflow /></a>
                        </li>
                    </ul>
                </div>

                {toggle===about && <About setToggle={setToggle}/>}
                {toggle===analyst && <DataAnalyst setToggle={setToggle}/>}
                {toggle===developer && <WebDeveloper setToggle={setToggle}/>}
            </div>   
        </div>
    )
}