import { useState,useEffect } from "react"
import { VscClose } from "react-icons/vsc";

function BaseTab(props) {

    const state = props.title === 'Data Analysis' ? 'Notebooks' : (
        props.title === 'Web Developer' ? 'Applications' : null
    ) 

    const [activeTab, setActiveTab] = useState(state)

    const active = (name) => activeTab === name 

    const activeTxt = (name) => active(name)
    ? 'c-16a3e4 txt-shdw-acacac':'c-acacac'
    
    const sectionStyles = "w-100pc h-100pc"

    const navStyles = `
        flex ali-c gap-1em h-30px w-fcnt lsp-05em fw-bold 
    `
    const articleStyles = "flex flex-wrap w-100pc ovy-auto maxh-80vh"


    return (
        <div className={sectionStyles}>
            
            <nav className={navStyles}>{props.tabs.map(tab => 
                <li 
                    key={tab.name} 
                    className={`c-arrow ${activeTxt(tab.name)}`} 
                    onClick={() => setActiveTab(
                        active(tab.name)?null:tab.name
                    )}
                >{tab.name}</li>
            )}</nav>

            {props.tabs.map(tab => activeTab===tab.name && (
                <article 
                    key={`_${tab.name}`} 
                    className={articleStyles}
                ><tab.component /></article>
            ))}
        </div>
    )
}

export function withModal(Component,title,setToggle,tabs) {

    function Modal(){
        const [opacity, setOpacity] = useState(0)

        useEffect(() => setOpacity(1),[])

        const divStyles = `
            bd-189bf1 w-720px maxw-95vw h-fcnt ml-auto mr-auto mt-2em linear-05s segoe_reg
            fs-11pt
        `

        return (
            <div className={divStyles} style={{opacity}}>
            <div className='bg-ececec flex '>
                <div className='mt-auto mb-auto ml-03em fs-11pt'>{title}</div>
                <div 
                    className='ml-auto flex ali-c jus-c p-03em c-arrow hov-cfff hov-bgpink'
                    onClick={() => setToggle(null)}
                >
                    <VscClose/>
                </div>
            </div>
            <div className='bg-fff p-02-05em'>
                <Component />
                <BaseTab tabs={tabs} title={title} />
            </div>
        </div>
        )
    }
    
    return (
        <div className='poa z-1 blur-5px w-100pc h-100pc flex'>
           <Modal/>
        </div>
        
    )
}
