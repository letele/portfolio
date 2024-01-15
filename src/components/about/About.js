import { useWindowDimensions } from "@letele/hook-me-up";
import { withModal } from "../hoc";
import { BarChart,GraphChart,ProgressCircle } from ".";

export function About({setToggle}){
    
    const {width} = useWindowDimensions()
    const tabs = [
        {name:"Data Analysis", component:width>=800 ? BarChart:ProgressCircle},
        {name:"Web Development", component:GraphChart}
    ]
    
    function Component(){
        return ( <>
            <p>
                &#128075;... I am a seasoned professional currently pursuing a Postgraduate degree
                in Statistics and Data Science at University Of Cape Town. Additionally, I possess 
                proficient skills in web development with a handful of projects ranging 
                from NPM packages to data driven web applications.
            </p>
            <h3 className='mt-05em c-555'>Skill Set</h3>
        </>)
    }

    return withModal(Component,'Letele Motebang',setToggle,tabs)

}