import { CLEF_RANGE, Clef as Clef, Modifier, SCALE_NOTES, Scale as Scale } from './constants';
import './Staff.css';
import { useEffect, useState } from 'react';

function getDiatonicIndex(noteKey: number, clef: Clef, scale: Scale): [number, Modifier] {
    var modifier = Modifier.None;
    const octave = Math.floor((noteKey - CLEF_RANGE[clef].min) / 12);
    const mustHaveModifier = !SCALE_NOTES[scale].includes(noteKey % 12);
    var relativeIndex = 0;
    if (mustHaveModifier) {
        const delta = Math.random() > 0.5 ? 1 : -1;
        modifier = delta === -1 ? Modifier.Sharp : Modifier.Flat;
        relativeIndex = SCALE_NOTES[scale].indexOf((noteKey + delta) % 12);
    }
    else {
        relativeIndex = SCALE_NOTES[scale].indexOf(noteKey % 12);
    }
    const index = octave * 7 + relativeIndex;
    return [index, modifier];
}

export default function Staff({ noteKey, clef, scale }: { noteKey?: number, clef: Clef, scale: Scale }) {

    const [position, setPosition] = useState<number | null>(null);
    const [modifier, setModifier] = useState(Modifier.None);

    useEffect(() => {
        if (!noteKey) {
            return;
        }
        const [index, modifier] = getDiatonicIndex(noteKey, clef, scale);
        setPosition(17 - index);
        setModifier(modifier);
    }, [noteKey, clef, scale])

    const getNoteClass = () => {
        var defClass = 'note';
        if (modifier == Modifier.Flat) {
            return `${defClass} note-flat`;
        }
        else if (modifier == Modifier.Sharp) {
            return `${defClass} note-sharp`;
        }
        else if (modifier == Modifier.Natural) {
            return `${defClass} note-natural`;
        }

        return defClass;
    };

    return (
        <div className="staff">
            <div className="staff-lines">
                <div className="line-short" style={{ visibility: position !== null && position <= -8 ? 'visible' : 'hidden' }} />
                <div className="line-short" style={{ visibility: position !== null && position <= -6 ? 'visible' : 'hidden' }} />
                <div className="line-short" style={{ visibility: position !== null && position <= -4 ? 'visible' : 'hidden' }} />
                <div className="line-short" style={{ visibility: position !== null && position <= -2 ? 'visible' : 'hidden' }} />
                <div className="line-long" />
                <div className="line-long" />
                <div className="line-long" />
                <div className="line-long" />
                <div className="line-long" />
                <div className="line-short" style={{ visibility: position !== null && position >= 10 ? 'visible' : 'hidden' }} />
                <div className="line-short" style={{ visibility: position !== null && position >= 12 ? 'visible' : 'hidden' }} />
                <div className="line-short" style={{ visibility: position !== null && position >= 14 ? 'visible' : 'hidden' }} />
                <div className="line-short" style={{ visibility: position !== null && position >= 16 ? 'visible' : 'hidden' }} />
                {
                    noteKey && position !== null ?
                        <div className={getNoteClass()} style={{ top: `calc(6px * ${position})` }}>𝅝</div>
                        : null
                }
                {clef === Clef.TREBLE ? <div className="treble-clef" /> : <div className="bass-clef" />}
            </div>
        </div>
    )
}