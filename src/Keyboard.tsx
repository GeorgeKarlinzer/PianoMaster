import React from 'react';
import './Keyboard.css';

export default function Keyboard({onKeyPressed, pressedKey, correctKey} : {onKeyPressed: (pressedKey: number) => void, pressedKey: number | null, correctKey: number | null}) {

    const getCorrectKeyClass = (index: number) => {
        if(index === correctKey) {
            return ' correct-key';
        }
        else if(index === pressedKey) {
            return ' incorrect-key';
        }
        return '';
    }

    const whiteKey = (index: number, width: string) => {
        let classes = `white-key-${width}` + getCorrectKeyClass(index);
        
        return (
            <div className={classes} onClick={() => onKeyPressed(index)}/>
        )
    }

    const blackKey = (index: number, left: string) => {
        let classes = 'black-key' + getCorrectKeyClass(index);
        return (
            <div className={classes} style={{ left: left }} onClick={() => onKeyPressed(index)} />
        )
    }

    const octaveWhite = (offset: number) => {
        return (
            <>
                {whiteKey(offset, '23')}
                {whiteKey(offset + 2, '24')}
                {whiteKey(offset + 4, '23')}
                {whiteKey(offset + 5, '24')}
                {whiteKey(offset + 7, '23')}
                {whiteKey(offset + 9, '23')}
                {whiteKey(offset + 11, '24')}
            </>
        );
    }

    const octaveBlack = (offset: number) => {
        return (
            <>
                {blackKey(offset + 1, '14em')}
                {blackKey(offset + 3, '42em')}
                {blackKey(offset + 6, '83em')}
                {blackKey(offset + 8, '110em')}
                {blackKey(offset + 10, '137em')}
            </>
        )
    }

    const octave = (offset: number) => {
        return (
            <div className='octave'>
                {octaveWhite(offset)}
                {octaveBlack(offset)}
            </div>
        )
    }

    return (
        <div className='keyboard'>
            <div className='octave'>
                {whiteKey(21, '23')}
                {blackKey(22, '14em')}
                {whiteKey(23, '24')}
            </div>
            {octave(24)}
            {octave(24 + 12)}
            {octave(24 + 24)}
            {octave(24 + 36)}
            {octave(24 + 48)}
            {octave(24 + 60)}
            {octave(24 + 72)}
            {whiteKey(24 + 84, '23')}
        </div>
    )
}