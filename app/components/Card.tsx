import React from 'react';

type CardProps = {
    children: React.ReactNode;
    className?: string;
};

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
    <div
        className={ `outline-solid outline-1 shadow-blue-400 rounded-lg shadow-md p-1 transition-all duration-300 
               hover:bg-blue-400/50 hover:scale-105 ${className}`}
    >
        {children}
    </div>
);

export default Card;