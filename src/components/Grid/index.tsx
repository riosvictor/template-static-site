import * as React from 'react';
import Box from '@mui/material/Box';
import GridMUI from '@mui/material/Grid';

const Grid: React.FC = ({children}) => {
  return (
    <Box sx={{ flexGrow: 1 }} mt={2}>
      <GridMUI 
        container 
        spacing={{ xs: 2, md: 3 }} 
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {children}
      </GridMUI>
    </Box>
  );
}

export default Grid;