import React from "react";


function Spots(props){
    function dollarSigns(){
        if(props.spot.price < '100'){
            return '$';
        }else if(props.spot.price > '100' && props.spot.price < '1000'){
            return '$$';
        }else{
            return '$$$';
        }
    };

    return(
        <div 
            className={props.spot.timeToGo}
            // className={() => {
            //     if(props.spot.timeToGo === 'Winter'){
            //         return 'winter'
            //     }
            // }}
            // style={{
            //     backgroundColor: (
            //         (props.spot.timeToGo === 'Winter' ? 'blue' : '') +
            //         (props.spot.timeToGo === 'Fall' ? 'brown' : '') +
            //         (props.spot.timeToGo === 'Spring' ? 'purple' : '') +
            //         (props.spot.timeToGo === 'Summer' ? 'yellow' : '')
            //     ),
            // }}
        >
            <h2 className={'header'}>{props.spot.place}</h2>
            <div className={'money'}>
                <p className={'dollarSign'}>{dollarSigns(props.spot.price)}</p>
                <p className={'dollarSign'}>{props.spot.price}</p>
            </div>
            <p className={'season'}>{props.spot.timeToGo}</p>
        </div>
    )
}

export default Spots;
