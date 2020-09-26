import React from 'react'
import ActivitiesList from './ActivitiesList';
import Loading from './Loading';
import Title from './Title';
import {ActivityConsumer} from '../contextActivities';

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
                        <Title title="Water activities"/> 
                        <ActivitiesList activities={waterActivities}/>
                        <div className="sep"/>
                        <Title title="Resting place"/> 
                        <ActivitiesList activities={restActivities}/>
                        <div className="sep"/>
                        <Title title="Special attractions"/> 
                        <ActivitiesList activities={attractionActivities}/>
                    </>
                );
            }}
        </ActivityConsumer>
    );
}