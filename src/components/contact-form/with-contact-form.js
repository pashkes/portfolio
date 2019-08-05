import React, { useState } from "react"

const withContactForm = (Component) => (props) => {
  const [name, setName] = useState(``)
  const [email, setEmail] = useState(``)
  const [message, setMessage] = useState(``)
  const handleChange = ({ target }) => {
    switch (target.name) {
      case (`name`): setName(target.value); break;
      case (`email`): setEmail(target.value); break;
      case (`message`): setMessage(target.value); break;
    }
  }

  return (
    <Component
      {...props}
      name={name}
      email={email}
      message={message}
      onChange={handleChange}
    />
  )
}

export default withContactForm
