import Link from 'next/link'
import React from 'react'

interface NavlinkProps {
    target: string;
}

const Navlink: React.FC<NavlinkProps> = ({target}) => {
  return (
    <Link href={`#${target.toLowerCase()}`} className={`text-gray text-l lg:text-xl font-medium text-center hover:text-shadow-sm hover:text-white`}>{target}</Link>
  )
}

export default Navlink
