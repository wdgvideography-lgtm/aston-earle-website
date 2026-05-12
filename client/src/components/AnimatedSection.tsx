import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export default function AnimatedSection({ children, className = "", delay = 0, direction = "up" }: Props) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const animClass = direction === "left" ? "fade-left" : direction === "right" ? "fade-right" : "fade-up";
  return (
    <div
      ref={ref}
      className={`${animClass} ${isVisible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
