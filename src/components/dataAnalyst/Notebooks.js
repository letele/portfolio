import { useState } from "react"
import { IoLinkOutline } from "react-icons/io5";
import {Github} from "@letele/svg-icons"
import { notebooksData } from "../../data"

 export const Notebooks = () => {

    const [toggled, setToggled] = useState(null)

    const handleClick = val =>
    val === toggled ? setToggled(null) : setToggled(val)  

    const spanStyles ="lucida mr-03em fs-9pt"

    const articleStyles =`
        bg-f5f5f5 bd-afaeae mt-05em ml-2em p-05em fs-11pt w-600px
        maxw-80vw
    `
    const div2Styles =`
        p-02-05em bd-189bf1 out-189bf1 fs-9pt bd-afaeae ml-auto w-120px mt-1em
        hov-bdfff hov-bgfff
    `

    return (
        <ul>{notebooksData.map(i => {

            return (
                <li key={i.name} className="mb-1em">
                    
                    <div className="flex ali-c">
                        <span className={`
                            ${spanStyles} ${i.name === toggled?'c-16a3e4':'c-acacac'} 
                        `}>
                            [{i.name === toggled ? "*" :" "}]:
                        </span>
                        <h4 
                            className="c-arrow"
                            onClick = {() => handleClick(i.name)}
                        >{i.name}</h4>
                    </div>
                    
                    {i.name === toggled && 
                    <article className={articleStyles}>
                        {i.description.map(des => 
                            <p key={des} className="mb-05em">{des}</p>
                        )}
                        {i.notebooks.map(book => 
                            <ul key={book.name} className="mb-05em ml-05em">
                                <a 
                                    className="c-189bf1"
                                    rel="noopener noreferrer" 
                                    href={book.url} target="_blank"
                                >
                                    {book.name} <IoLinkOutline />
                                </a>
                                {book.description.map(desc =>
                                    <li key={desc} className="mt-05em mb-05em ml-1em">{desc}</li> 
                                )}
                            </ul>
                        )}
                        <p className="mb-05em">Packages used: </p>
                        <ul className="flex flex-wrap gap-1em ml-1em lucida fs-10pt">{
                            i.packages.map(pack => <li key={pack}>{pack}</li>)
                        }</ul>

                        <div className={div2Styles}>
                            <a 
                                className="flex ali-c jus-c"
                                rel="noopener noreferrer" 
                                href={i.repo} target="_blank"
                            >
                                <Github /><span className="ml-05em">View repo</span>
                            </a>
                        </div>
                    </article>}
                </li>
            )
        })}
        </ul>
    )
}