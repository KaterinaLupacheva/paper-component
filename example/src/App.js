import React from 'react';
import './App.css';
import { Paper } from '@ramonak/paper';
import '@ramonak/paper/dist/index.css';

const App = () => {
  return <Paper elevation={7} outlined customClass='paper-class' square />;
};

export default App;
