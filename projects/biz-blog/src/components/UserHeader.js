import React from 'react';
import { connect } from 'react-redux';
// import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    // componentDidMount() {
    //     // console.log(this.props.userID);
    //     this.props.fetchUser(this.props.userID);
    // } moved into actions file

    render() {
        // const user = this.props.users.find(user => user.id === this.props.userID); // moved logic to mapStateToProps func
        const { user }  = this.props;

        if(!user) {
            return null;
        }
        // console.log(this.props.users);
        return (
            <div className="header">{user.name}</div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find(user => user.id === ownProps.userID)
    };
}

export default connect (mapStateToProps)(UserHeader);