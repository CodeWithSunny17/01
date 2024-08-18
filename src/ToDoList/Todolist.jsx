import React, { useState } from 'react'
import data from './data.json'

export default function Todolist() {

    const [ndata, setNdata] = useState(data)
  return (
    <div>
        {
            ndata.map(x =>
                <li key={x.key}>{x.title}</li>
            )
        }
    </div>
  )
}
