import React from 'react';

export function Background({ src }) {
    return (
        <div
            style={{
                backgroundImage: `url(${src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                zIndex: -1,
            }}
        />
    );
}
