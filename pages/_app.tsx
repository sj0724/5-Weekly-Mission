import Footer from '@/components/Footer/Footer';
import Nav from '@/components/Nav/Nav';
import { ModalProvider } from '@/contexts/ModalContext';
import { UserContext } from '@/contexts/UserContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const id = '1';

  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <UserContext.Provider value={id}>
        <Nav />
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </UserContext.Provider>
      <Footer />
    </>
  );
}
