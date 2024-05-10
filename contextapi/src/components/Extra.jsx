import React from 'react'
import { useTheme } from '../context/theme'

function Extra() {
    const {thememode , lightmode , darkmode} = useTheme();
  return (
    <div>{thememode}</div>
  )
}

export default Extra