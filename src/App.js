import './App.css';
import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'nature', label: 'Nature' },
  { value: 'city', label: 'City' },
  { value: 'technology', label: 'Technology' },
  { value: 'food', label: 'Food' },
  { value: 'still_life', label: 'Still Life' },
  { value: 'abstract', label: 'Abstract' },
  { value: 'wildlife', label: 'Wildlife' }
]


function App() {
  const [selectedOption, setSelectedOption] = useState(null);
    const handleChange = selectedOption => {
        setSelectedOption(selectedOption);
        console.log(selectedOption.value);
      }

  return (
    <div className="App">
      <h1>Background Generator</h1>
      <Select options={options} value={selectedOption} className="select" onChange={handleChange} />
      <img src="" alt=""></img>
    </div>
  );
}

export default App;
