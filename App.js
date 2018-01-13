import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';

class RecentChatsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>List of reccent chats</Text>
        <Button
  onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
  title="Chat with Lucy"
  />
    </View>
    );
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return(
      <View>
        <Text>List of all contacts</Text>
        <Button
  onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
  title="Chat with Lucy"
  />
    </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome Folks'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button onPress={ () => navigate('Chat', { user: 'Lucy' })} title="Chat with Lucy" />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render(){
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }

}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

export const SimpleApp = StackNavigator({
  Home: { screen: MainScreenNavigator,
          navigationOptions: {
            title: 'My Charts',
      },
   },
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
