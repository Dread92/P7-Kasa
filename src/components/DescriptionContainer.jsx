import React, {useState} from "react";
import "./DescriptionContainer.scss";


 export function DescriptionContainer(props){
    const [isContentVisible, setIsContentVisible]= useState(false);
    const displayContent = () => {
        setIsContentVisible(!isContentVisible)
    }

    return(
        <div className='description__block'>
        <p className='description__title'>
            <span>{props.title}</span>
            <i className="fa-solid fa-chevron-up" onClick={displayContent}></i>
        </p>
       {isContentVisible && <p className='description__content'>{props.content}               
        </p>}
    </div>
    );
};