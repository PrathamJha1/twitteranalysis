import React from 'react'
import Loginpage from '../components/Auth/Loginpage'
import Register from '../components/Auth/Register'
import './authpage.css'

export default function Authpage() {
    return (
        <div className="auth-page">
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <Loginpage />
                    </div>
                    <div className='col-6'>
                        <Register />
                    </div>
                </div>
            </div>
        </div>
    )
}
