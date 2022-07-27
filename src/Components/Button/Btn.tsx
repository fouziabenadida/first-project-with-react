import React from 'react'
import './Button.css'
import {useContext} from 'react'
import {ThemeContext} from '../../Context/ThemeContext'

export default function Button() {
  const {ToggleTheme} = useContext(ThemeContext);
  return (
    <button 
    onClick={ToggleTheme}
    className='btn-toggle'>Togg</button>
  )
}
