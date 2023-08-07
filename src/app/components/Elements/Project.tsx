'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
    img: any;
    name: string;
    link: string;
}

const Project: React.FC<ProjectProps> = ({ img, name, link }) => {
    const [active, setActive] = useState(false);

    const handleMouseEnter = () => {
        setActive(true);
    };

    const handleMouseLeave = () => {
        setActive(false);
    };

    return (
        <div
            className='md:max-w-[600px] pb-5 relative'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link href={link} target='_blank'>
                <Image src={img} alt={name} className='w-full rounded-xl' />
                {active && (
                    <div className='absolute w-full bg-[rgba(0,0,0,0.7)]  items-center transform translate-y-[-100%] flex  rounded-b-xl'>
                        <h1 className='text-white text-lg px-5 py-3'>{name}</h1>
                    </div>
                )}
            </Link>
        </div>
    );
};

export default Project;
