import React from 'react';
import PropTypes from 'prop-types';
import './HeaderButton.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import icons from '@fortawesome/fontawesome-free-solid';
import classNames from 'classnames';

const HeaderButton = ({ children, hasIndicator, onClickHandler, icon }) => (
    <div className="header-button-container">
        <button className="header-button" onClick={onClickHandler}>
            <span
                className={classNames('header-button-icon-container', {
                    'has-indicator': hasIndicator
                })}
            >
                <FontAwesomeIcon icon={icons[icon]} />
            </span>
        </button>
        {children}
    </div>
);

HeaderButton.propTypes = {
    children: PropTypes.any,
    hasIndicator: PropTypes.bool,
    onClickHandler: PropTypes.func,
    icon: PropTypes.any
};

export default HeaderButton;