import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = () => {
//   const [counter,setCounter]=useState(0);
  const [form,setForm]=useState({
    "movieName":'',
    "category" : '',
    "directer" : '',
    "releaseYear":''
  })
  useEffect(()=>{
    if(location.state!=null){
      setForm({...form,
           movieName:location.state.movie.movieName,
           category:location.state.movie.category,
           directer:location.state.movie.directer,
           releaseYear:location.state.movie.releaseYear
              })
                            }
                 },[])

  const location=useLocation();
  var navigate=useNavigate();
  let postData=()=>{
    // console.log(form)
    if (location.state!=null){
    axios.post('http://localhost:4000/new-movie'+location.state.movie._id,form)
    .then((res)=>{
      alert('movie data posted');
      navigate('/')
    }).catch((error)=>{
      console.log(error);
    })
  }
  else{
    axioaxios.post('http://localhost:4000/new-movie',form)
    .then((res)=>{
      alert('movie data posted');
      navigate('/')
    })

  }
}
  let showData=()=>{
    console.log(form);
  }

  function valueCap(e){
    setForm({...form,[e.target.name]:e.target.value})
    // console.log(e);
  }
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
        required
        id="outlined-required"
        label="Movie Name"
        defaultValue="Name"
        name='movieName'
        value={form.movieName}
        onChange={valueCap}
       
      />
      
       <TextField
        required
        id="outlined-required"
        label="Category"
        defaultValue="Category"
        name='category'
        value={form.category}
        onChange={valueCap}
      />
       <TextField
        required
        id="outlined-required"
        label="Directer Name"
        defaultValue="Moviedir"
        name='directer'
        value={form.directer}
        onChange={valueCap}
      /> 
       <TextField
        required
        id="outlined-required"
        label="Release Year"
        defaultValue="year"
        name='releaseYear'
        value={form.releaseYear}
        onChange={valueCap}
      /> <br />
     <br /> <Button variant="contained" onClick={postData}>SUBMIT</Button>
     <br />
     {/* <small>button is clicked {counter} times</small> */}
    </div>
  </Box>
)
  }



export default Add