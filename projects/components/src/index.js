import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return ( 
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                </div>
                Are you sure you want to do this?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    imgSrc={faker.image.avatar()} 
                    author={faker.name.firstName()} 
                    date="Today at 6:00PM"
                    commentText={faker.lorem.sentence()}
                />  
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    imgSrc={faker.image.avatar()} 
                    author={faker.name.firstName()} 
                    date="Today at 6:00PM"
                    commentText={faker.lorem.sentence()}
                />  
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    imgSrc={faker.image.avatar()} 
                    author={faker.name.firstName()} 
                    date="Today at 6:00PM"
                    commentText={faker.lorem.sentence()}
                />  
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));