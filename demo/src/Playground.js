import React, { useState, useRef } from 'react';
import Paper from '@ramonak/paper';
import './App.css';

const Playground = () => {
  const INITIAL_STATE = {
    elevation: '',
    outlined: false,
    square: false
  };
  const [state, setState] = useState(INITIAL_STATE);
  const [showCode, setShowCode] = useState(false);
  const [codeValue, setCodeValue] = useState('');
  const [copySuccess, setCopySuccess] = useState('Copy');
  const textAreaRef = useRef(null);

  const handleReset = () => {
    setState(INITIAL_STATE);
    setShowCode(false);
  };

  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
  };

  const generateCode = () => {
    setCopySuccess('Copy');
    setShowCode(true);
    const tempCode = `<Paper ${
      state.elevation && `elevation={${state.elevation}}`
    } ${state.outlined ? 'outlined' : ''} ${state.square ? 'square' : ''} />`;
    const code = tempCode
      .replace(/^\s*$(?:\r\n?|\n)/gm, '')
      .replace(/  +/g, ' ');
    setCodeValue(code);
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

        <button className='myButton reset-button' onClick={handleReset}>
          RESET
        </button>
        <button className='myButton code-button' onClick={generateCode}>
          Generate Component Code
        </button>
        <div>
          {showCode && (
            <div className='code-area'>
              <button onClick={copyToClipboard}>{copySuccess}</button>
              <textarea
                ref={textAreaRef}
                value={codeValue}
                onChange={(e) => setCodeValue(e.target.value)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Playground;
