'use client';

import { useEffect } from 'react';

export default function Preview() {
  useEffect(() => {
    document.write(localStorage.getItem('specialPreview'));
  }, []);
  return <div>Preview</div>;
}
