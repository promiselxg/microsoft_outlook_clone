import Head from 'next/head';
import { useSession, signIn, signOut } from 'next-auth/react';

const Home = () => {
  return (
    <>
      <Head>
        <title>3swap Dex</title>
      </Head>
      <h1>Microsoft Outlook clone</h1>
    </>
  );
};

export default Home;
