import React from "react";
import UserForm from "./UserForm";

class NewUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            buttonID: "New User"
        };
        this.renderNewUser = this.renderNewUser.bind(this);
    }

    renderNewUser() {
        this.state.clicked ? this.setState({buttonID: "New User"}) : this.setState({buttonID: "Cancel"});
        this.setState(state => ({
            clicked: !state.clicked
        }));
    }

    render() {
        return (
            <>
                <button onClick={this.renderNewUser}>{this.state.buttonID}</button>
                {this.state.clicked ?
                    <UserForm /> : 
                    null
                }
            </>
        );
    }
}

export default NewUser;
