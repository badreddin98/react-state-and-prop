import React, { Component } from 'react';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: 'Badreddin Elyazgi',
            editMode: false,
            hobbies: ['Coding', 'Reading', 'Gaming']
        };
        // Binding methods
        this.changeName = this.changeName.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
    }

    changeName() {
        this.setState({ name: 'Badreddin' });
    }

    toggleEditMode() {
        this.setState(prevState => ({
            editMode: !prevState.editMode
        }));
    }

    render() {
        const { name, editMode, hobbies } = this.state;

        return (
            <div className="user-profile">
                <h1>My Profile</h1>
                <div className="profile-content">
                    {editMode ? (
                        <input 
                            type="text" 
                            value={name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                    ) : (
                        <p>Name: {name}</p>
                    )}
                    
                    <button onClick={this.toggleEditMode}>
                        {editMode ? 'Save' : 'Edit'}
                    </button>
                    <button onClick={this.changeName}>Change to Badreddin</button>

                    <h2>My Hobbies:</h2>
                    <ul>
                        {hobbies.map((hobby, index) => (
                            <li key={index}>{hobby}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default UserProfile;
