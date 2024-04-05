
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: 'com.rafaelmerlotto.PizzaDoughCalculator',
  databaseURL: process.env.EXPO_PUBLIC_DATABASE_URL,
  projectId: 'pizzadoughcalculator',
  messagingSenderId: process.env.EXPO_PUBLIC_SENDER_ID,
  appId:  process.env.EXPO_PUBLIC_APP_ID,
};
initializeApp(firebaseConfig);


export const db = getFirestore()














    








