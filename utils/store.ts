import { create } from "zustand";
import { userdata } from "@/components/dashboard/userblock";
import { persist, createJSONStorage } from "zustand/middleware";


interface toggle{
    isOpen: boolean,
    setClose: () => void,
    setToggle: () => void
}

interface authstore{
    user: userdata | null,
    isAuthenticated: boolean,
    setUser: (userData: userdata | null) => void,
    clearUser: () => void
}

export const useNavToggle = create<toggle>((set) => ({
    isOpen: false,
    setClose: () => set(() => ({isOpen : false})),
    setToggle: () => set((state) => ({isOpen: !state.isOpen}))
}))

export const useAuthStore = create<authstore>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            setUser: (userData: userdata | null) => set(() => ({user: userData, isAuthenticated: userData !== null})),
            clearUser: () => set(() => ({user: null, isAuthenticated: false}))
        }),
        {
            name: "auth-storage",
            storage: createJSONStorage(() => localStorage)
        }
    )
)