import React, { Component } from 'react';

export default class Card extends Component{

    render(){
        const profile = this.props;
        return <div className="github-profile" >
            <img src={profile.avatar_url} alt="GitHub Profile"/>
            <p>{profile.name}</p>
            <p>{profile.company}</p>
        </div>           
       
    }
}