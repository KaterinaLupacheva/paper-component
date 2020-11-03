import React from 'react';
import './App.css';
import { Paper } from '@ramonak/paper';
import '@ramonak/paper/dist/index.css';

const App = () => {
  return (
    <div className='wrapper'>
      <Paper customClass='paper-class'>
        <div className='text'>
          <b>Default:</b> <br />
          No Elevation <br /> No Outline <br /> Rounded corners{' '}
        </div>
      </Paper>
      <Paper elevation={3} customClass='paper-class'>
        <div className='text'>
          Elevation = 3 <br /> No Outline <br /> Rounded corners{' '}
        </div>
      </Paper>
      <Paper elevation={7} outlined customClass='paper-class' square>
        <div className='text'>
          Elevation = 7 <br /> Oulined <br /> Square{' '}
        </div>
      </Paper>
    </div>
  );
};

export default App;
