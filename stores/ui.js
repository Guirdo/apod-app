import create from 'zustand';

const useUIStore = create((set) => ({
  isHighQuality: false,
  errorMessage: '',
  showVideo: true,
  setIsHighQuality: (value) => set({isHighQuality: value}),
  setErrorMessage: (message) => set({errorMessage: message}),
  setShowVideo: (value) => set({showVideo: value}),
}));

export default useUIStore;
