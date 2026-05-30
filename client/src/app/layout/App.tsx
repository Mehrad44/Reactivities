import { Box, Container, CssBaseline } from "@mui/material";
import {  Activity, useEffect, useState } from "react"
import axios from "axios";
import NavBar from "./Navbar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";



function App() {
  const [activities,setActivities] = useState<Activity[]>([]);
  const [selectedActivity,setSelectedActivity] = useState<Activity | undefined>(undefined);
  const[editMode, setEditMode] = useState(false);

  useEffect(()=>{
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data))

      return() =>{}
  },[])

  const handelSelectActivity = (id : string) =>{
    setSelectedActivity(activities.find(x => x.id === id));

  }

  const handleCancelSelectActivity = () =>{
    setSelectedActivity(undefined);
  }

  const handleOpenForm = (id?: string) =>{
    if(id) handelSelectActivity(id);
    else handleCancelSelectActivity();
    setEditMode(true);
  }

  const handleFormClose = () =>{
    setEditMode(false);
  }

  const handleDelete = (id: string) =>{
    setActivities(activities.filter(x => x.id !== id))
  }

  const handleSubmitForm = (activity: Activity) =>{
    if(activity.id){
      setActivities(activities.map(x => x.id === activity.id ? activity : x ))
    }else{
      const newActivity = {...activity,id: activities.length.toString()}
      setActivities([...activities,newActivity])
    }

    setEditMode(false);
  }

  return (
    <Box sx={{bgcolor:"#eeeeee"}}>
          <CssBaseline></CssBaseline>
          <NavBar openForm={handleOpenForm}/>
          <Container maxWidth='xl' sx={{mt:3}}>
            <ActivityDashboard

             activities={activities}
             selectActivity = {handelSelectActivity}
             cancelSelectActivity={handleCancelSelectActivity}
             selectedActivity={selectedActivity}
             editMode = {editMode}
             openForm = {handleOpenForm}
             closeForm= {handleFormClose}
             submitForm = {handleSubmitForm}
             deleteActivity = {handleDelete}
             ></ActivityDashboard>
          </Container>

    </Box>

  

  )
}

export default App
