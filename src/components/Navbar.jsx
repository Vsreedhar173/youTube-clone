import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from './utils/constants';
import { SearchBar } from './';

const NavBar = () => {
  return (
  <Stack 
   direction={'row'}
   alignItems={'center'} 
   p={2}
   sx={{ position:'sticky', backgroundColor: '#000', justifyContent:'space-between', top:0 }}>
    <Link to='/' style={{ display:'flex', alignItems: 'center' }}>
      <img src={logo} alt="Logo" height={45} />
    </Link>
     <SearchBar />
  </Stack>
    )
};

export default NavBar