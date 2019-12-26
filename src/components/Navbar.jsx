import React, { useState } from 'react';
import Autocomplete from 'react-autocomplete';

import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = (props) => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [value, setValue] = useState('');

  const current = props.current;
  const available = props.available;
  const setCurrent = props.setCurrent;
  
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  const setCurrency = (value) => {
    setValue(value)
    console.log(value);
    setCurrent(value);
  }

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <Autocomplete
        items={available}
        shouldItemRender={(item, value) => item.name.indexOf(value) > -1}
        getItemValue={item => item.name}
        renderItem={(item, highlighted) =>
          <div
            key={item.name}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
          >
            {item.name}
          </div>
        }
        value={value}
        onChange={e => setValue(e.target.value)}
        onSelect={value => setCurrency(value)}
      />
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
