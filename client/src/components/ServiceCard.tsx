import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tools: string[];
}

export default function ServiceCard({ icon: Icon, title, description, tools }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="h-full"
    >
      <Card className="h-full transition-all duration-300 hover:shadow-xl hover:border-primary/50 group">
        <CardHeader>
          <motion.div
            className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon className="w-6 h-6 text-primary" />
          </motion.div>
          <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
          <CardDescription className="leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <Badge
                key={tool}
                variant="secondary"
                className="text-xs font-normal transition-all duration-200 hover:scale-105 hover:bg-primary/20"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}