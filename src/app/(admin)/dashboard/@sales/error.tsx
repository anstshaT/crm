'use client';
export interface ErrorProps {
  error: Error;
}
function Error({}: ErrorProps) {
  return <div>Unexpected error inside slot sales</div>;
}

export default Error;
