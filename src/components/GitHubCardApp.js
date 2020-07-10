import React, { Component } from 'react';
import Form from './Form';
import CardList from './CardList';

export default class GitHubCardApp extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         profiles: testData,
    //     };
    // }

    state = {
        profiles: [],
    };

    addNewProfile = (profileData) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData]
        }))
    };

    render(){
        return <>
            <h1>The GitHub Cards App</h1>
            <Form onSubmit={this.addNewProfile} />
            <CardList profiles={this.state.profiles}/>
        </>
    }
}