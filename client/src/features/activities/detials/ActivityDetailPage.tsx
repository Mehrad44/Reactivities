import { Grid } from "@mui/material";
import {   useParams } from "react-router";
import { useActivities } from "../../../lib/types/hooks/useActivities";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
import ActivityDetailsChat from "./ActivityDetailsChat";
import ActivityDetailsSidebar from "./ActivityDetailsSidebar";

export default function ActivityDetailPage() {
    const {id} = useParams();
    const {activity, isLoadingActivity} = useActivities(id);

    if (isLoadingActivity) return <div>Loading activity...</div>;

    if (!activity) return <div>Activity not found</div>;
    
    return (
        <Grid container spacing={3} >
            <Grid size={8}>
                <ActivityDetailsHeader activity={activity}/>
                <ActivityDetailsInfo activity={activity}/>
                <ActivityDetailsChat/>
            </Grid>
            <Grid size={4}>
                    <ActivityDetailsSidebar/>
            </Grid>
        </Grid>
    )
}