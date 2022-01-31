import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout';
import GlobalStyle from '../styles/globals.style';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Layout>
    </>
  );
}

export default MyApp;
