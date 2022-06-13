import { nanoid } from '@reduxjs/toolkit'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { jobAdded } from './TodoListSlice'

function Todolist() {
  const [job, setJob] = useState('')
  const onSetJob = e => setJob(e.target.value)
  const list = useSelector(state => state.TodoList)
  console.log(list)
  const dispatch = useDispatch()
  const onSave = () => {
    dispatch(jobAdded({
        id: nanoid(),
        text: job
    }))
    setJob('')
  }
  return (
      <>
        <label htmlFor="JobInput">Enter a job</label>
        <input type="text" id='JobInput' name='JobInput' onChange={onSetJob} value={job}/>
        <button type='button' onClick={onSave}>Save</button>
        {list.map(item => (
          <p key={item.id}>{item.text}</p>
        ))}
      </>
  )
}

export default Todolist