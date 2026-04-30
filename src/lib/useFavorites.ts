import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'boredom_buster_favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error('Failed to load favorites from local storage', e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (e) {
      console.error('Failed to save favorites to local storage', e);
    }
  }, [favorites]);

  const toggleFavorite = (domain: string) => {
    setFavorites(prev => {
      if (prev.includes(domain)) {
        return prev.filter(d => d !== domain);
      } else {
        return [...prev, domain];
      }
    });
  };

  const isFavorite = (domain: string) => favorites.includes(domain);

  return { favorites, toggleFavorite, isFavorite };
}
