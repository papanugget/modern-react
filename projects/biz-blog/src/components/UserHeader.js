import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount() {
        // console.log(this.props.userID);
        this.props.fetchUser(this.props.userID);
    }

    render() {
        const user = this.props.users.find(user => user.id === this.props.userID);
        if(!user) {
            return null;
        }
        // console.log(this.props.users);
        return (
            <div className="header">{user.name}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
}

export default connect (mapStateToProps, {fetchUser})(UserHeader);