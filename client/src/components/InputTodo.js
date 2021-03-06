import React, { Fragment, useState } from 'react'

const InputTodo = () => {

  const [description, setDescription] = useState("")

  const onSubmitForm = async(e) => {
    e.preventDefault()
    try {
      const body = { description }
      const response = await fetch("http://45.79.173.103:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })

      console.log(response)
      window.location = "/"
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <Fragment>
      <h1>Super Basic Todo List</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}/>
        <button>Add</button>
      </form>
    </Fragment>
  );
}

export default InputTodo
