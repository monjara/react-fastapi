import axios from "axios"
import { useEffect, useState } from "react"

const api = axios.create({
  baseURL: 'http://localhost:8000'
})

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    const getData = async() => {
      const res = await api.get('/')
      setMessage(res.data.message)
    }
    getData()
  }, [])

  return (
    <div>{message}</div>
  );
}

export default App;
