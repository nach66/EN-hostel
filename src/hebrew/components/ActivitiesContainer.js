import React from 'react'
import ActivitiesList from './ActivitiesList';
import {ActivityConsumer} from '../contextActivities';
import Loading from './Loading';
import Title from './Title';

export default function ActivitiesContainer() {  
    return (
        <ActivityConsumer>
            {value => {
                const {loading, restActivities, waterActivities, attractionActivities} = value;
                if (loading) {
                    return <Loading/>;
                }
                return (
                    <>
                        <Title title="פעילויות מים"/> 
                        <ActivitiesList activities={waterActivities}/>
                        <div className="sep"/>
                        <Title title="מקומות מרבץ"/> 
                        <ActivitiesList activities={restActivities}/>
                        <div className="sep"/>
                        <Title title="אטרקציות שוות"/> 
                        <ActivitiesList activities={attractionActivities}/>
                    </>
                );
            }}
        </ActivityConsumer>
    );
}