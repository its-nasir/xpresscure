import React, {useState,useEffect } from "react";

export default function Userdata() {
  const [Users, fetchUsers] = useState([])
  const getData = () => {
    fetch('https://dev.xpresscure.com/api/admin/lists_diseases')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchUsers(res)
      })
  }
  useEffect(() => {
    getData()
  }, [1])


  return (
    <>
    <main className="container">
    <div>
      <button></button>
      <input placeholder="search"></input>
    </div>
    
      <ul>
        {Users.map((item, i) => {
          return <li key={i}>{item.createdAt},{item.department_name},{item.disease_name},{item.icon},{item.status},{item.updatedAt},{item._id}</li>
        })}
      </ul>

      </main>
    </>
  )
}


