import React, { Component } from 'react';
// { Component }  === const Component = React.Component

// const SearchBar = () => {
//     return <input />
// }
// changed from functional component to class to account for state changes
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: 'search for something here',
            handicapChecked: false
        };
    }
    render() {
        return (
            <form>
                <label for="text-input">Text Input</label>
                <br></br>
                {/* <input id="text-input" onChange={(e) => console.log(e.target.value)}/> */}
                <input 
                    value={this.state.term}
                    id="text-input" 
                    onChange={(e) => this.setState({
                        term: e.target.value
                    })}
                />
                <br></br>
                Value of the input: {this.state.term}
                <br></br>
                <label for="handicap-accessible">Handicap Accessible</label>
                <br></br>
                {/* <input id="handicap-accessible " type="checkbox" onChange={(e) => console.log(e)}/> */}
                <input 
                    checked={this.state.handicapChecked}
                    id="handicap-accessible" 
                    type="checkbox" 
                    onChange={() => this.setState({handicapChecked: true})}/>
                <br></br>                
                Handicap Checked? 
            </form>
        );
    }
    // onInputChange(e) {
    //     console.log(e.target.value);
    // }
}

export default SearchBar;