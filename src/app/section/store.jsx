
import { create } from 'zustand'
const useStore = create((set) => ({
    data: null,
    fetchData: async () => {
      try {
        const response = await fetch('http://localhost:4001/m1');
        if (response.ok) {
          const result = await response.json();
          set({ data: result });
        } else {
          console.error(`خطا در درخواست: ${response.status}`);
        }
      } catch (error) {
        console.error('خطا در درخواست:', error);
      }
    },
    p:'',
    xt:(x)=>set({p:x}),
    x:1,
    inc:() => set((state) => ({ x:state.x<12 ? state.x + 1: state.x  })),
    dec:() => set((state) => ({x:state.x>1 ? state.x - 1: state.x })),
  }));
export default useStore