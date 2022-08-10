//This is a template Component for implementing dark mode using custom hooks 

import React from 'react'
import { useTheme, useThemeUpdate } from '../CustomHooksAndOtherUtils/ThemeContext.jsx'
//make sure the path to the custom hooks are correct

function Test() {
  const darkTheme = useTheme();
  // the custom hook useTheme will return true or false 
  const toggleTheme = useThemeUpdate();
  //custom useThemeUpdate will toggle dark mode

  const themeStyles = {
    backgroundColor: darkTheme ? `#333` : `#CCC`,
    color: darkTheme ? `#CCC` : `#333`,
  }
  //use the themeStyles to set styles for light and dark mode to components


  return (
    <>
      <button onClick={toggleTheme}> toggleTheme </button>
      <div style={themeStyles}>
        This is a test.
      </div>
    </>
  )
}

export default Test
