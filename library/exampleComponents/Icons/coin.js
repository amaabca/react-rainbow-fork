import React from 'react';
import PropTypes from 'prop-types';

const Coin = props => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            version="1.1"
        >
            <g fill="none">
                <path
                    fill="#FCD462"
                    d="M7.893 14.881c-3.851 0-6.988-3.136-6.988-6.988C.905 4.042 4.042.905 7.893.905c3.852 0 6.988 3.137 6.988 6.988 0 3.852-3.136 6.988-6.988 6.988z"
                />
                <path
                    fill="#F5BB41"
                    d="M8 0c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm0 1.48C4.4 1.48 1.48 4.4 1.48 8c0 3.6 2.92 6.52 6.52 6.52 3.6 0 6.52-2.92 6.52-6.52 0-3.6-2.92-6.52-6.52-6.52z"
                />
                <path
                    fill="#F5BB41"
                    d="M7.951 4.002c-.39.029-.698.355-.698.753v.54l-.047.014C6.036 5.657 5.2 6.742 5.2 8l.002.094c.04 1.218.864 2.257 2.004 2.597l.046.013v.541c0 .417.339.755.755.755l.057-.002c.39-.029.698-.355.698-.753v-.542l.047-.013c.392-.116.755-.318 1.063-.592.312-.277.34-.754.063-1.066-.263-.295-.707-.336-1.018-.101l-.048.04c-.238.21-.544.327-.862.327-.715 0-1.298-.583-1.298-1.298 0-.715.583-1.298 1.298-1.298.32 0 .622.115.86.326l.058.054c.294.295.772.295 1.067 0 .295-.294.295-.772 0-1.067l-.086-.082c-.32-.296-.7-.51-1.113-.63l-.031-.008v-.54c0-.417-.338-.755-.755-.755l-.056.002z"
                />
            </g>
        </svg>
    );
};

Coin.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Coin.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Coin;
