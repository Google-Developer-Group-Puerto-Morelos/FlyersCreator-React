import React from 'react';
import moment from 'moment';

interface DatesProps {
    theme: String,
    date: string,
    city: String
}

export const Dates = ({ theme, date, city } : DatesProps) => {

    return (
        <>
            {
                (theme === 'gdg') ? 
                    <span id="dayevent" className="gdg-date">
                        {moment(date).format('dddd, MMMM Do HH:ss')}, {city} time
                    </span>
                : 
                 <>
                    <span id="dayevent">
                        {moment(date).format('DD')}
                    </span>
                    <span id="monthevent">
                            {moment(date).format('MMM')}
                    </span>
            </>
            }
        </>
    )

}