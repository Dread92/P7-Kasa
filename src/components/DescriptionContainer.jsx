import React, {useState} from "react";
import "./DescriptionContainer.scss";


  function DescriptionContainer(props){
    const [isContentVisible, setIsContentVisible]= useState(false);
    const [animBackClass, setAnimBackClass]= useState('');
    const displayContent = () => {
       // setIsContentVisible(!isContentVisible)
       if (!isContentVisible){
        setIsContentVisible(true);
       }else {
        setAnimBackClass('')
        setTimeout(() => {
          setIsContentVisible(false)  
        }, 3000);
       }
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


export default DescriptionContainer