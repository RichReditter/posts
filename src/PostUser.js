import React from 'react'
import './PostUser.css'
export default class PostUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: props.firstName,
            lastName: props.lastName,
            email: props.email,
            avatar: props.avatar,
        }
    }

    render() {
        return (
            <div className="post-user">
                <div className="names">
                    <p><strong>{this.props.firstName}</strong></p>
                    <p>{this.props.lastName}</p>
                    <p id="post-user-email"><a href="https://gmail.com">{this.props.email}</a></p>
                </div>
                <div className="avatar">
                    <img src={this.props.avatar} alt ='avatar'></img>
                </div>
            </div>
        )
    }
}