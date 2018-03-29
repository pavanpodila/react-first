import React from 'react';

export function Background({ image }) {
    return (
        <div
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                width: '100vw',
                height: '100vh',
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
