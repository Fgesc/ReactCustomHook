import styles from './input.module.css';

type InputProps = {
    id: string;
    value: string ;
    onChange: (value: string) => void; 
    className?: string;
    maxLength?: number;
    label?: string;
};

export const Input = ({ id, value, onChange, className, maxLength }: InputProps) => {
    return (
            <>
                <input
                    id={id}
                    value={value}
                    onChange={(e) => onChange(e.target.value)} 
                    className={`${styles.input}  ${className }`}
                    maxLength={maxLength}
                    type="text"

                />
            </>
    );
};
