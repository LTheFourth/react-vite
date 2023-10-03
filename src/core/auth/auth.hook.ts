import { useState } from 'react';

export default function useAuth() {
  const [isLogedIn, setIslogedIn] = useState(true);

  return { isLogedIn };
}
