import {useEffect, useState} from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar } from "./";


// const Feed = () => {
//   return (
//     <Stack sx={{
//       flexDirection: {
//         sx: 'column',
//         md: 'row'
//       }
//     }}>
//       <Box sx={{height: { sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2} }}>
//         <Sidebar/>

//       <Typography className='copyright'
//       variant='body2'
//       sx={{mt: 1.5, color: '#fff'}}
//       >
//         Copyright 2025 JSm Media   
//       </Typography>
//       </Box>

//     </Stack>
//   )
// }

// export default Feed

const Feed = () => {
  return (
    <Stack sx={{
      flexDirection: {
        xs: 'column',
        md: 'row'
      }
    }}>
      <Box sx={{
        height: { xs: 'auto', md: '92vh' },
        borderRight: '1px solid #3d3d3d',
        px: { xs: 0, md: 2 }
      }}>
        <Sidebar />

        <Typography 
          className='copyright'
          variant='body2'
          sx={{ mt: 1.5, color: '#fff', textAlign: 'center' }}
        >
          Copyright 2025 JSm Media   
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed;