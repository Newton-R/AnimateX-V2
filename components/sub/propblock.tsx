

export const PropBlock = ({prop}:{prop:string}) => {
  return (
    <div className='p-1 px-4 relative bg-[var(--secondary)] w-fit border border-col'>
        <div className="absolute w-2 h-2 bg-[var(--border)] left-0 -translate-y-1/2 -translate-x-1/2 top-0"/>
        <div className="absolute w-2 h-2 bg-[var(--border)] left-0 translate-y-1/2 -translate-x-1/2 bottom-0"/>
        <div className="absolute w-2 h-2 bg-[var(--border)] right-0 -translate-y-1/2 translate-x-1/2 top-0"/>
        <div className="absolute w-2 h-2 bg-[var(--border)] right-0 translate-y-1/2 translate-x-1/2 bottom-0"/>

        {prop}
    </div>
  )
}
