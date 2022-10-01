import React from 'react'
import { useParams } from 'react-router-dom'

export function Contacts() {

  const { id } = useParams();
  return (
	<>
    <h1>Contact { id }</h1>
  </>
  )
}