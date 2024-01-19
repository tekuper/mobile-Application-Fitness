import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Profile = ({ route }) => {
  const { profileData } = route?.params || {};
  const { username } = route?.params || {};

  return (
    <View style={styles.profileContainer}>

      <View style={styles.profileInfo}>
        <Text style={styles.greetingText}>Hi {username}!</Text>

        <Text style={styles.profileLabelText}>Profile Information:</Text>
        <Text style={styles.profileText}>Height: {profileData.selectedHeight} cm</Text>
        <Text style={styles.profileText}>Weight: {profileData.selectedWeight} kg</Text>
        <Text style={styles.profileText}>Gender: {profileData.selectedGender}</Text>
        <Text style={styles.profileText}>
          Weight Goal: {profileData.weightGoal === 'gain' ? 'Gain Weight' : 'Lose Weight'}
        </Text>
        <Text style={styles.profileText}>Period: {profileData.selectedPeriod}</Text>
        <Text style={styles.profileText}>
          Food Allergies: {profileData.selectedAllergies.join(', ')}
        </Text>
        <Text style={styles.profileText}>
          Daily Reminder: {profileData.reminderPreference === 'yes' ? 'Yes' : 'No'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    profileContainer: {
      flex: 2,
      marginTop:50,
      backgroundColor: '#F5F5F5',
    },
    gradientBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 200,
    },
    profileInfo: {
      backgroundColor: '#FFFFFF',
      padding: 20,
      borderRadius: 10,
      elevation: 3,
      marginTop: -10, // Adjust the marginTop to fill the space left by the removed icons
    },
    greetingText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: 'blue',
    },
    profileLabelText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#333333',
    },
    profileText: {
      fontSize: 16,
      marginBottom: 8,
      color: '#555555',
    },
  });
  
  export default Profile;