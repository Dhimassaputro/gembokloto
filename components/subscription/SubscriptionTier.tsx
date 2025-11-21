import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface SubscriptionTierProps {
  icon: React.ReactNode;
  name: string;
  price: string;
  tagline: string;
  features: string[];
  button: string;
  highlighted?: boolean;
}

export function SubscriptionTier({
  icon,
  name,
  price,
  tagline,
  features,
  button,
  highlighted = false,
}: SubscriptionTierProps) {
  return (
    <Card
      className={`flex flex-col justify-between h-full text-left p-6 ${
        highlighted ? "border-primary ring-2 ring-primary" : ""
      }`}
    >
      <div>
        <div className="flex items-center gap-2 text-muted-foreground">
          {icon}
          <span className="text-sm font-medium">{name}</span>
        </div>
        <div className="mt-3 text-3xl font-semibold text-foreground">{price}</div>
        <p className="mt-2 text-sm text-muted-foreground">{tagline}</p>
        <ul className="mt-4 space-y-2">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        className={`mt-6 w-full rounded-xl px-4 py-2 text-sm font-medium transition ${
          highlighted
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "border border-border hover:bg-secondary"
        }`}
      >
        {button}
      </button>
    </Card>
  );
}
