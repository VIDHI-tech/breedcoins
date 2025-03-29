import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-[21px] w-9 shrink-0 cursor-pointer items-center rounded-[0.40rem] border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-neutral-900 data-[state=unchecked]:bg-neutral-200 data-[state=checked]:bg-primary-300 data-[state=unchecked]:bg-black-400 dark:focus-visible:ring-neutral-300 dark:focus-visible:ring-offset-neutral-950 dark:data-[state=checked]:bg-neutral-50 dark:data-[state=unchecked]:bg-neutral-800",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-3.5 w-3.5 rounded bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=checked]:bg-primary-100 data-[state=unchecked]:bg-gray-scale-300 data-[state=unchecked]:translate-x-0 dark:bg-neutral-950"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
