

interface MetricCardInterface{
    Label : string;
    Value : number;
}

const MetricCard = ({Label, Value}: MetricCardInterface)  => { 


    return (
        <div style = {{display: "flex" ,flexDirection: "column" }}>
               <span>{Label}</span>
                <span>{Value}</span>
        
        </div>
         
    
    )


}

export default MetricCard;