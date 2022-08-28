import React from "react";
import './SocialLinks.css';


const SocialLink = ({src, haveLink, href, bgcolor, content}) => {
    return (
        haveLink ? 
        <a className="social" href={href} style={{backgroundColor: bgcolor}}>
            <img src={src}/>
            <span>{content}</span>
        </a>
         : 
         <div className="copy">
            <a className="social" href={href} style={{backgroundColor: bgcolor}}>
                <img src={src}/>
                <span onClick={() => {navigator.clipboard.writeText(content)}}>{content}</span>
            </a>
        </div>
    )
}

export default SocialLink