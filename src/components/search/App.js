import React from 'react'
import './app.css'
import {Users} from "./users"

const App = () => {
  return (
    <div className="app">
      <input className="search" type="text" placeholder="Search..."  />
      <ul className="list"> 
        {/* <li className="listItem">John</li>
        <li className="listItem">Jane</li>
        <li className="listItem">Mike</li> */}
        {Users.map((user) => ( 
            <li className="listItem" key={user.id}>{user.first_name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App