import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncDetailShow, getDetailShow } from '../../features/shows/showsSlice'

function ShowDetail() {
  const { showId } = useParams() 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncDetailShow(showId))
  }, [dispatch, showId])

  const data = useSelector(getDetailShow)

  console.log(data)

  let content = <h1>{showId}</h1>
  return (
    <section className="showDetail">
        {content}
    </section>
  )
}

export default ShowDetail