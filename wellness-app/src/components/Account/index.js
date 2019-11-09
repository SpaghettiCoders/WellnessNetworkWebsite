import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div>
                <PasswordForgetForm />
                <PasswordChangeForm />
            </div>
        )}
    </AuthUserContext.Consumer>
);
const condition = authUser => !!authUser;
export default AccountPage;
//export default withAuthorization(condition)(AccountPage);