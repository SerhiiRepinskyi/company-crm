import React from 'react';
import Header from '@/app/components/header';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <Header>Company ({id})</Header>
    </>
  );
}
