import * as React from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import Login from './pages/Login';
import Main from './Main';
import RootStack from './common/RootStack';
import { createSwitchNavigator } from 'react-navigation';
import { createAppContainer } from 'react-navigation';


class App extends React.Component {
    constructor() {
      super();
      //this._bootstrapAsync();
    }
  
    // Fetch the token from storage then navigate to our appropriate place
    // _bootstrapAsync = async () => {
    //   const userToken = await AsyncStorage.getItem('userToken');
  
    //   // This will switch to the App screen or Auth screen and this loading
    //   // screen will be unmounted and thrown away.
    //   this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    // };
  
    // Render any loading content that you like here
    render() {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
          {/* <StatusBar barStyle="default" /> */}
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  
  export default createAppContainer(createSwitchNavigator(
    {
      //App: App,
      Login: Login,
      RootStack: RootStack,
    },
    {
      initialRouteName: 'RootStack',
    }
  ));
  