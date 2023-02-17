import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  API_KEY_FIREBASE,
  APP_ID_FIREBASE,
  AUTH_DOMAIN_FIREBASE,
  MEASUREMENT_ID_FIREBASE,
  MESSAGING_SEND_ID_FIREBASE,
  PROJECT_ID_FIREBASE,
  STORAGE_BUCKET_FIREBASE,
} from './constant';

const firebaseConfig = {
  apiKey: API_KEY_FIREBASE,
  authDomain: AUTH_DOMAIN_FIREBASE,
  projectId: PROJECT_ID_FIREBASE,
  storageBucket: STORAGE_BUCKET_FIREBASE,
  messagingSenderId: MESSAGING_SEND_ID_FIREBASE,
  appId: APP_ID_FIREBASE,
  measurementId: MEASUREMENT_ID_FIREBASE,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
