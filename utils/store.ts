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
    isPro: boolean,
    setUser: (userData: userdata | null) => void,
    clearUser: () => void,
    setIsPro: () => void,
    setIsNotPro: () => void
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
            isPro: false,
            setUser: (userData: userdata | null) => set(() => ({user: userData, isAuthenticated: userData !== null})),
            clearUser: () => set(() => ({user: null, isAuthenticated: false, isPro: false})),
            setIsPro: () => set(() => ({isPro: true})),
            setIsNotPro: () => set(() => ({isPro: false}))
        }),
        {
            name: "auth-storage",
            storage: createJSONStorage(() => localStorage)
        }
    )
)
