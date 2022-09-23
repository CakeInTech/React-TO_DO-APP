/* eslint-disable react/state-in-constructor */
import React from 'react';

const Header = () => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
  };
  return (
    <header style={headerStyle}>
      <h1>
        Todo List
      </h1>
    </header>
  );
};

export default Header;
