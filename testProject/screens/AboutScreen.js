import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.linkContainer}>
            <Text style={styles.titleText}>
                Hunterdon Drug Awareness Program
            </Text>
        </View>
    </ScrollView>
  );
}

AboutScreen.navigationOptions = {
  title: 'About',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'lightgrey',
  },
  linkContainer: {
    padding: 15,
    fontSize: 17,
    color: '#0000',
    lineHeight: 24,
    textAlign: 'center',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 25,

  },
});
