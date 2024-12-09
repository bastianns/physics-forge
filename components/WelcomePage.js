import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const WelcomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome to Physics Forge</Text>
        <Text style={styles.description}>
          Explore the world of virtual experiments and simulations.
        </Text>
        <Button title="Get Started" onPress={() => console.log('Get Started button pressed')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
});

export default WelcomePage;