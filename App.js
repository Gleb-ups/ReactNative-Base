import React from 'react';
import {StyleSheet, StatusBar, View, Image, Text} from 'react-native';

const App = () => {
  return (
    <View>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: 'https://www.jingu.ru/sirius/jingu-logo-512.png',
          }}
        />
        <Text style={styles.credentials}>Gleb Demin</Text>
        <Text style={styles.emoji}>🚀</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 210,
    height: 210,
    borderRadius: 105,
    marginTop: '35%',
  },
  credentials: {
    fontFamily: 'Roboto',
    fontWeight: '300',
    fontStyle: 'normal',
    color: '#000000',
    fontSize: 40,
    marginTop: '20%',
  },
  emoji: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#000000',
    fontSize: 80,
    marginTop: '19%',
  },
});

export default App;
