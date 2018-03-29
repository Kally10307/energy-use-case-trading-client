import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import logo from './logo.png';
import './Logo.css';

const Logo = ({ size, className }) => {
    const classes = classNames('logo', `logo-${size}`, className);
    return (
        <img
            className={classes}
            src={logo}
            alt="Lition logo"
            width={174}
            height={36}
        />
    );
};

Logo.propTypes = {
    size: PropTypes.oneOf(['small', 'medium'])
};
Logo.defaultProps = {
    className: PropTypes.string,
    size: 'medium'
};

export default Logo;