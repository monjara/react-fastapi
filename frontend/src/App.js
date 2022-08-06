import React, { useEffect, useState } from 'react'
import axios from 'axios'

const config = {
  proxy: {
    host: 'localhost',
    port: '8000',
  },
}

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/', config)
      console.log(JSON.stringify(res))
      setMessage(res.data.message)
    }
    getData()
  }, [])

  return <>{message}</>
}

export default App
