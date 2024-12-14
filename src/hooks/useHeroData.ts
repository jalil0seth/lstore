import { useState, useEffect } from 'react';
import { getHeroData } from '../components/hero/hero.ts';

export const useHeroData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const heroData = getHeroData();
      if (heroData) {
        setData(heroData);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return data;
};
