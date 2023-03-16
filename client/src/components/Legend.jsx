const Legend = ({StageNames}) => {
    return (
        <div>
        <h2>Legend</h2>
        
        {StageNames.map((item) => {
            return (
                <div>
                    {item.StageName}
                </div>
            )
        }
        )}

    
        </div>
    )
}


export default Legend;
