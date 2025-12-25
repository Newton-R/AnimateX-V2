import { create } from "zustand"


export type toastItem = {
    id?: string,
    message: string | React.ReactNode,
    type: "success" | "error" | "default" | string,
    isOpen?: boolean
}

interface toast{
    toast: Array<toastItem>,
    addToast: (toast: toastItem) => void,
    removeToast: (id: string) => void
}


const MAX_VALUE = 3


export const useToast = create<toast>((set => ({
    toast: [],
    addToast: (toast:toastItem) => {
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
                }
                // updatedtoasts[0] = {...updatedtoasts[0], isOpen: false}
            }


            updatedtoasts.push({
                ...toast, id: id, isOpen: true
            })
            // updatedtoasts.filter(t => t.id !== updatedtoasts[0].id)

            return { toast: updatedtoasts}
        }
           
            
        //     ({
        //     toast: [...state.toast, {...toast,isOpen: true, id: id}]
        // })
    )

        //remove toast after some period of time
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
    removeToast: (id: string) => set((state) => ({toast: state.toast.filter(t => t.id !== String(id)), isOpen: state.toast.length - 1 > 0}))
})))