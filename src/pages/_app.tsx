import { ChakraProvider } from '@chakra-ui/react';

import theme from '../theme';
import { AppProps } from 'next/app';
import { DatabaseProvider, FirestoreProvider, useFirebaseApp } from 'reactfire';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from '../config/constants';
import '@fontsource/zcool-xiaowei';
import '@fontsource/noto-sans-sc';
import '../styles/love.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </FirebaseAppProvider>
  );
};

export default MyApp;
