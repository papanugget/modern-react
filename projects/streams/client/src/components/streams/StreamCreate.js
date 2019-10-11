import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    renderInput({ input }) {
        // console.log(formProps
        return <input {...input} />;
    };
    render() {
        return (
            <form>
                <Field name="title" component={this.renderInput}/>
                <Field name="description" component={this.renderInput}/>
            </form>
         );
    };
};

export default reduxForm({
    form: 'STREAM_CREATE'
})(StreamCreate);