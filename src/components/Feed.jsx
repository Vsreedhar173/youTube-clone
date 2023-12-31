import React from 'react';
import { useState, useEffect } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import {Sidebar, Videos} from './';
import { FetchFromAPI } from './utils/FetchFromAPI';


const Feed = () => {

const [selectedCategory, setselectedCategory] = useState('New')

useEffect(()=>{
  FetchFromAPI(`search/?part=snippet&q=${selectedCategory}`)
}, [selectedCategory])

  return (
    <Stack 
    sx={{flexDirection:{sx:'column', md:'row'}}}
    >
      <Box
      sx={{height:{sx:'auto', md:'90vh'}, borderRight:'1px solid #3d3d3d', px:{sx:0, md:2} }}
      >
        <Sidebar />
    <Typography 
    className='copyright'
    variant='body2'
    sx={{mt:'2', color:'#fff'}}
    >
     @Sree Media 2023
    </Typography>
      </Box>
      <Box 
      p={2} 
      sx={{overflowY:'auto',
      height:'90vh', flex:2
    }}
      >
        <Typography 
        variant='h4' 
        fontWeight='bold'
        mb={2}   
        sx={{ color:'white'}}
        >
          New <span style={{color:'#FC315c'}}>Videos</span>
        </Typography>
        <Videos />
      </Box>
    </Stack>
  )
}

export default Feed