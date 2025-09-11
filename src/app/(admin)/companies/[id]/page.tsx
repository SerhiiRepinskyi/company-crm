import React from 'react';
import Header from '@/app/components/header';
// import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // if (!/^\d+$/.test(id)) {
  //   notFound();
  // }

  return (
    <>
      <Header>Company ({id})</Header>
    </>
  );
}
