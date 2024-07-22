import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Video } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';

const PlayMovieScreen = () => {
  const [paused, setPaused] = useState(true);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    setPaused(!paused);
    if (paused) {
      videoRef.current.playAsync();
    } else {
      videoRef.current.pauseAsync();
    }
  };

  const handleForward = async () => {
    const status = await videoRef.current.getStatusAsync();
    videoRef.current.setPositionAsync(status.positionMillis + 10000);
  };

  const handleBackward = async () => {
    const status = await videoRef.current.getStatusAsync();
    videoRef.current.setPositionAsync(status.positionMillis - 10000);
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{ uri: 'https://youtu.be/ugDBB1b9gYQ' }}
        style={styles.video}
        resizeMode="cover"
        shouldPlay={!paused}
      />
      <View style={styles.overlay}>
        <TouchableOpacity onPress={handleBackward} style={styles.controlButton}>
          <View style={styles.glow}>
            <Icon name="backward" size={30} color="#FFF" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={togglePlayPause} style={styles.controlButton}>
          <View style={styles.glow}>
            <Icon name={paused ? "play" : "pause"} size={40} color="#FFF" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForward} style={styles.controlButton}>
          <View style={styles.glow}>
            <Icon name="forward" size={30} color="#FFF" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlButton: {
    margin: 20,
  },
  glow: {
    shadowColor: '#FFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 20,
    borderRadius: 50,
  },
});

export default PlayMovieScreen;

