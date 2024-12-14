import { create } from 'zustand';
import type { HeroData } from "../../types/hero";

interface HeroStore {
  heroData: HeroData | null;
  isLoading: boolean;
  error: string | null;
  fetchHeroData: () => Promise<void>;
}

// Helper function to get product ID from URL path
const getProductIdFromUrl = (): string => {
  const path = window.location.pathname;
  // Remove leading and trailing slashes and split path
  const segments = path.replace(/^\/|\/$/g, '').split('/');
  // Get the last non-empty segment as ID
  const id = segments.filter(Boolean).pop();

  
  if (!id) {
    console.error('--> ' + window.location.pathname);
    //throw new Error('Product ID not found in URL path');
  }

  console.log('--> ' , id);
  
  return id;
};

export const useHeroStore = create<HeroStore>((set) => ({
  heroData: null,
  isLoading: true,
  error: null,

  fetchHeroData: async () => {
    if (!useHeroStore.getState().isLoading) {
      set({ isLoading: true });
    }
    try {
      const productId = getProductIdFromUrl();
      console.log('Fetching hero data for product ID:', productId);
      const response = await fetch(`/product/${productId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: HeroData = await response.json();
      set({ heroData: data, isLoading: false, error: null });
    } catch (error) {
      if(2 === 2) {
          const response = await fetch('https://api.npoint.io/cbf3b991dd1748e1b816');
          const data: HeroData = await response.json();
          set({ heroData: data, isLoading: false, error: null });
        }else{
          console.error('Error fetching hero data:', error);
          set({ heroData: null, isLoading: false, error: 'Error fetching hero data' });
        }
    }
  },
}));

const initializeStore = () => {
  useHeroStore.getState().fetchHeroData();
};

// Initialize data fetching immediately
initializeStore();

// Export heroData and keep it updated
export let heroData = useHeroStore.getState().heroData;

// Subscribe to store changes to update exported heroData
useHeroStore.subscribe((state) => {
  heroData = state.heroData;
});