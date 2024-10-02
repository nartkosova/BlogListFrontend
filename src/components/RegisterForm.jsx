import { useState } from "react"
import PropTypes from "prop-types"

const UserForm = ({ handleUser }) => {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    handleUser(username, name, password)
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          Username:
          <input
           data-testid='username'
           placeholder="Username"
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          Name:
          <input
           data-testid='name'
           placeholder="Name"
            type="test"
            value={name}
            name="Name"
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          Password:
          <input
           data-testid='password'
           placeholder="Password"
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

UserForm.propTypes = {
  handleUser: PropTypes.func.isRequired
}
export default UserForm