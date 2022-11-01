import React from 'react'

function ThemeButton() {
  return (
    <button onClick={() => {setTheme('theme1')}}>Change theme</button>
  )
}

export default ThemeButton