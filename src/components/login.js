import React from 'react'; 

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '', 
      password: ''
    }
  }

//   <form action="" method="get">
//   Name: <input type="text" name="name"/><br/>
//   Pwd: <input type="password" name="password"/><br/>
//   <div class="yourCustomDiv"/>
//   <input type="submit" style="display:none"/>
// </form>

  render() {
    return (
      <div>
        <h1> Log in </h1>
        <form action='/login' method='get'>
          <label htmlFor='username'>Username: </label>
          <input type='text' 
          id='username'
          name='username'
          value={this.state.username}
          onChange={event => this.setState({username: event.target.value})}
          >
          </input>
          <br />
          <label htmlFor='password'>Password: </label>
          <input type='password' 
          id='password'
          name='password'
          value={this.state.password}
          onChange={event => this.setState({password: event.target.value})}
          >
          </input>
          <input type='submit' style={{display:'none'}}></input>
        </form>
        <p>Don't have an account? Sign up!</p>
      </div>
    )
  }
}

export default Login