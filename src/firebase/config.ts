
// IMPORTANT: Do not use this configuration object directly.
// Use environment variables to configure Firebase as specified in the documentation.
// https://firebase.google.com/docs/web/setup#access-firebase-in-your-app

// This configuration is for reference and may be used in environments
// where environment variables are not available.
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
};
