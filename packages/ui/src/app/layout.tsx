import './globals.css';
import type { Metadata } from 'next';
import SocketProvider from '@/components/socket-provider';
import Wrapper from '@/components/wrapper';

export const metadata: Metadata = {
  title: 'Slide Play',
  description: 'Let\'s play with slides!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>
        <SocketProvider>
          <Wrapper as="main">    
            {children}
          </Wrapper>
        </SocketProvider>
      </body>
    </html>
  );
}
