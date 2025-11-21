import { Card } from "@/components/ui/card";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export function Feature({ icon, title, desc }: FeatureProps) {
  return (
    <Card className="h-full p-5">
      <div className="flex items-start gap-3">
        <div className="rounded-xl border border-border w-10 h-10 flex items-center justify-center bg-secondary">
          {icon}
        </div>
        <div>
          <div className="font-medium text-foreground">{title}</div>
          <p className="text-sm text-muted-foreground mt-1">{desc}</p>
        </div>
      </div>
    </Card>
  );
}
