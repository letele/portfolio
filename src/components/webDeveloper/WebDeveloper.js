import { Applications,Packages,Templates } from "."
import { withModal } from "../hoc"


export function WebDeveloper({setToggle}){
    const tabs = [
        {name:"Applications", component:Applications},
        {name:"Packages", component:Packages},
        {name:"Templates", component:Templates},
    ]

    const Component = () => <></>

    return withModal(Component,'Web Developer',setToggle,tabs)
}