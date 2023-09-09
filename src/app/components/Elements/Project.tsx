'use client'
import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
    img: any;
    name: string;
    link: string;
    description: string;
    techs: Array<string>;
}

const Project: React.FC<ProjectProps> = ({ img, name, link, description, techs }) => {

    return (
        <div
            className='md:max-w-[500px] pb-5 relative h-fit w-full'
        >
            <Link href={link} target='_blank'>
                <Image src={img} alt={name} loading='lazy' className='w-full rounded-xl  min-h-[300px] overflow-hidden object-cover hover:opacity-80' />

                <div
                    className='absolute w-full bg-gray-gradient items-center transform translate-y-[-100%] flex  rounded-b-xl'>
                    <div className='px-5 py-3'>
                        <h2 className='text-white text-md sm:text-lg'>{name}</h2>
                        <p className='text-gray text-xs sm:text-sm'>{description}</p>
                        <div className='flex gap-2 flex-wrap mt-2'>
                            {techs &&
                                techs.map((tech, index) => (
                                    <p className='text-xs text-white rounded-full bg-light-gray px-3 py-1' key={index}>
                                        {tech}
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>
            </Link >
        </div >
    );
};

export default Project;
