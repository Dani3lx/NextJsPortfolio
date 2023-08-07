'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion"

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
        <motion.div
            className='md:max-w-[500px] pb-5 relative'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
        >
            <Link href={link} target='_blank'>
                <Image src={img} alt={name} className='w-full rounded-xl' />
                {active && (
                    <motion.div
                        className='absolute w-full bg-[rgba(0,0,0,0.7)]  items-center transform translate-y-[-100%] flex  rounded-b-xl'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}>
                            <h1 className='text-white text-lg px-5 py-3'>{name}</h1>
                    </motion.div>
    )
}
            </Link >
        </motion.div >
    );
};

export default Project;
