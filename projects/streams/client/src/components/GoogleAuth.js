import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    state = {
        isSignedIn: null,
    };
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '890162165611-2rne0tiimo111pltelnug1mu0qhb347d.apps.googleusercontent.com',
                scope:'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                // this.onAuthChange();
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    onAuthChange = (isSignedIn) => {
        // this.setState({
        //     isSignedIn: this.auth.isSignedIn.get()
        // });
        if(isSignedIn) {
            this.props.signIn();
        } else {
            this.props.signOut();
        }
    }
    logInOut = () => {
        // check isSignedIn state
        if(this.state.isSignedIn) {
            this.auth = window.gapi.auth2.getAuthInstance();
            // use signOut method
            this.auth.signOut();
            // onAuthChange
            this.onAuthChange();
        } else {
            this.auth.signIn();
            this.onAuthChange();
        }
    }
    renderAuthButton = () => {
        if(this.state.isSignedIn === null) {
            return null;
        } else if(this.state.isSignedIn){
            return (
                <button className="ui red google button" onClick={this.logInOut}>
                    <i className="google icon"/>
                    Sign Out
                </button>
            );

        } else {
            return(
                <button className="ui green google button" onClick={this.logInOut}>
                    <i className="google icon"/>
                    Sign In With Google
                </button>
            );
        }
    }
    render() {
        return (
            <div className="item">
                {this.renderAuthButton()}
            </div>
         );
    }
}

export default connect(
    null,
    { signIn, signOut }
)(GoogleAuth);