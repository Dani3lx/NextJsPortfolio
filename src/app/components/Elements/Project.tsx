'use client'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion"

interface ProjectProps {
    img: any;
    name: string;
    link: string;
    description: string;
    techs: Array<string>;
}

const Project: React.FC<ProjectProps> = ({ img, name, link, description, techs }) => {

    return (
        <motion.div
            className='md:max-w-[500px] pb-5 relative h-fit'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
        >
            <Link href={link} target='_blank'>
                <Image src={img} alt={name} className='w-full rounded-xl  min-h-[300px] overflow-hidden object-cover' />

                <div
                    className='absolute w-full bg-gray-gradient items-center transform translate-y-[-100%] flex  rounded-b-xl'>
                    <div className='px-5 py-3'>
                        <h2 className='text-white text-md sm:text-lg'>{name}</h2>
                        <p className='text-gray text-xs sm:text-sm'>{description}</p>
                        <div className='flex gap-2 flex-wrap mt-2'>
                            {techs &&
                                techs.map((tech, index) => (
                                    <p className='text-xs text-white bg-gray-600 rounded-full px-3 py-1' key={index}>
                                        {tech}
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>
            </Link >
        </motion.div >
    );
};

export default Project;
