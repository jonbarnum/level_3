import React from "react";
import vacationAreas from "./vacationSpots";
import Spots from './Spots';



function App(){
    const areas = vacationAreas.map(area => <Spots key={area.id} spot={area}/>)
    return(
        <div>
        {areas}
        </div>
    )
}

export default App;



