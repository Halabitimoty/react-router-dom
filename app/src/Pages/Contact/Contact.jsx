import React from 'react'
import { Link } from 'react-router-dom'

export function Contact() {
  return (
    <>
      <Link to="/Contact">Contact</Link>
      <Link to="/Contact/1">First Contact</Link>
      <Link to="/Contact/2">Second Contact</Link>
      <Link to="/Contact/3">Third Contact</Link>
    </>
  )
}

