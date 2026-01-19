"use client";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { motion as m, AnimatePresence } from "motion/react";
import { ReactNode, useEffect, useState } from "react";

// Interface for individual tab items
interface TAB {
    title: string,
    component: ReactNode
}

// Interface for the main navigation component props
interface tabNavigation{
    TABS: TAB[],
    contentMenuStyle?: string,
    nubStyle?: string
}

// Tabbed nav with directional animations
export const TippedNavigation = ({TABS, contentMenuStyle, nubStyle}:tabNavigation) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<"l" | "r" | null>(null);
  const MyTabs = TABS.map((n, idx) => ({ ...n, id: idx + 1 }));
  
  const handleselected = (val: number | null) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "l" : "r");
    } else if (val === null) {
      setDir(null);
    }
    setSelected(val);
  };

  return (
    <div onMouseLeave={() => handleselected(null)} className="flex h-fit gap-2 relative">
      {MyTabs.map((tab) => (
        <Tab key={tab.id} handleselected={handleselected} id={tab.id} selected={selected}>
          {tab.title}
        </Tab>
      ))}
      <AnimatePresence>
        {selected && <Content tabs={MyTabs} nubStyle={nubStyle} contentStyle={contentMenuStyle} selected={selected} dir={dir} />}
      </AnimatePresence>
    </div>
  );
};

// Interface for individual tab button props
interface tab {
  children: ReactNode;
  handleselected: (val: number | null) => void;
  id: number;
  selected: number | null;
}

// Tab button with chevron
const Tab = ({ children, handleselected, id, selected }: tab) => {
  return (
    <m.button
      whileHover={"hovered"}
      id={`tab-${id}`}
      onClick={() => handleselected(id)}
      onMouseEnter={() => handleselected(id)}
      className={`flex rounded-full transition-colors cursor-pointer p-1.5 px-3 text-sm
            ${selected === id ? "bg-neutral-200 dark:bg-neutral-800" : ""}
        `}
    >
      <m.span className="flex gap-1 items-center" variants={{"hovered": {opacity: 1}}} initial={{opacity: 0.9}}>
        {children}
        <ChevronDown
          size={16}
          className={`transition-transform ${
            selected === id ? "rotate-180" : ""
          }`}
        />
        </m.span>
      
    </m.button>
  );
};

// Spacing between tab and dropdown
const Bridge = () => {
  return <div className="absolute h-[25px] -top-[24px] left-0 right-0" />;
};

// Pointer aligned with selected tab
const Nub = ({selected, nubStyle}:{selected: number | null, nubStyle?:string}) => {
    const [left, setLeft] = useState(0)
   
    const moveNub = () => {
        if(selected){
            const selectedTab = document.getElementById(`tab-${selected}`)
            const contentBlock = document.getElementById(`overlay-content`)
            if(!contentBlock || !selectedTab) return;

            const tabRect = selectedTab.getBoundingClientRect()
            const {left: contentLeft} = contentBlock.getBoundingClientRect()
            const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft

            setLeft(tabCenter)
        }
    }
    
    useEffect(() => { moveNub() }, [selected])

  return (
      <m.span
      animate={{ left }}
      transition={{
          duration: 0.25,
          ease: "easeInOut"
      }}
      style={{ clipPath: "polygon(0 0,100% 0,50% 50%,0% 100%)" }}
      className={cn("w-4 h-4 rounded-tl absolute dark:bg-neutral-900 dark:border-neutral-800 bg-gray-200 border border-gray-300 left-1/2 rotate-45 top-0 -translate-y-1/2",
        nubStyle
      )} />
  )
  
};

// Dropdown with directional animations
const Content = ({
  selected,
  dir,
  tabs,
  contentStyle,
  nubStyle
}: {
  selected: number | null;
  dir: "l" | "r" | null;
  contentStyle?:string,
  nubStyle?:string,
  tabs: {title: string, component: ReactNode, id:number}[]
}) => {
  return (
    <m.div
      initial={{
        opacity: 0,
        y: 5,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 5,
      }}
      id="overlay-content"
      className={cn("p-4 w-96 absolute left-0 top-[calc(100%+24px)] dark:bg-neutral-900 dark:border-neutral-800 bg-gray-200 border border-gray-300 rounded-lg",
        contentStyle
      )}
    >
      <Bridge />
      <Nub selected={selected} nubStyle={nubStyle}/>
      <AnimatePresence>
        {tabs.map((tab) => {
          return (
            <div key={tab.id} className="overflow-hidden">
              {selected === tab.id && (
                <m.div
                  initial={{
                    opacity: 0,
                    x: dir === "l" ? -100 : dir === "r" ? 100 : 0,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.24,
                    ease: "easeInOut",
                  }}
                  exit={{
                    opacity: 0,
                    x: dir === "l" ? -100 : dir === "r" ? 100 : 0,
                  }}
                >
                  {tab.component}
                </m.div>
              )}
            </div>
          );
        })}
      </AnimatePresence>
    </m.div>
  );
};


