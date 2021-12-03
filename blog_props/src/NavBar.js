import React from "react";

function Navbar(){
    return(
        <div className={'headerDiv'}>
            <span className={'navBarContainer'}>
                <div>
                    <button className={'navBarBootStrapText'}>Start BootStrap</button>
                </div>
                <div className={'rightHeaderInfo'}>
                <button className={'navBarText'}>Home</button>
                <button className={'navBarText'}>About</button>
                <button className={'navBarText'}>Sample Post</button>
                <button className={'navBarText'}>Contact</button>
                </div>
            </span>
            <h1 className={'mainHeader'}>Clean Blog</h1>
            <h2 className={'subHeader'}>A Blog Theme by Start Bootstrap</h2>
        </div>
    )
}

export default Navbar;