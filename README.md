# Offline Facial Authentication & Liveness Detection System

## Overview

Offline Facial Authentication & Liveness Detection System is a React Native based mobile application developed for secure identity verification in low-connectivity and offline environments.

The application performs:

* Face Capture using the device camera
* Facial Authentication
* Liveness Detection
* Offline Verification Workflow
* Result Generation and User Feedback

The project was developed as part of a hackathon focused on secure, privacy-preserving authentication solutions that can operate without continuous internet connectivity.

---

## Features

### Face Registration

* Capture user's facial image
* Store reference data locally
* Offline enrollment process

### Liveness Detection

* Detect whether a real person is present
* Prevent spoofing using photographs or screen replays
* Improve authentication security

### Facial Authentication

* Compare captured face against registered user
* Verify identity locally on device
* No cloud dependency

### Offline Operation

* Works without internet connectivity
* Suitable for remote and low-network areas
* Faster response time and improved privacy

### Result Screen

* Authentication Success
* Authentication Failure
* Liveness Detection Status

---

## Technology Stack

### Frontend

* React Native
* TypeScript

### Mobile Development

* Android Studio
* React Native CLI

### Camera Integration

* react-native-camera-kit

### Development Tools

* VS Code
* Git
* GitHub

---

## Project Structure

```text
src/
│
├── screens/
│   ├── HomeScreen.tsx
│   ├── CameraScreen.tsx
│   ├── LivenessScreen.tsx
│   └── ResultScreen.tsx
│
├── navigation/
│
└── components/
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/amishapatel20/offline-facial-authentication-liveness-detection.git
```

### Move into Project

```bash
cd offline-facial-authentication-liveness-detection
```

### Install Dependencies

```bash
npm install
```

### Start Metro

```bash
npm start
```

### Run Android Application

```bash
npx react-native run-android
```

---

## Current Development Status

### Completed

* React Native project setup
* Camera integration
* Multi-screen workflow
* Navigation structure
* Android deployment

### In Progress

* Advanced liveness detection
* Face matching module
* Secure offline storage
* Authentication scoring

---

## Future Enhancements

* Blink detection
* Head movement verification
* Face embeddings
* On-device machine learning
* Multi-user support
* Encrypted local database

---

## Use Cases

* Secure attendance systems
* Government verification systems
* Rural authentication solutions
* Offline access control
* Identity verification in remote locations

---

## Authors

**Amisha Patel**

Integrated MSc Mathematics
National Institute of Technology Rourkela

---

## License

This project is developed for educational, research, and hackathon purposes.