export const Codets = `
"use client";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { motion as m, AnimatePresence } from "motion/react";
import { ReactNode, useEffect, useState } from "react";

// Interface for individual tab items
interface TAB {
    title: string,
    component: ReactNode
}

// Interface for the main navigation component props
interface tabNavigation{
    TABS: TAB[],
    contentMenuStyle?: string,
    nubStyle?: string
}

// Tabbed nav with directional animations
export const TippedNavigation = ({TABS, contentMenuStyle, nubStyle}:tabNavigation) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<"l" | "r" | null>(null);
  const MyTabs = TABS.map((n, idx) => ({ ...n, id: idx + 1 }));
  
  const handleselected = (val: number | null) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "l" : "r");
    } else if (val === null) {
      setDir(null);
    }
    setSelected(val);
  };

  return (
    <div onMouseLeave={() => handleselected(null)} className="flex h-fit gap-2 relative">
      {MyTabs.map((tab) => (
        <Tab key={tab.id} handleselected={handleselected} id={tab.id} selected={selected}>
          {tab.title}
        </Tab>
      ))}
      <AnimatePresence>
        {selected && <Content tabs={MyTabs} nubStyle={nubStyle} contentStyle={contentMenuStyle} selected={selected} dir={dir} />}
      </AnimatePresence>
    </div>
  );
};

// Interface for individual tab button props
interface tab {
  children: ReactNode;
  handleselected: (val: number | null) => void;
  id: number;
  selected: number | null;
}

// Tab button with chevron
const Tab = ({ children, handleselected, id, selected }: tab) => {
  return (
    <m.button
      whileHover={"hovered"}
      id={\`tab-$\{id}\`}
      onClick={() => handleselected(id)}
      onMouseEnter={() => handleselected(id)}
      className={\`flex rounded-full transition-colors cursor-pointer p-1.5 px-3 text-sm
            $\{selected === id ? "bg-neutral-200 dark:bg-neutral-800" : ""}
        \`}
    >
      <m.span className="flex gap-1 items-center" variants={{"hovered": {opacity: 1}}} initial={{opacity: 0.9}}>
        {children}
        <ChevronDown
          size={16}
          className={\`transition-transform $\{
            selected === id ? "rotate-180" : ""
          }\`}
        />
        </m.span>
      
    </m.button>
  );
};

// Spacing between tab and dropdown
const Bridge = () => {
  return <div className="absolute h-[25px] -top-[24px] left-0 right-0" />;
};

// Pointer aligned with selected tab
const Nub = ({selected, nubStyle}:{selected: number | null, nubStyle?:string}) => {
    const [left, setLeft] = useState(0)
   
    const moveNub = () => {
        if(selected){
            const selectedTab = document.getElementById(\`tab-$\{selected}\`)
            const contentBlock = document.getElementById(\`overlay-content\`)
            if(!contentBlock || !selectedTab) return;

            const tabRect = selectedTab.getBoundingClientRect()
            const {left: contentLeft} = contentBlock.getBoundingClientRect()
            const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft

            setLeft(tabCenter)
        }
    }
    
    useEffect(() => { moveNub() }, [selected])

  return (
      <m.span
      animate={{ left }}
      transition={{
          duration: 0.25,
          ease: "easeInOut"
      }}
      style={{ clipPath: "polygon(0 0,100% 0,50% 50%,0% 100%)" }}
      className={cn("w-4 h-4 rounded-tl absolute dark:bg-neutral-900 dark:border-neutral-800 bg-gray-200 border border-gray-300 left-1/2 rotate-45 top-0 -translate-y-1/2",
        nubStyle
      )} />
  )
  
};

// Dropdown with directional animations
const Content = ({
  selected,
  dir,
  tabs,
  contentStyle,
  nubStyle
}: {
  selected: number | null;
  dir: "l" | "r" | null;
  contentStyle?:string,
  nubStyle?:string,
  tabs: {title: string, component: ReactNode, id:number}[]
}) => {
  return (
    <m.div
      initial={{
        opacity: 0,
        y: 5,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 5,
      }}
      id="overlay-content"
      className={cn("p-4 w-96 absolute left-0 top-[calc(100%+24px)] dark:bg-neutral-900 dark:border-neutral-800 bg-gray-200 border border-gray-300 rounded-lg",
        contentStyle
      )}
    >
      <Bridge />
      <Nub selected={selected} nubStyle={nubStyle}/>
      <AnimatePresence>
        {tabs.map((tab) => {
          return (
            <div key={tab.id} className="overflow-hidden">
              {selected === tab.id && (
                <m.div
                  initial={{
                    opacity: 0,
                    x: dir === "l" ? -100 : dir === "r" ? 100 : 0,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.24,
                    ease: "easeInOut",
                  }}
                  exit={{
                    opacity: 0,
                    x: dir === "l" ? -100 : dir === "r" ? 100 : 0,
                  }}
                >
                  {tab.component}
                </m.div>
              )}
            </div>
          );
        })}
      </AnimatePresence>
    </m.div>
  );
};

`

