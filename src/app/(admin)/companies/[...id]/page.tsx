import Header from '@/app/components/header';

import React from 'react';

interface PageProps {
  params: { id: string[] };
}

function Page({ params }: PageProps) {
  return (
    <>
      <Header>Companies ({String(params.id)})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}

export default Page;
