import React, { useState } from "react"
import { navigate } from "gatsby"

const ERROR = `Something went wrong, check filled data`

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
const withSubmittingForm = (Component) => (props) => {
  const [isSending, setFlagSending] = useState(false)
  const [isSent, setFlagSent] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFlagSending(true)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...props }),
    })
      .then(() => {
        setFlagSending(false)
        setFlagSent(true)
        navigate("/success-sent/")
      })
      .catch(() => {
        setFlagSending(false)
        setError(ERROR)
      })
  }
  return (
    <Component
      {...props}
      isSending={isSending}
      isSent={isSent}
      error={error}
      onSubmit={handleSubmit}
    />
  )
}

export default withSubmittingForm
