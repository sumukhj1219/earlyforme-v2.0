
import React from "react";
import { BarChart3, Building2Icon, FileEdit, ListTreeIcon, Scroll, ScrollText } from "lucide-react";
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

  else if (title.startsWith("Waitlists")) {
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
        <ListTreeIcon
          stroke="white"
          className="w-6 h-6 p-0.5 bg-gradient-to-br from-primary  to-primary/50 rounded"
        />
        <span>Waitlists</span>
      </motion.div>
    );
  }

  else if (title.startsWith("Edit")) {
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
        <FileEdit
          stroke="white"
          className="w-6 h-6 p-0.5 bg-gradient-to-br from-primary  to-primary/50 rounded"
        />
        <span>Edit Waitlist</span>
      </motion.div>
    )
  }

   else if (title.startsWith("Assets")) {
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
        <Building2Icon
          stroke="white"
          className="w-6 h-6 p-0.5 bg-gradient-to-br from-primary  to-primary/50 rounded"
        />
        <span>Assets</span>
      </motion.div>
    )
  }

  else if (title.startsWith("Analyze")) {
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
        <BarChart3
          stroke="white"
          className="w-6 h-6 p-0.5 bg-gradient-to-br from-primary  to-primary/50 rounded"
        />
        <span>Analytics</span>
      </motion.div>
    )
  }

  return <span>{title}</span>;
}
