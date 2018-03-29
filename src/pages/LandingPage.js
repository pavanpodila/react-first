import React from 'react';
import { Link } from 'react-router-dom';

export function LandingPage() {
    return <Link to={'/clock'}>Show Clock</Link>;
}
