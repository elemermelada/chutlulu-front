import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { useTimeout } from './hooks/useTimeout';
import { DencodeTextAPI } from './api/dencode';

function App() {
  const [setTimeout, _] = useTimeout();

  const [input, setInput] = useState<string>("");
  const [mode, setMode] = useState<string>("encode");
  const [output, setOutput] = useState<string>("");

  const handleInputChange = (value: string) => {
    setInput(value);
    setTimeout(() => getOutput(value, mode), 500);
  }

  const handleModeChange = (value: string) => {
    setMode(value);
    setTimeout(() => getOutput(input, value), 500);
  }

  const getOutput = (value: string, mode:string) => {
    DencodeTextAPI(mode, value).then(res=>setOutput(res))
  }

  return (
    <div className="App">
      <TextField
        id="standard-basic"
        label="Input"
        variant="standard"
        value={input}
        onChange={(e) => {
          handleInputChange(e.target.value)
        }} />
      <br />

      <RadioGroup
        //aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        value={mode}
        onChange={(e) => {
          handleModeChange(e.target.value)
        }}
        row
      >
        <FormControlLabel value="encode" control={<Radio />} label="Encode" />
        <FormControlLabel value="decode" control={<Radio />} label="Decode" />
      </RadioGroup>
      <br />
      <TextField
        id="standard-multiline-static"
        label="Output"
        variant="standard"
        value={output} />
    </div>
  );
}

export default App;
