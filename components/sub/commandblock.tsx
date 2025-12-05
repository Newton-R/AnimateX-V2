import { useState } from 'react'
import CodeBlock from './codeblock'
import { motion as m } from 'motion/react'

interface CommandBlock{
    type?: "x" | "n",
    mainCommand?: string,
    item: string
}

export const CommandBlock = ({type, mainCommand ="animatex-pro add", item}:CommandBlock) => {
    const [current, setcurrent] = useState(0)
    const commandlists = [
        {
            pkm: "npm",
            command: type === "x" ?  `npx ${mainCommand} ${item}` : `npm ${mainCommand} ${item}` 
        },
        {
            pkm: "pnpm",
            command: type === "x" ?  `pnpx ${mainCommand} ${item}` : `pnpm ${mainCommand} ${item}` 
        },
        {
            pkm: "yarn",
            command: type === "x" ?  `yarn ${mainCommand} ${item}` : `yarn ${mainCommand} ${item}` 
        }
    ]
  return (
    <div>
        <div className='flex items-end rounded-md border overflow-hidden border-col w-fit'>
            {
                commandlists.map((cmd, i) => 
                    <button key={i} onClick={() => setcurrent(i)} className='p-2 relative px-4 cursor-pointer'>
                        {cmd.pkm}
                        {
                            current === i &&
                            <m.div transition={{duration: 0.25}} layoutId='ig' className='absolute -z-10 inset-0 bg-(--secondary-hover)'/>
                        }
                    </button>
                )
            }
        </div>
        <CodeBlock language={"jsx"} code={commandlists[current].command}/>
    </div>
  )
}
