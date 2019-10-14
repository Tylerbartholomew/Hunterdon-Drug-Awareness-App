import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import Colors from '../constants/Colors';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
                About Hunterdon Drug Awareness Program
            </Text>
        </View>
        <View style={styles.bodyContainer}>
            <Text style={styles.bodyText}>
                We are a progressive, science based nonprofit outpatient (OP) and intensive outpatient (IOP) treatment program
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
  },
  titleContainer: {
    padding: 15,
    margin: 15,
    fontSize: 20,
    backgroundColor: Colors.primary,
    lineHeight: 24,
    textAlign: 'center',
  },
  titleText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 25,
  },
  bodyContainer: {
    padding: 15,
    margin: 15,
    fontSize: 15,
    lineHeight: 24,
  },
  bodyText: {

  },
});
