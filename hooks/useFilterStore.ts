import create from 'zustand';

interface FilterState {
  themes: string[];
  setThemes: (themes: string[]) => void;
}

const useFilterStore = create<FilterState>((set) => ({
  themes: [],
  setThemes(themes) {
    set({ themes });
  },
}));

export default useFilterStore;
