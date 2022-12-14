import { Button } from 'bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Loginpage() {

  const funcName = () => {
    alert("Its a arrow func")
  }

  return (
    <div class="row justify-content-center">
      <div class="col-md-6">
        <span class="anchor" id="formLogin"></span>
        <div class="card card-outline-secondary">
          <div class="card-header">
            <h3 class="mb-0">Login</h3>
          </div>
          <div class="card-body">
            <form autocomplete="off" class="form" id="formLogin" name="formLogin" role="form">
              <div class="form-group">
                <label for="uname1">Username</label>
                <input class="form-control" id="uname1" name="uname1" required="" type="text" />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input autocomplete="new-password" class="form-control" id="pwd1" required="" type="password" />
              </div>
              <div class="form-check small">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" />
                  <span>Remember me on this computer</span>
                </label>
              </div>
              <Link to='/dashboard'>
                <button class="btn btn-success btn-lg float-right" type="button">Login</button>
              </Link>
              <button onClick={() => funcName()}>Alert </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
