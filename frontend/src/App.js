import React, { useEffect, useState } from 'react'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000',
})

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const getData = async () => {
      const res = await api.get('/')
      setMessage(res.data.message)
    }
    getData()
  }, [])

  return <>{message}</>
}

export default App
