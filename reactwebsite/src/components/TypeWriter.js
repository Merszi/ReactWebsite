import React, {useState, useEffect, useRef} from 'react';

const TypeWriter = ({text}) => {
    const index = useRef(0);
    const [currentText, setCurrentText] = useState ('');
    useEffect(() => {
        index.current = 0;
        setCurrentText('');
    }, [text]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setCurrentText((value) => value + text.charAt(index.current));
            index.current += 1;
        }, 40);
        return () => {
            clearTimeout(timeoutId);
        }
    }, [currentText, text]);

    return (
        <p>{currentText}</p>
    );
}

export default TypeWriter;