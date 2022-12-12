import moment from 'moment';
import create from 'zustand';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

const useAPODStore = create((set, get) => ({
  copyright: '',
  date: moment().format('YYYY-MM-DD'),
  explanation: '',
  hdurl: '#',
  media_type: 'image',
  title: 'Loading',
  url: '#',
  setDate: (date) => set({date}),
  fetchAPOD: async () => {
    const date = get().date;
    const response = await fetch(`${API_URL}&date=${date}`)
        .then((res) => res.json());

    set({...response});
  },
  fetchAPODWithDate: async (date) => {
    const response = await fetch(`${API_URL}&date=${date}`)
        .then((res) => res.json());

    set({...response});
  },
}));

export default useAPODStore;
