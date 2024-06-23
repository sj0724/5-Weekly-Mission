import Footer from '@/components/Footer/Footer';
import Nav from '@/components/Nav/Nav';
import { ModalProvider } from '@/contexts/ModalContext';
import { UserProvider } from '@/contexts/UserContext';
import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';

declare global {
  interface Window {
    Kakao: any;
  }
}

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
  }, []);

  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <Nav />
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        </UserProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      <Footer />
    </>
  );
}
