import React from 'react';
import iconContainer from './../../IconContainer';
import iconPropTypes from './../propTypes';
import iconDefaultProps from './../defaultProps';

function AddContact(props) {
    const { className, style } = props;

    return (
        <svg className={className} style={style} aria-hidden xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <path d="m46 9h-40c-2.7 0-5 2.2-5 5v24c0 2.7 2.3 5 5 5h40c2.8 0 5-2.2 5-5v-24c0-2.8-2.2-5-5-5z m-21.2 28.2h-14.4c-1.6 0-2.8-1.7-2.8-3.4 0.1-2.5 2.7-4 5.4-5.2 1.9-0.8 2.2-1.6 2.2-2.4 0-0.8-0.5-1.6-1.2-2.2-1.1-1-1.7-2.5-1.7-4.1 0-3.2 1.9-5.8 5.2-5.8s5.2 2.7 5.2 5.8c0 1.7-0.6 3.2-1.7 4.1-0.7 0.6-1.2 1.3-1.2 2.2 0 0.8 0.2 1.6 2.2 2.3 2.7 1.2 5.3 2.8 5.4 5.3 0.3 1.7-1 3.4-2.6 3.4z m19.5-5.8c0 0.9-0.8 1.7-1.7 1.7h-7.5c-0.9 0-1.7-0.7-1.7-1.7v-2.5c0-0.9 0.8-1.7 1.7-1.7h7.5c0.9 0 1.7 0.7 1.7 1.7v2.5z m0-9.1c0 0.9-0.8 1.7-1.7 1.7h-12.4c-0.9 0-1.7-0.7-1.7-1.7v-2.5c0-0.9 0.8-1.7 1.7-1.7h12.5c0.9 0 1.7 0.7 1.7 1.7v2.5z" />
        </svg>
    );
}

AddContact.propTypes = iconPropTypes;
AddContact.defaultProps = iconDefaultProps;

export default iconContainer(AddContact);