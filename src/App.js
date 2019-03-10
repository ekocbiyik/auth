import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner, CardSection } from './components/common';
import firebase from 'firebase';
import LoginFrom from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCJQpb_ux9ovq-JAkozYF1kGK8LtZZO3-U",
            authDomain: "authentication-ad636.firebaseapp.com",
            databaseURL: "https://authentication-ad636.firebaseio.com",
            projectId: "authentication-ad636",
            storageBucket: "authentication-ad636.appspot.com",
            messagingSenderId: "1077805346909"
        });
        firebase.auth()
            .onAuthStateChanged((user) => {
                if (user) {
                    this.setState({ loggedIn: true });
                } else {
                    this.setState({ loggedIn: false });
                }
            });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button btnClick={() => firebase.auth().signOut()}>logout</Button>
                    </CardSection>
                );
            case false:
                return <LoginFrom />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
