import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface LoadingProps {}

export default function Loading({}: LoadingProps) {
  return (
    <div className="flex items-center justify-center py-10 text-gray-800">
      <span className="animate-pulse">Loading...</span>
    </div>
  );
}
