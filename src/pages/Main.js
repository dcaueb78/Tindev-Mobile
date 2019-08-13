import React from 'react';
import { SafeAreaView, Image, StyleSheet, View, Text } from 'react-native';

import logo from '../assets/logo.png'

export default function Main(){
  return <SafeAreaView style={styles.container}>
    <Image source={logo} />

    <View style={styles.cardsContainer}>
      <View style={styles.card}>
        <Image style={styles.avatar} source={{ uri: 'https://avatars3.githubusercontent.com/u/37030530?v=4'}}/>
        <View style={styles.footer}>
          <Text style={styles.name}>Cauê Kotarski</Text>
          <Text style={styles.bio}>We are working to build community through open source technology. NB: members must have two-factor auth.</Text>
        </View>
      </View>
      
      <View style={styles.card}>
        <Image style={styles.avatar} source={{ uri: 'https://avatars3.githubusercontent.com/u/37030530?v=4'}}/>
        <View style={styles.footer}>
          <Text style={styles.name}>Cauê Kotarski</Text>
          <Text style={styles.bio}>We are working to build community through open source technology. NB: members must have two-factor auth.</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image style={styles.avatar} source={{ uri: 'https://avatars3.githubusercontent.com/u/37030530?v=4'}}/>
        <View style={styles.footer}>
          <Text style={styles.name}>Cauê Kotarski</Text>
          <Text style={styles.bio}>We are working to build community through open source technology. NB: members must have two-factor auth.</Text>
        </View>
      </View>
    </View>


    <View/>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  cardsContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    maxHeight: 500,
  },

  card: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    margin: 30,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  avatar: {
    flex: 1,
    height: 300,
  }
})