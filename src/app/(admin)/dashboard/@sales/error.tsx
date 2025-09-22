'use client';

import React from 'react';
import Button from '@/app/components/button';

export interface ErrorComponentProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorComponentProps) {
  return (
    <div>
      <p>{`Something went wrong in Sales. ${error.message}`}</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
