import { useEffect, useState } from "react";
import { VscChromeClose,VscVmRunning,VscGithubInverted  } from "react-icons/vsc";
import  { RubiksCube, Hearts } from  "@letele/svg-icons" 

import { webAppsData } from "../../data"
import cfopbg from "../../imgs/gifs/cfop.gif"
import heartsbg from "../../imgs/gifs/hearts.gif"
import svgiconsbg from "../../imgs/gifs/svgicons.gif"

function Card({data,Icon,callBack}){

    const [opacity, setOpacity] = useState(0)

    useEffect(() => setOpacity(1),[])

    const div1Styles = "bd-afaeae h-100pc w-330px br-5px ov-hidden linear-05s"

    const ulStyles = "flex ali-c gap-15em h-100pc mr-03em mt-03em"

    return (
        <div className= {div1Styles} style={{opacity}}>
            <div className="flex jus-btwn bg-cccccc54 fs-12px">
                <p className="flex ali-c gap-05em ml-03em">
                    <Icon />
                    {data.name}
                </p>

                <ul className={ulStyles}>{ data.links.map(link => 
                    <li key={link.type}>
                        <a rel="noopener noreferrer" 
                            href={link.href} 
                            target="_blank"
                        >{link.type==='App' ? 
                            <VscVmRunning />: <VscGithubInverted />
                        }</a>
                    </li>)}

                    <li onClick={callBack}>
                        <VscChromeClose />
                    </li>
                </ul>
            </div>
            
            <div className="p-05em fs-10pt">
                {data.description.map((i,j) => 
                    <p className="mb-03em"  key={`.${j}`}>{i}</p>)
                }
            </div>
        </div>
    )
}

export function Applications(){
    
    const Window = ({data,Icon,img}) => {

        const [toggle, setToggle] = useState(false)
        
        const articleStyles = `
            lsp-05em float-l m-05em w-330px h-204px p-02-05em por
        `
        const Cover = ({callBack}) => {
            
            const div1Styles = `
                poa h-100pc w-100pc z-0 t-0 l-0 bg-3b4452a6 br-5px 
                blend-mul bg-cover
            `
            return (
                <div className="poa h-100pc w-100pc" onClick={callBack}>
                    <div 
                        className={div1Styles}
                        style={{backgroundImage:`url(${img})`}}
                    ></div>
                    
                    <div className="c-fff poa b-30px l-10px gap-05em">
                        <Icon className="fs-50px"/>
                        <h3 className="fw-normal">{data.name}</h3>
                    </div>
                </div>
            )
        }
        
        return (
            <article className={articleStyles}>
                {toggle ? 
                <Card  data={data} Icon={Icon} 
                    callBack={() => setToggle(false)}
                /> : 
                <Cover callBack={() => setToggle(true)}/>}
            </article>
        )
    }

    const SvgAppIcon = () => <span>&#10024;</span>
        
    return (
        <ul>
            <Window data={webAppsData[0]} Icon={RubiksCube} img={cfopbg}/>
            <Window data={webAppsData[1]} Icon={Hearts} img={heartsbg}/>
            <Window data={webAppsData[2]} Icon={SvgAppIcon} img={svgiconsbg}/>
        </ul>
    )
}