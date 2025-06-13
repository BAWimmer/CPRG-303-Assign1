import React from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

export default function App() {

  // Sample images
  const gridImages = [
    'https://picsum.photos/120/120?random=1',
    'https://picsum.photos/120/120?random=2',
    'https://picsum.photos/120/120?random=3',
    'https://picsum.photos/120/120?random=4',
    'https://picsum.photos/120/120?random=5',
    'https://picsum.photos/120/120?random=6',
    'https://picsum.photos/120/120?random=7',
    'https://picsum.photos/120/120?random=8',
    'https://picsum.photos/120/120?random=9',
    'https://picsum.photos/120/120?random=10',
    'https://picsum.photos/120/120?random=11',
    'https://picsum.photos/120/120?random=12',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Group Profile</Text>
          <Text style={styles.headerSubtitle}>OOTD Everyday</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <b><Text style={styles.addIcon}>+</Text></b>
        </TouchableOpacity>
      </View>

      {/*Profile Section */}

      <ScrollView style={styles.scrollView}>
        <View style={styles.profileSection}>
          <View style={styles.profilePicture}>
            <Text style={styles.profileInitials}>OO{'\n'}TD</Text>
          </View>

          {/* Stats */}

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>53</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Members</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1</Text>
              <Text style={styles.statLabel}>Admins</Text>
            </View>
          </View>
        </View>

        {/* Profile Info */}
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>OOTD Everyday</Text>
          <Text style={styles.profileDescription}>
            Fit check! ✨{'\n'}
            You know we'll hype you up.
          </Text>
        </View>

        {/* Member Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.memberButton}>
            <Text style={styles.memberButtonText}>Member  ▼</Text>
          </TouchableOpacity>
        </View>

        {/* Photo Grid */}
        <View style={styles.photoGrid}>
          {gridImages.map((imageUri, index) => (
            <TouchableOpacity key={index} style={styles.gridItem}>
              <Image source={{ uri: imageUri }} style={styles.gridImage} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Alert Button */}

      <TouchableOpacity style={styles.alertButton} onPress={() => alert('Alert button pressed!')}>
        <Text style={styles.alertButtonText}>Alert button</Text>
      </TouchableOpacity>

      </ScrollView>

      

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🔍</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>➕</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📱</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    padding: 5,
  },
  backArrow: {
    fontSize: 24,
    color: '#000000',
    fontWeight: '300',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#8e8e8e',
    marginTop: 2,
  },
  addButton: {
    padding: 5,
  },
  addIcon: {
    fontSize: 24,
    color: '#000000',
    fontWeight: '300',
  },
  scrollView: {
    flex: 1,
  },
  profileSection: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
  },
  profileInitials: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  statLabel: {
    fontSize: 13,
    color: '#8e8e8e',
    marginTop: 2,
  },
  profileInfo: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 5,
  },
  profileDescription: {
    fontSize: 14,
    color: '#000000',
    lineHeight: 18,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  memberButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d0d0d0',
  },
  memberButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 2,
  },
  gridItem: {
    width: '33.33%',
    aspectRatio: 1,
    padding: 1,
  },
  gridImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
  },
  bottomNav: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderTopColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
  },
  navIcon: {
    fontSize: 24,
  },
  alertButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',     
    marginTop: 20,           
    marginBottom: 30,        
    width: '50%',            
},
  alertButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});