import React from 'react'

export default function Register() {
  return (
    <div class="row justify-content-center">
      <div class="col-md-6">
        <span class="anchor" id="formRegister"></span>
        <div class="card card-outline-secondary">
          <div class="card-header">
            <h3 class="mb-0">Sign Up</h3>
          </div>
          <div class="card-body">
            <form autocomplete="off" class="form" role="form">
              <div class="form-group">
                <label for="inputName">First Name</label>
                <input class="form-control" id="inputName" placeholder="Enter Your Firstname" type="text" name='firstname' />
              </div>
              <div class="form-group">
                <label for="inputName">Last Name</label>
                <input class="form-control" id="inputName" placeholder="Enter Your Lastname" type="text" name='lastname' />
              </div>
              <div class="form-group">
                <label for="inputName">Username</label>
                <input class="form-control" id="inputName" placeholder="Enter Your Username" type="text" name='username' />
              </div>
              <div class="form-group">
                <label for="inputEmail3">Email</label>
                <input class="form-control" id="inputEmail3" placeholder="Email" required="" type="email" name='email' />
              </div>
              <div class="form-group">
                <label for="inputPassword3">Password</label>
                <input class="form-control" id="inputPassword3" placeholder="Password" required="" type="password" />
              </div>
              <div class="form-group">
                <label for="inputVerify3">Verify</label>
                <input class="form-control" id="inputVerify3" placeholder="Password (again)" required="" type="password" />
              </div>
              <div class="form-group">
                <button class="btn btn-success btn-lg float-right" type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
