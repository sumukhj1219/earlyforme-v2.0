
import React from "react";
import { Scroll, ScrollText } from "lucide-react";
import { motion } from "motion/react"

export function TitleChecker({ title }: { title: string }): React.ReactNode {
  if (title.startsWith("Create")) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1], 
        }}
        className="flex items-center gap-2"
      >
        <ScrollText
          stroke="white"
          className="w-6 h-6 p-0.5 bg-gradient-to-br from-primary  to-primary/50 rounded"
        />
        <span>Create Waitlist</span>
      </motion.div>

    );
  }

  return <span>{title}</span>;
}
