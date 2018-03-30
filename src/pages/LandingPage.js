import React from 'react';
import { Link } from 'react-router-dom';

export function LandingPage() {
    return (
        <div className="mt-5">
            <Link to={'/clock'}>Go to Clock</Link>
        </div>
    );
}
