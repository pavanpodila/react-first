import React from 'react';
import { Clock } from '../core/components/Clock';
import { clockStore } from './clock.store';

export function ClockPage() {
    const store = clockStore;

    return (
        <div className="mt-5">
            <Clock color={'white'} format={'h:mm:ss'} store={store} />
            <Clock
                format={'MMM DD, YYYY'}
                className="display-4"
                color={'lightgray'}
                store={store}
            />
        </div>
    );
}
