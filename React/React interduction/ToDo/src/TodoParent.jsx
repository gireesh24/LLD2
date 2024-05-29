// import React from 'react'

import TodoChildInput from "./TodoChildInput"
import TodoChildList from "./TodoChildList"

function TodoParent() {
  return (
<>
    <TodoChildInput />
    <TodoChildList />
</>  
  )
}

export default TodoParent