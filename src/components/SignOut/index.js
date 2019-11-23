import React from 'react';
import { withFirebase } from '../Firebase';
const SignOutButton = ({ firebase }) => (
    <li class="nav-item" onClick={firebase.doSignOut}>
        <a class="nav-link" href="#">Sign Out</a>
    </li>

    
          
    
);
export default withFirebase(SignOutButton);