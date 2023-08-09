import Link from 'next/link'
import React from 'react'

interface NavlinkProps {
    target: string;
}

const Navlink: React.FC<NavlinkProps> = ({target}) => {
  return (
    <Link href={`#${target.toLowerCase()}`} className={`dark:text-gray lg:text-xl font-medium text-center hover:text-shadow-sm hover:text-gray dark:hover:text-white`}>{target}</Link>
  )
}

export default Navlink
