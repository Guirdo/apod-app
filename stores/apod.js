import moment from 'moment';
import create from 'zustand';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&thumbs=true`;

const useAPODStore = create((set, get) => ({
  copyright: '',
  date: moment().format('YYYY-MM-DD'),
  explanation: '',
  hdurl: '#',
  media_type: 'image',
  title: 'Loading',
  url: '#',
  thumbnail_url: '',
  isLoading: true,
  setIsLoading: () => set({isLoading: true}),
  setDate: (date) => set({date}),
  fetchAPOD: async () => {
    const date = get().date;
    await fetch(`${API_URL}&date=${date}`)
        .then((res) => res.json())
        .then((res) => set({...res, isLoading: false}))
        .catch((error) => console.log(error));
  },
  fetchAPODWithDate: async (date) => {
    await fetch(`${API_URL}&date=${date}`)
        .then((res) => res.json())
        .then((res) => set({...res, isLoading: false}))
        .catch((error) => console.log(error));
  },
}));

export default useAPODStore;
