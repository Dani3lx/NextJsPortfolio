import React from 'react';
import { Tooltip } from 'react-tooltip'

interface SkillIconProps {
    icon: React.ReactNode;
    name: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ icon, name }) => {
    return (
        <>
            <Tooltip id="tooltip" place='bottom' variant='light' />
            <div className='text-black dark:text-white' data-tooltip-id="tooltip"
                data-tooltip-content={name}>
                {icon}
            </div>
        </>
    );
};

export default SkillIcon;