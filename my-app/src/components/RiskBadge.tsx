import Badge from 'react-bootstrap/Badge';

import {RiskLevel} from "../types/Transaction"
interface RiskBadgeProps{
    Level: RiskLevel
}
const RiskBadge = ({Level} : RiskBadgeProps) => {
 
    if(Level == RiskLevel.LOW ){
        return (
           <span className="badge badge-pill badge-success">Low</span>
        );
    }
    else if (Level == RiskLevel.MEDIUM){
         return (
            <span className="badge badge-pill badge-info">Medium</span>
        );
    }
    else if(Level == RiskLevel.HIGH){
        return (
            <a href="#" className="badge badge-warning">High</a>
        )
    }



   return (
    <span> undefined</span>
   )
}

export default RiskBadge;