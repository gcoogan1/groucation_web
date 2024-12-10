# groucation_web

Project Overview

The Travel App is a React-based mobile application designed to help users manage their trips seamlessly. Users can create trips, invite others, and log trip details while enjoying features like authentication and advanced state management.

# Travel App (Development)

## Project Overview
The Travel App is a React-based mobile application designed to help users manage their trips seamlessly. Users can create trips, invite others, and log trip details while enjoying features like authentication and advanced state management. This document provides an overview of the app’s development setup and deployment process.

## Key Features
- **User Authentication:** Implemented using Firebase Authentication.
- **Trip Management:** Users can create and manage trips, invite others, and track trip details.
- **Real-time Updates:** Firebase enables real-time data synchronization.
- **State Management:** Redux Toolkit is used for efficient state handling.
- **Data Persistence:** Firebase Firestore is utilized for storing and retrieving trip details.

## Technologies Used
- **Frontend:** React Native
- **State Management:** Redux Toolkit
- **Backend Services:** Firebase (Authentication, Firestore)
- **Deployment:** Netlify or Firebase Hosting (TBD)
- **API Management:** Firebase Cloud Functions
- **Data Fetching & Caching:** React Query

## Development Setup

### Prerequisites
- Node.js (v16 or higher)
- Firebase CLI
- Git
- A code editor (e.g., VS Code)

### Installation
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/gcoogan1/groucation_web.git
   cd travel-app
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Environment Variables:**
   - Add a `.env` file to the root of your project with the following:
     ```env
     VITE_API_UR=api_url
     VITE_LOG_LEVEL="debug"
     ```

5. **Start the Development Server:**
   ```bash
   npm run dev
   ```

### Project Structure
```
groupcation_web/
├── src/
│   ├── components/         # Reusable UI components
│   ├── features/           # Redux slices and logic
│   ├── screens/            # App screens (e.g., Login, Trip Details)
│   ├── services/           # API and Firebase utilities
│   ├── App.js              # Root component
├── .env                    # Environment variables
├── firebase.json           # Firebase configuration
├── package.json            # Dependencies and scripts
```

## Deployment

### Firebase Hosting
1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```
2. **Initialize Firebase:**
   ```bash
   firebase init
   ```
3. **Deploy:**
   ```bash
   npm run deploy-dev
   npm run deploy-prod
   ```

## Roadmap
- Add AI-based chat features.
- Implement better error handling for API requests.
- Enhance trip invitation system with email notifications.

## Contributing
Feel free to fork the repository and submit pull requests for enhancements or bug fixes. For major changes, open an issue first to discuss the proposed updates.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

