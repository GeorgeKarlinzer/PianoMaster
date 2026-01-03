import { forwardRef, useImperativeHandle } from "react";
import { useEffect, useState } from 'react';
import './TimeBar.css';

export type TimeBarRef = {
    startAnimation: () => void;
}

export default function TimeBar({stop, timeOutCallback, ref}: {stop: boolean, timeOutCallback: () => void, ref: React.ForwardedRef<TimeBarRef>})
{
    const [animationKey, setAnimationKey] = useState(0);

    useImperativeHandle(ref, () => ({
        startAnimation(){
            setAnimationKey(prev => prev + 1);
        }
    }));

    return (
        <div className="time-bar">
            <div 
                key={animationKey}
                onAnimationEnd={timeOutCallback}
                className={`time-bar-inner ${stop ? 'paused' : ''}`}
            />
        </div>
    )
}