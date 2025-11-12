import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { useUser } from '../context/UserContext';
import { ChevronRight } from 'lucide-react-native';

export default function LoginScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { username, setUsername } = useUser();
  const colorScheme = useColorScheme();
  const [name, setNameLocal] = useState(username || '');

  const handleSaveName = () => {
    if (!name.trim()) return;
    setUsername(name);
    navigation.navigate('Home');
  };

  // Colors
  const backgroundColor = colorScheme === 'light' ? '#F8F8F8' : '#000';
  const textColor = colorScheme === 'light' ? '#000' : '#F5F5DC';
  const subTextColor = colorScheme === 'light' ? '#555' : '#B3B3B3';
  const saveButtonColor = colorScheme === 'light' ? '#E6E6FA' : '#9370DB';
  const saveButtonTextColor = colorScheme === 'light' ? '#000' : '#FFF';

  // Connect button colors
  const spotifyColor = colorScheme === 'light' ? '#1DB954' : '#1AA64B';
  const soundcloudColor = colorScheme === 'light' ? '#FF5500' : '#FF7722';
  const appleMusicColor = colorScheme === 'light' ? '#FF2D55' : '#FF5577';

  return (
    <SafeAreaView style={[styles.canvas, { backgroundColor }]}>
      <View style={styles.centered}>
        <Text style={[styles.title, { color: textColor }]}>SoundSync</Text>

        <View style={styles.leftAligned}>
          <Text style={[styles.heading, { color: textColor, marginTop: 24 }]}>Get Started</Text>
          <Text style={[styles.label, { color: textColor }]}>Your Name</Text>
          <TextInput
            style={[styles.input, { color: textColor, borderColor: textColor }]}
            placeholder="Enter your name"
            placeholderTextColor={subTextColor}
            value={name}
            onChangeText={setNameLocal}
          />
          <TouchableOpacity
            style={[styles.saveButton, { backgroundColor: saveButtonColor }]}
            onPress={handleSaveName}
          >
            <Text style={[styles.saveButtonText, { color: saveButtonTextColor }]}>Save Name</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 32, width: '80%' }}>
          <TouchableOpacity
            style={[styles.connectButton, { backgroundColor: spotifyColor }]}
            onPress={() => console.log('Connecting to Spotify')}
          >
            <Text style={styles.connectButtonText}>Connect to Spotify</Text>
            <ChevronRight color="#FFF" size={24} style={{ marginLeft: 8 }} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.connectButton, { backgroundColor: soundcloudColor, marginTop: 12 }]}
            onPress={() => console.log('Connecting to SoundCloud')}
          >
            <Text style={styles.connectButtonText}>Connect to SoundCloud</Text>
            <ChevronRight color="#FFF" size={24} style={{ marginLeft: 8 }} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.connectButton, { backgroundColor: appleMusicColor, marginTop: 12 }]}
            onPress={() => console.log('Connecting to Apple Music')}
          >
            <Text style={styles.connectButtonText}>Connect to Apple Music</Text>
            <ChevronRight color="#FFF" size={24} style={{ marginLeft: 8 }} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  canvas: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 12 },
  centered: { width: '100%', alignItems: 'center' },
  leftAligned: { width: '80%', alignItems: 'flex-start' },
  title: { fontSize: 40, fontWeight: 'bold', textAlign: 'center', padding: 12, fontFamily: 'Raleway-Black' },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 8, fontFamily: 'Raleway-Bold' },
  label: { marginBottom: 4, fontFamily: 'Raleway-Regular' },
  input: {
    width: '100%',
    backgroundColor: '#00000010',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    fontFamily: 'Raleway-Regular',
  },
  saveButton: { padding: 12, borderRadius: 12, marginTop: 8, alignItems: 'center' },
  saveButtonText: { fontWeight: 'bold', fontFamily: 'Raleway-Bold' },
  connectButton: {
    flexDirection: 'row',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectButtonText: { color: '#FFF', fontWeight: '600', fontFamily: 'Raleway-Bold', marginRight: 8 },
});
