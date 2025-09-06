import type { ReactNode } from 'react';
import styles from './button.module.css';


type ButtonProps = {
    onClick?: () => void; 
    children?: ReactNode;
    type?: 'button' | 'submit';
    className?: string;
};

export const Button = ({children, onClick, type, className}: ButtonProps) => {
    return (
        <button type={type} onClick={onClick}  className={`${styles.button}  ${className}`.trim()}>{children}</button>
    );
};