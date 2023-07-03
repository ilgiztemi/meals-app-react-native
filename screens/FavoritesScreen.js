import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import * as Notifications from 'expo-notifications'

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true
    };
  }
})
const FavoritesScreen = () => {
  const scheduleNotificationHandler = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "My first local notification",
        body: "This is the body of the notification",
        data: {
          userName: 'Max'
        }
      },
      trigger: {
        seconds: 5
      }
    });
  };
  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>The favorites screen!</Text>
      <Button style={ ( { pressed } ) => [ pressed && styles.pressed ] } title="Schedule Notifications" onPress={ scheduleNotificationHandler } />
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 24,
    marginBottom: 16
  },
  pressed: {
    opacity: 0.7
  }
} );