export const Codejs = `
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { motion as m, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";


// Tabbed nav with directional animations
export const TippedNavigation = ({TABS, contentMenuStyle, nubStyle}) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<"l" | "r" | null>(null);
  const MyTabs = TABS.map((n, idx) => ({ ...n, id: idx + 1 }));
  
  const handleselected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "l" : "r");
    } else if (val === null) {
      setDir(null);
    }
    setSelected(val);
  };

  return (
    <div onMouseLeave={() => handleselected(null)} className="flex h-fit gap-2 relative">
      {MyTabs.map((tab) => (
        <Tab key={tab.id} handleselected={handleselected} id={tab.id} selected={selected}>
          {tab.title}
        </Tab>
      ))}
      <AnimatePresence>
        {selected && <Content tabs={MyTabs} nubStyle={nubStyle} contentStyle={contentMenuStyle} selected={selected} dir={dir} />}
      </AnimatePresence>
    </div>
  );
};


// Tab button with chevron
const Tab = ({ children, handleselected, id, selected }) => {
  return (
    <m.button
      whileHover={"hovered"}
      id={\`tab-$\{id}\`}
      onClick={() => handleselected(id)}
      onMouseEnter={() => handleselected(id)}
      className={\`flex rounded-full transition-colors cursor-pointer p-1.5 px-3 text-sm
            $\{selected === id ? "bg-neutral-200 dark:bg-neutral-800" : ""}
        \`}
    >
      <m.span className="flex gap-1 items-center" variants={{"hovered": {opacity: 1}}} initial={{opacity: 0.9}}>
        {children}
        <ChevronDown
          size={16}
          className={\`transition-transform $\{
            selected === id ? "rotate-180" : ""
          }\`}
        />
        </m.span>
      
    </m.button>
  );
};

// Spacing between tab and dropdown
const Bridge = () => {
  return <div className="absolute h-[25px] -top-[24px] left-0 right-0" />;
};

// Pointer aligned with selected tab
const Nub = ({selected, nubStyle}) => {
    const [left, setLeft] = useState(0)
   
    const moveNub = () => {
        if(selected){
            const selectedTab = document.getElementById(\`tab-$\{selected}\`)
            const contentBlock = document.getElementById(\`overlay-content\`)
            if(!contentBlock || !selectedTab) return;

            const tabRect = selectedTab.getBoundingClientRect()
            const {left: contentLeft} = contentBlock.getBoundingClientRect()
            const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft

            setLeft(tabCenter)
        }
    }
    
    useEffect(() => { moveNub() }, [selected])

  return (
      <m.span
      animate={{ left }}
      transition={{
          duration: 0.25,
          ease: "easeInOut"
      }}
      style={{ clipPath: "polygon(0 0,100% 0,50% 50%,0% 100%)" }}
      className={cn("w-4 h-4 rounded-tl absolute dark:bg-neutral-900 dark:border-neutral-800 bg-gray-200 border border-gray-300 left-1/2 rotate-45 top-0 -translate-y-1/2",
        nubStyle
      )} />
  )
  
};

// Dropdown with directional animations
const Content = ({
  selected,
  dir,
  tabs,
  contentStyle,
  nubStyle
}) => {
  return (
    <m.div
      initial={{
        opacity: 0,
        y: 5,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 5,
      }}
      id="overlay-content"
      className={cn("p-4 w-96 absolute left-0 top-[calc(100%+24px)] dark:bg-neutral-900 dark:border-neutral-800 bg-gray-200 border border-gray-300 rounded-lg",
        contentStyle
      )}
    >
      <Bridge />
      <Nub selected={selected} nubStyle={nubStyle}/>
      <AnimatePresence>
        {tabs.map((tab) => {
          return (
            <div key={tab.id} className="overflow-hidden">
              {selected === tab.id && (
                <m.div
                  initial={{
                    opacity: 0,
                    x: dir === "l" ? -100 : dir === "r" ? 100 : 0,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.24,
                    ease: "easeInOut",
                  }}
                  exit={{
                    opacity: 0,
                    x: dir === "l" ? -100 : dir === "r" ? 100 : 0,
                  }}
                >
                  {tab.component}
                </m.div>
              )}
            </div>
          );
        })}
      </AnimatePresence>
    </m.div>
  );
};

`


export const usecasecode = `
import { TippedNavigation } from '@/components/ui/navs/tipped'
export const page = () => {
   const Tabs = [
    {
      title: "Products",
      component: <Products/>
    },
     {
      title: "Payment",
      component: <Payment/>
    },
     {
      title: "About",
      component: <About/>
    }
  ]
  return (
    <TippedNavigation TABS={Tabs}/>
  )
}
`