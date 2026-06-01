import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import { Link } from "react-router";
import { useActivities } from "../../../lib/types/hooks/useActivities";

type Props ={
    activity: Activity

}
export default function ActivityCard({activity}: Props) {

  const{deleteActivity} = useActivities();
  return (
    <Card sx={{borderRadius: 3}}>
        <CardContent>
            <Typography variant="h5">{activity.title}</Typography>
            <Typography sx={{color: 'text.secondary',mb:1}}>{activity.date}</Typography>
            <Typography variant="body2" >{activity.description}</Typography>
            <Typography variant="subtitle2" >{activity.city} / {activity.venue}</Typography>
            <CardActions sx={{display: 'flex',justifyContent: 'space-between',pb:2}}>
              <Chip label={activity.category} variant="outlined"></Chip>
              <Box sx={{display: 'flex', gap: 3}}>
                  <Button component={Link} to={`/activities/${activity.id}`} size="medium" variant="contained">View</Button>
                  <Button
                   onClick={()=> deleteActivity.mutate(activity.id)} 
                   disabled={deleteActivity.isPending}
                   color='error' 
                   size="medium" 
                   variant="contained">Delete</Button>

              </Box>
            </CardActions>


        </CardContent>

    </Card>
  )
}
