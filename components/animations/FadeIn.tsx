"use client";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

export default function FadeIn({
    children,
    delay = 0,
    x = 20,
}: {
    children: ReactNode;
    delay?: number;
    x?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay, ease:"easeOut" }}
        >
            {children}
        </motion.div>
    )
}