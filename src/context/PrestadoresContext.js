import React, { createContext } from 'react';
import Prestadores from '../data/Prestadores';

const PrestadoresContext = createContext({});

export const PrestadoresProvider = (props) => {
  return (
    <PrestadoresContext.Provider value={{ state: { Prestadores } }}>
      {props.children}
    </PrestadoresContext.Provider>
  );
};

export default PrestadoresContext;
