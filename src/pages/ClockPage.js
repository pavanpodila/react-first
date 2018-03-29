import { Background } from '../core/components/Background';
import { Clock } from '../core/components/Clock';
import { Fragment } from 'react';
import React from 'react';

export function ClockPage() {
    return (
        <Fragment>
            <Background image={require('../assets/night-sky.jpg')} />
            <Clock />
            <Clock format={'MMM DD, YYYY'} className="display-4" />
        </Fragment>
    );
}
