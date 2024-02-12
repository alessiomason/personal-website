import {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import festivities from './Festivities';
import './PieceOfCode.css';

const dayjs = require("dayjs");

function PieceOfCode() {
    const {t} = useTranslation();

    const [dirty, setDirty] = useState(false);
    const [time, setTime] = useState(dayjs().format());
    const [spinner, setSpinner] = useState('|');
    const [currentFestivity, setCurrentFestivity] = useState({});

    useEffect(() => {
        const now = dayjs();

        for (const festivity of festivities) {
            if (dayjs(festivity.start).isBefore(now) && dayjs(festivity.end).isAfter(now)) {
                setCurrentFestivity(festivity);
                break;
            }
        }
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDirty(true);
        }, 100)

        return () => clearInterval(intervalId);
    }, [])

    useEffect(() => {
        if (dirty) {
            setTime(dayjs().format());

            setSpinner(currentSpinner => {
                switch (currentSpinner) {
                    case '|':
                        return '/';
                    case '/':
                        return '-';
                    case '-':
                        return '\\';
                    case '\\':
                    default:
                        return '|';
                }
            })

            setDirty(false);
        }
    }, [dirty])

    return (
        <div className='code'>
            <p className='text-end no-padding primary-yellow'>const dayjs = require("dayjs");</p>
            <p className='text-end no-padding primary-yellow'>console.log(dayjs().format())</p>
            <p className='text-end no-padding primary-yellow'>{spinner} {time}</p>
            {currentFestivity.messageKey &&
                <p className='text-end no-padding primary-yellow'>console.log("{t(currentFestivity.messageKey)}")</p>}
        </div>
    );
}

export default PieceOfCode;