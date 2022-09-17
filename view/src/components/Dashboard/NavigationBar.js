import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigationBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a class="navbar-brand" href="#">Twitter Sentiment Analysis</a>
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <Link to='/dashboard'>Dashboard</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/admin-panel'>Admin</Link>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">

                    </form>
                </div>
            </nav>
        </div>
    )
}
