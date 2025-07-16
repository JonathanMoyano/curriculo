// src/components/background/Aurora.jsx

import { cn } from "@/lib/utils";

export const AuroraBackground = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "fixed top-0 left-0 w-full h-full -z-10 overflow-hidden", // Garante que ocupe a tela toda e fique atrás
        className
      )}
      {...props}
    >
      <div
        className={cn(
          `
          [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
          [background-image:var(--aurora)]
          [background-size:200%,_100%]
          [background-attachment:fixed]
          filter blur-[10px]
          absolute -inset-[10px] opacity-50 animate-aurora`
        )}
      ></div>
    </div>
  );
};