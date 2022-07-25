import create from 'zustand'

interface StoreType {
  mType: string
  setmType: (payload: string) => void
}

const useStore = create<StoreType>((set) => ({
  mType: 'Default',
  setmType: (payload: string) => set((state) => ({ ...state, mType: payload })),
}))

export default useStore
