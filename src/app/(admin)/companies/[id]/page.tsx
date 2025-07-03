import React from 'react';
import Header from '@/app/components/header';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export interface PageProps {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function Page({ params }: PageProps) {
  return (
    <>
      <Header>Company ({params.id})</Header>
    </>
  );
}
