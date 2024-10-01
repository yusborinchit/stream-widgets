import { cn } from "~/lib/utils";

interface Props {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
}

export default function MainContainer({
  children,
  className,
  as,
}: Readonly<Props>) {
  const Component = as ?? "main";

  return (
    <Component className={cn("mx-auto max-w-screen-lg px-4", className)}>
      {children}
    </Component>
  );
}
