import React from 'react';

import Header from '@/app/components/header';

export interface PageProps {
  params: Promise<{ id: string[] }>;
}

export default async function Page({ params }: PageProps) {
  // Next documentation says to async/await Dynamic APIs!
  const { id } = await params;

  return (
    <>
      <Header>Companies ({id})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}
