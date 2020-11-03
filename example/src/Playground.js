import React, { useState } from 'react';
import { Paper } from '@ramonak/paper';
import './App.css';

const Playground = () => {
  const [state, setState] = useState({
    elevation: '',
    outlined: false,
    square: false
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };
  return (
    <div className='playground-container'>
      <div className='paper-playground-wrapper'>
        <Paper customClass='paper-class' {...state} />
      </div>
      <div className='parameters-wrapper'>
        <label htmlFor='elevation'>Elevation</label>
        <input
          name='elevation'
          id='elevation'
          type='text'
          placeholder='1-24 or empty'
          onChange={(event) =>
            setState({ ...state, elevation: Number(event.target.value) })
          }
        />
        <label htmlFor='outlined'>Outlined</label>
        <select
          name='outlined'
          id='outlined'
          onChange={() => setState({ ...state, outlined: !state.outlined })}
        >
          <option value={false}>False</option>
          <option value={true}>True</option>
        </select>
        <label htmlFor='square'>Square</label>
        <select
          name='square'
          id='square'
          onChange={() => setState({ ...state, square: !state.square })}
        >
          <option value={false}>False</option>
          <option value={true}>True</option>
        </select>
      </div>
    </div>
  );
};

export default Playground;
