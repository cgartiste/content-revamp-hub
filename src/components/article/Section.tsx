import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  icon: string;
  title: string;
  children: ReactNode;
  iconColor?: "green" | "blue" | "gold" | "purple" | "red";
}

const iconColorClasses = {
  green: "bg-green/15 border-green/30 text-green",
  blue: "bg-accent/15 border-accent/30 text-accent",
  gold: "bg-primary/15 border-primary/30 text-primary",
  purple: "bg-purple-400/15 border-purple-400/30 text-purple-400",
  red: "bg-red/15 border-red/30 text-red",
};

const Section = ({ id, icon, title, children, iconColor = "green" }: SectionProps) => {
  return (
    <motion.section
      id={id}
      className="bg-card border border-border rounded-xl p-6 md:p-8 mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${iconColorClasses[iconColor]}`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <h2 className="font-display text-xl md:text-2xl font-bold m-0">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
};

export default Section;
