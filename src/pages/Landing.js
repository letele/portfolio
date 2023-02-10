
import { CommandLine,MovingIcons } from '../components'

export default function Landing(){
    
    const divStyles = 'w-100pc h-100pc pof ovy-hide'
    
    return(
        <div className={divStyles}>
            
            <MovingIcons />
            
            <CommandLine />
        
        </div>
    )
}

