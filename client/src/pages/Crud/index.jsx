import '../../assets/css/tailwind.css'
import { useState, useEffect } from "react"
import axios from "axios"
import Nav from '../../components/Nav'

const URL = "http://localhost:8080/quote"





export default function Index() {
  async function get() {
    const response = await axios.get(URL)
    setData(response.data)
  }
  async function getById(id) {
    const response = await axios.get(URL + "/" + id)
  }
  async function deleteById(id) {
    const response = await axios.delete(URL, { id: id })
    get()
  }

  async function add(obj) {
    const response = await axios.post(URL, data)
    get()
  }

  const [data, setData] = useState([])

  useEffect(() => {
    get()
  }, [])

  return (
    <div>
      <Nav/>
      <h2 className="title bg-green-800 text-white py-6 text-center text-2xl font-semibol "> Crud Management </h2>

      <table style={{width : '600px'}}>
        <thead>
          <td> Text  </td>
          <td> Author </td>
          <td> Action </td>
        </thead>
        <tbody>
          {data.map(x => <tr> <td> {x.text} </td>  <td> {x.author} </td>  <td> <button className="bg-red-800 px-2 py-3 text-white text-xl rounded-md  "> Delete  </button> </td> </tr>)}
        </tbody>
      </table>
    </div>
  )
}
