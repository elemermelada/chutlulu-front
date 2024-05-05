import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import React, { useState } from 'react';
import { useTimeout } from './hooks/useTimeout';
import { DencodeTextAPI } from './api/dencode';

const TEXTAREASTYLE = {
  width: "320px",
  height: "120px",
  boxSizing: "border-box",
  fontSize: "0.875rem",
  fontWeight: "400",
  lineHeight: "1.5",
  padding: "8px 12px",
  borderRadius: "8px",
  color: "#1C2025",
  background: '#fff',
  border: "1px solid #DAE2ED",
  boxShadow: "0px 2px 2px #F3F6F9"
} as React.CSSProperties

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

  const getOutput = (value: string, mode: string) => {
    DencodeTextAPI(mode, value).then(res => setOutput(res))
  }

  return (
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      <div style={{ margin: "auto" }}>
        <center>
          <h1>Chutlulu dencoder</h1>
        </center>
        <TextareaAutosize
          id="standard-basic"
          placeholder="Input"
          value={input}
          onChange={(e) => {
            handleInputChange(e.target.value)
          }}
          style={TEXTAREASTYLE} />
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
        <TextareaAutosize
          id="standard-multiline-static"
          placeholder="Output"
          value={output}
          style={TEXTAREASTYLE} />
      </div>
    </div>
  );
}

export default App;
