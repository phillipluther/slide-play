'use client';

import PageTitle from '@/components/page-title';
import Controls from '@/components/controls';
import { SOCKET_SERVER } from '@/consts';

export default function RemocoPage() {
  return (
    <>
      <PageTitle>Simple Remote Control</PageTitle>
      <p>Try it on your phone!</p>
      
      <Controls />
    </>
  );
}
