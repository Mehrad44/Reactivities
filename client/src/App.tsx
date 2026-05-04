import { List, ListItem, ListItemText, Typography } from "@mui/material";
import {  useEffect, useState } from "react"
import axios from "axios";


function App() {
  const [activities,setActivities] = useState<Activity[]>([]);

  useEffect(()=>{
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data))

      return() =>{}
  },[])

  return (
    <>
          <Typography variant="h3" >Reactivities</Typography>

          <List >
            {activities.map((acitivity) => (
              <ListItem key={acitivity.id}>
                <ListItemText>{acitivity.title}</ListItemText>
                </ListItem>
            ))}
          </List>

    </>

  

  )
}

export default App
