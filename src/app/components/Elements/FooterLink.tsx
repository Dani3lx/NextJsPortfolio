import React from 'react';
import { Tooltip } from 'react-tooltip'
import Link from 'next/link';

interface FooterLinkProps {
    icon: string;
    name: string;
    link: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ icon, name, link }) => {
    return (
        <>
            <Tooltip id="tooltip" place='bottom' variant='light' />
            <Link href={link} target='_blank'>
                <i className={`uil uil-${icon} text-gray text-2xl hover:text-white duration-100`} data-tooltip-id="tooltip"
                    data-tooltip-content={name}>
                </i>
            </Link>
        </>
    );
};

export default FooterLink;