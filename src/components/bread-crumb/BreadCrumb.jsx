import React from 'react';
import { useLocation, Link } from 'react-router-dom';
const BreadCrumbs = () => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(path => path)
    return (
        <div style={{ margin: '40px' }}>
            <span>/</span>
            {paths.map((path, index) => (
                <span key={index}>
                    <Link to={`/${paths.slice(0, index + 1).join('/')}`}>{path}</Link>
                    {index < paths.length - 1 && ' / '}
                </span>
            ))}
        </div>
    );
}

export default BreadCrumbs;