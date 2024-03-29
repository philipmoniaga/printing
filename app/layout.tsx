import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import { MainLayout } from '@/components';
import Provider from './Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PercetakanKami.net',
  description: 'PercetakanKami.net',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <Provider>
            <MainLayout>{children}</MainLayout>
          </Provider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
