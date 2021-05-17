import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleImportanceOf } from '../reducers/noteReducer'


const Notes = () => {
  const dispatch = useDispatch()
  const notes = useSelector(({filter, notes}) => {
    if ( filter === 'ALL' ) {
      return notes
    }
    return filter  === 'IMPORTANT' 
      ? notes.filter(note => note.important)
      : notes.filter(note => !note.important)
  })

  return(
    <ul>
      {notes.map(note =>
        <li onClick={() => dispatch(toggleImportanceOf(note.id))}>
        {note.content} 
        <strong> {note.important ? 'important' : ''}</strong>
        </li>
      )}
    </ul>
  )
}

export default Notes