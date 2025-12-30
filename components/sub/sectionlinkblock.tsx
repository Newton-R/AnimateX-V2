import React from 'react'
import Link from 'next/link'


interface blockprop{
    link: string,
    preview: React.ReactNode
}

export const SectionLinkBlock = ({link, preview}:blockprop) => {
  return (
    <div className={('p-[10px] cursor-pointer hover:border-blue-400 mt-2 w-full bg-[var(--secondary)] transition-all duration-300 mx-auto border border-col')}>
        <Link href={`/components/sections${link}`} className='min-h-[400px] md:h-[380px] flex-center overflow-hidden justify-center relative gradient p-2 bg-[var(--bg)] border border-col w-full'>
                
                {preview}

                {/* {
                    current === "Preview" &&
                    <button onClick={Reload} className='p-2 cursor-pointer bg-[var(--bg)] rounded-md absolute top-2 right-2'><RefreshCcw/></button>
                }
                {current === "Preview" ? 
                <Suspense fallback={<ComponentLoader/>}>
                    {component}
                </Suspense> : 
                <div className='w-full h-full'>
                    <CodeBlock language="tsx" code={code}/>
                </div>} */}
        </Link>
    </div>
  )
}
