import { create } from "zustand"

const MAX_VALUE = 3


export const useToast = create((set => ({
    toast: [],

    //function to add toasts
    addToast: (toast) => {
        const id = crypto.randomUUID()
        set((state) => {
            const updatedtoasts = [...state.toast]

            if(updatedtoasts.length >= MAX_VALUE){
                const oldest = updatedtoasts.find(t => t.isOpen)
                if(oldest){
                    oldest.isOpen = false
                    set((s) => ({
                        toast: s.toast.filter((tost) => tost.id !== oldest.id)
                    }))
                }}
            updatedtoasts.push({
                ...toast, id: id, isOpen: true
            })
            return { toast: updatedtoasts}
        }

    )

        //remove toast after some period of time (5s)
        setTimeout(() => {
            set((state) => ({
                toast: state.toast.map((t) => 
                    t.id === id ? {...t, isOpen: false} : t
                )
            }))

            set((state) => ({
                toast: state.toast.filter((t) => t.id !== id)
            }))

        }, 5000)
    },
    //remove toast function
    removeToast: (id) => set((state) => ({toast: state.toast.filter(t => t.id !== String(id)), isOpen: state.toast.length - 1 > 0}))
})))

