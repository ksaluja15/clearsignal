import React from 'react';

type CardProps = {
    children: React.ReactNode;
    className?: string;
};

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
    <div
        className={ `rounded-lg shadow-md p-4 transition-all duration-300 
               hover:bg-blue-400/50 hover:scale-105 ${className}` }
        style={{ backgroundColor: '#151819' }}
    >
        {children}
    </div>
);

export default Card;