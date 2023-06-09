import React from "react";
import "./DescriptionContainer.scss";


 export function DescriptionContainer(props){
    return(
        <div className='description__block'>
        <p className='description__title'>
            <span>{props.title}</span>
            <i className="fa-solid fa-chevron-up"></i>
        </p>
        <p className='description__content'>{props.content}               
        </p>
    </div>
    );
};