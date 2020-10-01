import React from 'react'
import def from '../images/def.jpg';
import PropTypes from 'prop-types';
  
export default function Activity({activity}) {
    const {name,link,image,description} = activity;
        return (
            <article className="activity">
                <div className="img-container-activity">
                    <img src={image || def} alt="act"/>
                    <div className="img__description">
                        <p>{description.content[0].content[0].value}</p>                     
                        {link && <a rel="noopener noreferrer" target={"_blank"} href={link}> לאתר >> </a> }
                    </div>
                </div> 
                <p className="activity-name">{name}</p>   
            </article>
        );
    }
    
    Activity.prototype={
        activity:PropTypes.shape({
            name:PropTypes.string.isRequired,
            slug:PropTypes.string.isRequired,
            image:PropTypes.arrayOf(PropTypes.string).isRequired
        })
};