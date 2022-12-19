import create from 'zustand';

const useUIStore = create((set) => ({
  isHighQuality: false,
  errorMessage: '',
  setIsHighQuality: (value) => set({isHighQuality: value}),
  setErrorMessage: (message) => set({errorMessage: message}),
}));

export default useUIStore;
