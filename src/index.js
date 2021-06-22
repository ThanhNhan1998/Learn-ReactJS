import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 3:00PM" 
                    content="I like the subject"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 3:00PM" 
                    content="I like the subject"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 5:00PM" 
                    content="It not bad"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'))