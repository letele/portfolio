import { Notebooks } from "."
import { withModal } from "../hoc"


export function DataAnalyst({setToggle}){
    const tabs = [
        {name:"Notebooks", component:Notebooks}
    ]

    const Component = () => <></>

    return withModal(Component,'Data Analysis',setToggle,tabs)
}