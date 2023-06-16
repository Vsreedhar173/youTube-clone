import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { paper, IconButton, Paper } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  return (
<Paper
  component='form'
  onsubmit ={() => {}}
  sx={{
    borderRadius: 20, 
    border: '2px solid #e3e3e3',
    pl: 2,
    boxShadow: 'none',
    mr: {sm:5}
  }}
>
    <input 
    className='search-bar'
    value='' 
    placeholder='search...' 
    onChange={ () => {} } />
    <IconButton
    type='submit'
    sx={{ color:'red', p:"10px" }}
    >
      <Search />
    </IconButton>
</Paper>
    )
}

export default SearchBar