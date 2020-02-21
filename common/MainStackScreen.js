import React from 'react'
import { View, Text, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import MainFeed from '../pages/MainFeed';
import FeedComment from '../pages/FeedComment';

const settingStack = createStackNavigator();

const mainStack = () => {
    return (
          <settingStack.Navigator initialRouteName="MainFeed">
            <settingStack.Screen name="MainFeed" component={MainFeed} 
              options={{
                headerTitle: (
                  <Image 
                  style={{ width: 110, height: 33 }}
                  source={require('../images/logo_text.png')}/>
              )
              }}
            
            />
            <settingStack.Screen name="FeedComment" component={FeedComment
            } 
            options={{
              title: '댓글',
              headerBackTitle: ''
            }}
            />
          </settingStack.Navigator>
      );
}

export default mainStack
