import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button onPress={ () => navigate('Chat')} title="Chat with Lucy" />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render(){
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }

}

export const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
