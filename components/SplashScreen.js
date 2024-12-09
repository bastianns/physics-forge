import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Image, StyleSheet, View } from 'react-native';

const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Image
          source={require('../assets/images/splash-icon.png')}
          style={styles.fullScreenImage}
          resizeMode="cover" // Menyesuaikan gambar untuk memenuhi layar
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Pastikan warna latar konsisten
  },
  fullScreenImage: {
    width: Dimensions.get('window').width, // Lebar sesuai layar
    height: Dimensions.get('window').height, // Tinggi sesuai layar
  },
});

export default SplashScreen;
