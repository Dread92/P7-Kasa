import React from "react";
import "./DescriptionContainer.scss";


 export function DescriptionContainer(){
    return(
        <div className='description__block'>
        <p className='description__title'>
            <span>Description</span>
            <i className="fa-solid fa-chevron-up"></i>
        </p>
        <p className='description__content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi saepe nam, debitis distinctio sequi eligendi reiciendis. Omnis asperiores natus consectetur sint repellendus exercitationem temporibus consequatur quisquam quasi. Quae expedita accusantium at cumque quo, unde sint eligendi, distinctio tempora ipsa sunt eveniet dignissimos odit voluptatem, assumenda ab tenetur magnam libero. Nam.               
        </p>
    </div>
    );
};