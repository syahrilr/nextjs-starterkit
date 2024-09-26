import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  container?: string;
};
const BackdropGradient = ({ children, className, container }: Props) => {
  return (
    <div className={cn("relative flex w-full flex-col", container)}>
      <div
        className={cn("radial-blur absolute mx-10 rounded-[50%] bg-gradient-to-br from-primary to-primary-foreground opacity-75 blur-2xl filter transition-transform", className)}
      />
      {children}
    </div>
  );
};
export default BackdropGradient;
