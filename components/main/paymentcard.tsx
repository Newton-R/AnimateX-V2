import { cn } from "@/lib/utils";
import { space } from "@/utils/font";
import { Check } from "lucide-react";

export const PaymentCard = ({ type, onClick, isloading }: { type?: string, onClick?: () => void, isloading: boolean }) => {
  const data =
    type === "free"
      ? {
          price: "0",
          duration: "Lifetime",
          status: "Free Forever",
          plan: "Basic",
          description: "Lifetime access to all free animatex components",
          features: ["Access to all components"],
        }
      : type === "month"
      ? {
          price: "5.99",
          duration: "Month",
          status: "Monthly Subscription",
          plan: "Professional",
          description:
            "Get the professional bundle with access to all animated sections, templates and components for an entire month.",
          features: [
            "Access to all components",
            "Access to all sections",
            "Notified on new components",
            "Discord channel access",
          ],
        }
      : {
          price: "59.99",
          duration: "Year",
          status: "Yearly Subscription",
          plan: "Legendary",
          description:
            "Just cross the bar and get pro for a whole year. Enjoy pre built components, sections and templates.",
          features: [
            "Access to all components",
            "Access to all sections",
            "Notified on new components",
            "Discord channel access",
          ],
        };
  return (
    <div className="w-[calc(100%-20px)] md:w-80 h-90 mt-4 flex flex-col gap-2">
      <div className="w-full bg-linear-120 from-blue-200 from-20% via-(--primary) to-(--primary) flex flex-col justify-center z-20 p-4 rounded-xl text-black">
        <h2
          className={`${space.className} flex gap-2 items-center text-2xl font-bold`}
        >
          {data.plan}
        </h2>
        <div className="mt-2">
          <span className="text-[16px]">
            <span className="text-3xl">${data.price}</span>/ {data.duration}
          </span>
          <p className="text-xs text-neutral-600">{data.status}</p>
        </div>
        <button onClick={onClick} disabled={isloading}
        className={cn("w-full cursor-pointer hover:bg-neutral-900 mt-2 relative bg-black text-white border-2 border-neutral-900 rounded-full p-2 flex items-center justify-center",
          isloading ? "opacity-50" : "opacity-100"
        )}>
          Select {data.plan}
        </button>
      </div>
      <div className="p-2 text-[14px] text-neutral-600 dark:text-neutral-400">
        <p>{data.description}</p>
        <div className="mt-2 flex flex-col gap-2">
          This {data.plan} plan includes
          <ul className="flex flex-col gap-1">
            {data.features.map((feat, i) => (
              <li key={i} className="flex gap-2 items-center">
                <Check size={16} />
                {feat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
