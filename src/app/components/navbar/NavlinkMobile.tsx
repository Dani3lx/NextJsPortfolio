import React from 'react'
import Link from 'next/link';

interface NavlinkProps {
    target: string;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavlinkMobile: React.FC<NavlinkProps> = ({ target, setIsActive }) => {
    return (
        <Link href={`#${target.toLowerCase()}`} onClick={() => setIsActive(false)} className='text-white p-8 text-center'>
            <h1 className='hover:text-shadow-sm'>{target}</h1>
        </Link>
    )
}

export default NavlinkMobile
