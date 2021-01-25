import { createContext, useState, useEffect } from 'react';

const PiiplContext = createContext();

function PiiplProvider({ children }) {
  const [options, setOptions] = useState({
    figureColor: '#A4876E',
    hairColor: '#3D3D3D',
    upperBodyColor: '#8FBC8F',
    lowerBodyColor: '#e2c15a',
    shoesColor: '#3d3d3d',
    figureName: 'figure_1',
    hairName: 'hair_2',
    upperBodyName: 'shirt_1',
    lowerBodyName: 'pants_1',
    shoesName: 'shoes_3',
  });

  // Set options after render
  useEffect(() => {
    setOptions(options);
  }, [options]);

  // CHANGE COLOR
  // hair/clothes
  function changeColor(e) {
    const { id, value } = e.target;
    setOptions((prevOptions) => ({
      ...prevOptions,
      [id]: value,
    }));
  }

  // CHANGE SHAPE
  // hair/clothes
  function changeShape(e) {
    const { id, value } = e.target;
    setOptions((prevOptions) => ({
      ...prevOptions,
      [id]: value,
    }));
  }

  return (
    <PiiplContext.Provider value={{
      options,
      setOptions,
      changeColor,
      changeShape,
    }}
    >
      {children}
    </PiiplContext.Provider>
  );
}

export {
  PiiplContext,
  PiiplProvider,
};
