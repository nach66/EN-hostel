import React from "react";
import Activity from "./Activity";

export default function ActivitiesList({ activities }) {

    if (activities.length === 0) {
        return (
        <div className="empty-search">
            <h3>something wrong</h3>
        </div>
        );
    }

    return (
        <section className="activitylist">
        <div className="activitylist-center">
            {activities.map(activity => {
            return <Activity key={activity.id} activity={activity} 
            />;
            })}
        </div>
        </section>
    );
}
