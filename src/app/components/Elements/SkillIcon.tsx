import React from 'react';
import Image from 'next/image';
import { Tooltip } from 'react-tooltip'

interface SkillIconProps {
    icon: any;
    name: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ icon, name }) => {
    return (
        <>
            <Tooltip id="tooltip" place='bottom' variant='light'/>
            <Image
                src={icon}
                alt={name}
                data-tooltip-id="tooltip" 
                data-tooltip-content={name}
            />
        </>
    );
};

export default SkillIcon;