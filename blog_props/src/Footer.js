import React from "react";

function Footer(){
    return(
        <div className={'footerDiv'}>
            <div className={'iconDiv'}>
                <img className={'icons'} alt={'twitter icon'} src={'https://iconape.com/wp-content/png_logo_vector/twitter-icon-circle-black-logo.png'}></img>
                <img className={'icons'} alt={'facebook icon'} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Facebook_icon_%28black%29.svg/1024px-Facebook_icon_%28black%29.svg.png'}></img>
                <img className={'icons'} alt={'github icon'} src={'https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/github.png'}></img>
            </div>
            <div>
                <p className={'footerText'}>Copyright &#169; Your Website 2021</p>
            </div>
        </div>
    )
}

export default Footer;