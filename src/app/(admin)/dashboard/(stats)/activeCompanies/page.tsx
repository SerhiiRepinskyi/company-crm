import React from 'react';
import Header from '@/app/components/header';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard / Total active companies</Header>
      <div className="pl-10 pt-10 text-xl	text-gray-900 font-medium">
        Some additional info about active companies
      </div>
    </>
  );
}
