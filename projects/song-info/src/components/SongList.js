import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>SongList Component</div>
        );
    }
}
 
export default connect()(SongList);