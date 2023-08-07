'use client'
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

interface PageWrapperProps {
  children: React.ReactNode;
}

const pageWrapper: React.FC<PageWrapperProps> = ({ children }) => {

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.1, delay: 0.25 }}>
        {children}
      </motion.div>
    </AnimatePresence>

  )
}

export default pageWrapper
