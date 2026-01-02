import { CommandBlock } from '@/components/sub/commandblock'
import { KeyLink, KeyText } from '@/components/sub/keylink'
import MainCodeBlock from '@/components/sub/maincodeblock'
import React from 'react'

const Bullet = () => {
  return (
      <div className='absolute top-0 left-0 w-2 bg-(--secondary-hover) rounded-r-xl h-8'/>
  )
}

const AnimatexCliPage = () => {
    const commandList = [
    {
        command: "init",
        description: "Sets up AnimateX-Pro by installing required dependencies."
    },
    {
        command: "store <user-key>",
        description:
        "Authenticates the user using a provided user key and stores it locally."
    },
    {
        command: "add <component>",
        description:
        "Adds a specified AnimateX-Pro component to your project."
    }
    ];

  return (
    <div className='flex w-full max-w-205 gap-4 flex-col h-screen'>
       <div className='border-b border-col pb-4'>
             <h1 className='blue-gradient-text text-large'>Animatex-Pro CLI</h1>
             <p>
                The Animatex-Pro CLI is a command line tool that enables your to easily add animatex components
                and their dependencies into your project with the help of your terminal. The content of this page gives a clear outline 
                of the different commands used in the command line and their functions.
             </p>
       </div>

       <div>
            <h1 className='text-xl md:text-xl blue-gradient-text'>Installing the CLI.</h1>
            <blockquote>Before using the CLI tool we need to add it into your project.</blockquote>
            <div className=' border-l border-col'>
                <div className='w-full rounded-md flex mt-6 flex-col gap-2 relative pl-5'>
                <Bullet/>
                <span className='mt-1'>Install with the following command.</span>
                <CommandBlock key='init7y' item='animatex-pro@latest' type='n'/>
            </div>

            </div>
       </div>

       <div>
            <h1 className='text-xl md:text-xl blue-gradient-text'>List of Commands.</h1>
            <blockquote>Here we have a list of commands carried out by the command line and their functions.</blockquote>

            {/* commands */}
             <div className='w-full overflow-x-auto'>
                <table className='w-full text-center min-w-150'>
                    <thead>
                        <tr className='font-bold'>
                            <td className='p-2 border border-col'>Command</td>
                            <td className='border border-col'>Function</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            commandList.map((command, i) => 
                                <tr key={i}>
                                    <td className='p-2 border border-col'>{command.command}</td>
                                    <td className='border border-col'>{command.description}</td>
                                </tr>
                            )
                    }
                    </tbody>
                </table>
            </div>
       </div>

        <div className='flex items-center border-t border-col mt-auto gap-3 justify-between py-4 md:py-8'>
            <p>&copy; 2025</p>
            <p>Built with ❤ by <KeyLink text='Newton' link='https://www.newtonraul.me/'/></p>
        </div>

    </div>
  )
}

export default AnimatexCliPage