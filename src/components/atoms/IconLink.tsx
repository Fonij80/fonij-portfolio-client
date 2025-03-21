import React from 'react';
import { ReactNode } from 'react';

interface IconLinkProps {
    href: string;
    icon: ReactNode;
}

export const IconLink = ({ href, icon }: IconLinkProps) => {
    return (
        <a
            rel="noreferrer noopener"
            href={href}
            target="_blank"
            className="opacity-60 hover:opacity-100"
        >
            {icon && (
                <span>
                    {React.cloneElement(icon as React.ReactElement, {
                        className: "h-6 w-6"
                    })}
                </span>
            )}
        </a>
    );
};

export default IconLink;
