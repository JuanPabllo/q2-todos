import 'dotenv/config';

export interface AppConfig {
  API_KEY_FIREBASE: string;
  AUTH_DOMAIN_FIREBASE: string;
  STORAGE_BUCKET_FIREBASE: string;
  MESSAGING_SEND_ID_FIREBASE: string;
  APP_ID_FIREBASE: string;
  MEASUREMENT_ID_FIREBASE: string;
  PROJECT_ID_FIREBASE: string;
}

export default {
  name: 'q2-todos',
  version: '1.0.0',
  extra: {
    API_KEY_FIREBASE: process.env.API_KEY_FIREBASE,
    AUTH_DOMAIN_FIREBASE: process.env.AUTH_DOMAIN_FIREBASE,
    STORAGE_BUCKET_FIREBASE: process.env.STORAGE_BUCKET_FIREBASE,
    MESSAGING_SEND_ID_FIREBASE: process.env.MESSAGING_SEND_ID_FIREBASE,
    APP_ID_FIREBASE: process.env.APP_ID_FIREBASE,
    MEASUREMENT_ID_FIREBASE: process.env.MEASUREMENT_ID_FIREBASE,
    PROJECT_ID_FIREBASE: process.env.PROJECT_ID_FIREBASE,
  },
};
