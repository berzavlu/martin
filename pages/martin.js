import { useEffect, useState } from "react"

function Martin() {
  const [text, setText] = useState({})
  const getHello = async () => {
    try {
      const res = await fetch('/api/hello')
      const response = await res.json()
      setText(response)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getHello()
  }, [])
  console.log(text)
  return (
    <div>
      <h1>HOLA MARTIIIIN</h1>
      <pre>
        {JSON.stringify(text)}
      </pre>
    </div>

  )
}

export default Martin
