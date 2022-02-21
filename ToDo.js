import React from 'react'

function Todo({todo}) {
  return (
    <div>{`
        ${todo.id} \t\t ${todo.name}`
    }
    </div>
  )
}

export default Todo