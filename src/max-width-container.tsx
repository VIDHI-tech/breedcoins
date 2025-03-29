import { ReactNode } from "react";

interface MaxWidthContainerProps {
  children: ReactNode;
}

export default function MaxWidthContainer({
  children,
}: MaxWidthContainerProps) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-[2400px] w-full overflow-x-auto">{children}</div>
    </div>
  );
}
