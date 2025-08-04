# Collab - Social Networking App

A geolocation-based social networking app that lets users initiate or join spontaneous meetups and collaborative projects within a selected distance radius.

## Features

### Core Features
- User authentication with email
- Real-time location tracking with privacy toggles
- Interactive map showing nearby users and activities
- User-defined radius for social visibility (0.5–10 km)
- Activity creation and joining system
- Privacy controls (invisible mode, blurred location)

### Current Screens
- **Login Screen**: Simple email/name authentication
- **Map Screen**: Interactive map with location tracking and radius controls
- **Activities Screen**: Browse and join nearby activities
- **Profile Screen**: User settings and privacy controls

## Tech Stack

- **Frontend**: React Native with Expo
- **Navigation**: React Navigation v6
- **Maps**: React Native Maps
- **Location**: Expo Location
- **UI**: React Native with custom styling

## Getting Started

### Prerequisites
- Node.js (v16 or later)
- Expo CLI
- iOS Simulator or Android Emulator (optional)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd collab-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your preferred platform:
```bash
# iOS (requires macOS)
npm run ios

# Android
npm run android

# Web
npm run web
```

### Using Expo Go
1. Install Expo Go on your mobile device
2. Scan the QR code from the terminal
3. The app will load on your device

## Project Structure

```
src/
├── components/          # Reusable UI components
├── screens/            # Screen components
│   ├── LoginScreen.tsx
│   ├── MapScreen.tsx
│   ├── ActivitiesScreen.tsx
│   └── ProfileScreen.tsx
├── navigation/         # Navigation configuration
│   ├── AppNavigator.tsx
│   └── TabNavigator.tsx
├── types/             # TypeScript type definitions
├── services/          # API and external services
├── hooks/             # Custom React hooks
└── utils/             # Utility functions
```

## Current Functionality

### Authentication
- Simple email/name form validation
- Mock authentication (no backend integration yet)

### Map Features
- Current location display
- Adjustable visibility radius (0.5km - 10km)
- Privacy toggle (show/hide from map)
- Location permission handling

### Activities
- Mock activity data display
- Activity filtering (All, Joined, Created)
- Activity cards with participant count and distance
- Tag system for categorization

### Profile
- User settings
- Privacy controls
- Notification preferences
- Mock user data

## Next Steps

### Immediate Improvements
1. **Backend Integration**
   - Firebase/Firestore setup
   - Real user authentication
   - Activity CRUD operations

2. **Real-time Features**
   - Live location updates
   - Real-time activity updates
   - Push notifications

3. **Enhanced UI/UX**
   - Activity creation modal
   - User profiles
   - Chat/messaging system

### Future Features
- GPS route syncing for collaborative art
- Achievement/badge system
- Advanced privacy controls
- AI-powered interest matching

## Development Notes

- The app uses mock data for demonstration
- Location permissions are configured for both iOS and Android
- Navigation structure supports easy addition of new screens
- Components follow React Native best practices

## Deployment

### Web Deployment (Vercel)

The app includes a web landing page optimized for Vercel deployment:

1. **Deploy to Vercel:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy to Vercel
   vercel --prod
   ```

2. **Or connect GitHub repository:**
   - Go to [vercel.com](https://vercel.com)
   - Import the GitHub repository
   - Vercel will automatically deploy on every push

3. **Custom Domain:**
   - Add your custom domain in Vercel dashboard
   - DNS will be automatically configured

The web version shows a landing page with app information and download links, as the full React Native functionality requires mobile devices.

### Mobile App Deployment

For production mobile app deployment:

1. **iOS App Store:**
   ```bash
   npm run build:ios
   # Follow Expo/EAS Build documentation
   ```

2. **Google Play Store:**
   ```bash
   npm run build:android
   # Follow Expo/EAS Build documentation
   ```

## Contributing

1. Create a feature branch
2. Follow existing code style and structure
3. Test on both iOS and Android if possible
4. Submit a pull request

## License

This project is licensed under the MIT License.