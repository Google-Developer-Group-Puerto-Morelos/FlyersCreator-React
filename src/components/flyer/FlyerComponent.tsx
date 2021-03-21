import React from 'react';
import './styles.css';
import moment from 'moment';

interface FlyerProps {
    background?: string,
    conference?: any
}

const Flyer = (props: FlyerProps) =>{
    const { conference } = props;

    return (
        <div id="flyer">
            <main id="flyerTheme" style={{backgroundImage: `url(${props.background})`}}>
                <div className="flyer-content">
                    <div className="main-content">
                        <div className="container">
                            <div className="data-grid">
                                <span id="dayevent">
                                    {moment(conference.date).format('DD')} / 
                                </span>
                                <span id="monthevent">
                                   &nbsp;{moment(conference.date).format('MM')}
                                </span>
                                <h1 id="title" className="mui--text-display3">
                                    {conference.name}
                                </h1>
                                <h3 id="speaker" className="mui--text-display1">
                                    {conference.speaker}
                                </h3>
                                <p id="hourformat" className="mui--text-headline">
                                    a las  {moment(conference.date).format('HH')}:{moment(conference.date).format('mm')} de {conference.address}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

Flyer.defaultProps  = {
    background: '/images/gdg-background.png'
}


export default Flyer;