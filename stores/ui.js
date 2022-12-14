import create from 'zustand';

const useUIStore = create((set) => ({
  isHighQuality: false,
  setIsHighQuality: (value) => set({isHighQuality: value}),
}));

export default useUIStore;
