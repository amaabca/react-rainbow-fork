'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = CalendarIcon;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

function CalendarIcon(props) {
    var className = props.className,
        style = props.style;
    return _react['default'].createElement(
        'svg',
        {
            className: className,
            style: style,
            width: '32px',
            height: '32px',
            viewBox: '0 0 32 32',
        },
        _react['default'].createElement(
            'g',
            {
                id: 'marketing-influencer-home',
                stroke: 'none',
                strokeWidth: '1',
                fill: 'none',
                fillRule: 'evenodd',
            },
            _react['default'].createElement(
                'g',
                {
                    id: 'calendar',
                    fillRule: 'nonzero',
                },
                _react['default'].createElement('circle', {
                    id: 'Oval',
                    fill: '#01B6F5',
                    cx: '16',
                    cy: '16',
                    r: '16',
                }),
                _react['default'].createElement('path', {
                    d:
                        'M20.3400577,8.725 C20.7606383,8.725 21.102842,9.06720368 21.102842,9.48778425 L21.102842,11.2445646 C21.102842,11.6651452 20.7606383,12.0073488 20.3400577,12.0073488 C19.9193508,12.0073488 19.5772735,11.6652716 19.5772735,11.2445646 L19.5772735,9.48778425 C19.5772735,9.06720368 19.9194772,8.725 20.3400577,8.725 Z M10.8969052,9.48778425 C10.8969052,9.06720368 11.2391089,8.725 11.6596894,8.725 C12.0803964,8.725 12.4226001,9.06720368 12.4226001,9.48778425 L12.4226001,11.2445646 C12.4226001,11.6651452 12.0803964,12.0073488 11.6596894,12.0073488 C11.2391089,12.0073488 10.8969052,11.6651452 10.8969052,11.2445646 L10.8969052,9.48778425 Z M22.3491611,24.3101206 L9.65045962,24.3101206 C8.68528599,24.3101206 7.9,23.5248346 7.9,22.5596609 L7.9,13.7791724 L21.2071338,13.7791724 C21.3430292,13.7791724 21.4532626,13.6689391 21.4532626,13.5330437 C21.4532626,13.3971483 21.3430292,13.2869149 21.2071338,13.2869149 L7.9,13.2869149 L7.9,11.6910601 C7.9,10.7257601 8.68528599,9.94034765 9.65045962,9.94034765 L10.4047741,9.94034765 L10.4047741,11.2445646 C10.4047741,11.9365568 10.9676972,12.4996063 11.6598159,12.4996063 C12.351808,12.4996063 12.9147312,11.9365568 12.9147312,11.2445646 L12.9147312,9.94034765 L19.0851424,9.94034765 L19.0851424,11.2445646 C19.0851424,11.9365568 19.6480655,12.4996063 20.3400577,12.4996063 C21.03205,12.4996063 21.5950995,11.9365568 21.5950995,11.2445646 L21.5950995,9.94034765 L22.3492875,9.94034765 C23.3145876,9.94034765 24.1,10.7257601 24.1,11.6910601 L24.1,13.2869149 L22.1916489,13.2869149 C22.0557534,13.2869149 21.9455201,13.3971483 21.9455201,13.5330437 C21.9455201,13.6689391 22.0557534,13.7791724 22.1916489,13.7791724 L24.1,13.7791724 L24.1,22.5596609 C24.1,23.5248346 23.3145876,24.3101206 22.3491611,24.3101206 Z M17.0856021,19.1964818 C16.6980325,19.1964818 16.3827245,19.5117899 16.3827245,19.8993595 C16.3827245,20.2870117 16.6980325,20.6023197 17.0856021,20.6023197 C17.4731717,20.6023197 17.7884798,20.2870117 17.7884798,19.8993595 C17.7884798,19.5117899 17.4731717,19.1964818 17.0856021,19.1964818 Z M19.9880798,21.586877 C19.9880798,21.1993074 19.6727717,20.8839993 19.2852021,20.8839993 C18.8976325,20.8839993 18.5823245,21.1993074 18.5823245,21.586877 C18.5823245,21.9744466 18.8976325,22.2897547 19.2852021,22.2897547 C19.6727717,22.2897547 19.9880798,21.9744466 19.9880798,21.586877 Z M14.876886,15.7724576 C14.4893164,15.7724576 14.1740083,16.0877657 14.1740083,16.4753353 C14.1740083,16.8629049 14.4893164,17.178213 14.876886,17.178213 C15.2644556,17.178213 15.5797636,16.8629049 15.5797636,16.4753353 C15.5797636,16.0877657 15.2644556,15.7724576 14.876886,15.7724576 Z M17.0856021,15.7724576 C16.6980325,15.7724576 16.3827245,16.0877657 16.3827245,16.4753353 C16.3827245,16.8629049 16.6980325,17.178213 17.0856021,17.178213 C17.4731717,17.178213 17.7884798,16.8629049 17.7884798,16.4753353 C17.7884798,16.0877657 17.4731717,15.7724576 17.0856021,15.7724576 Z M19.2898773,15.7724576 C18.9023077,15.7724576 18.5869997,16.0877657 18.5869997,16.4753353 C18.5869997,16.8629049 18.9023077,17.178213 19.2898773,17.178213 C19.6774469,17.178213 19.992755,16.8629049 19.992755,16.4753353 C19.992755,16.0877657 19.6774469,15.7724576 19.2898773,15.7724576 Z M21.468085,15.7724576 C21.0805154,15.7724576 20.7651248,16.0877657 20.7651248,16.4753353 C20.7651248,16.8629049 21.0804328,17.178213 21.468085,17.178213 C21.8556546,17.178213 22.1709627,16.8629049 22.1709627,16.4753353 C22.1709627,16.0877657 21.8556546,15.7724576 21.468085,15.7724576 Z M10.4944031,17.4844697 C10.1068335,17.4844697 9.79152542,17.7997778 9.79152542,18.1873474 C9.79152542,18.574917 10.1068335,18.890225 10.4944031,18.890225 C10.8819727,18.890225 11.1972808,18.574917 11.1972808,18.1873474 C11.1972808,17.7997778 10.8819727,17.4844697 10.4944031,17.4844697 Z M12.6987609,17.4844697 C12.3111913,17.4844697 11.9958832,17.7997778 11.9958832,18.1873474 C11.9958832,18.574917 12.3111913,18.890225 12.6987609,18.890225 C13.0863305,18.890225 13.4016385,18.574917 13.4016385,18.1873474 C13.4016385,17.7997778 13.0863305,17.4844697 12.6987609,17.4844697 Z M14.876886,17.4844697 C14.4893164,17.4844697 14.1740083,17.7997778 14.1740083,18.1873474 C14.1740083,18.574917 14.4893164,18.890225 14.876886,18.890225 C15.2644556,18.890225 15.5797636,18.574917 15.5797636,18.1873474 C15.5797636,17.7997778 15.2644556,17.4844697 14.876886,17.4844697 Z M17.0856021,17.4844697 C16.6980325,17.4844697 16.3827245,17.7997778 16.3827245,18.1873474 C16.3827245,18.574917 16.6980325,18.890225 17.0856021,18.890225 C17.4731717,18.890225 17.7884798,18.574917 17.7884798,18.1873474 C17.7884798,17.7997778 17.4731717,17.4844697 17.0856021,17.4844697 Z M19.2898773,17.4844697 C18.9023077,17.4844697 18.5869997,17.7997778 18.5869997,18.1873474 C18.5869997,18.574917 18.9023077,18.890225 19.2898773,18.890225 C19.6774469,18.890225 19.992755,18.574917 19.992755,18.1873474 C19.992755,17.7997778 19.6774469,17.4844697 19.2898773,17.4844697 Z M21.468085,17.4844697 C21.0805154,17.4844697 20.7651248,17.7997778 20.7651248,18.1873474 C20.7651248,18.574917 21.0804328,18.890225 21.468085,18.890225 C21.8556546,18.890225 22.1709627,18.574917 22.1709627,18.1873474 C22.1709627,17.7997778 21.8556546,17.4844697 21.468085,17.4844697 Z M10.4944031,19.1964818 C10.1068335,19.1964818 9.79152542,19.5117899 9.79152542,19.8993595 C9.79152542,20.2870117 10.1068335,20.6023197 10.4944031,20.6023197 C10.8819727,20.6023197 11.1972808,20.2870117 11.1972808,19.8993595 C11.1972808,19.5117899 10.8819727,19.1964818 10.4944031,19.1964818 Z M10.4944031,20.884 C10.1068335,20.884 9.79152542,21.199308 9.79152542,21.5868777 C9.79152542,21.9745298 10.1068335,22.2898379 10.4944031,22.2898379 C10.8819727,22.2898379 11.1972808,21.9745298 11.1972808,21.5868777 C11.1972808,21.199308 10.8819727,20.884 10.4944031,20.884 Z M12.6987609,19.1964818 C12.3111913,19.1964818 11.9958832,19.5117899 11.9958832,19.8993595 C11.9958832,20.2870117 12.3111913,20.6023197 12.6987609,20.6023197 C13.0863305,20.6023197 13.4016385,20.2870117 13.4016385,19.8993595 C13.4016385,19.5117899 13.0863305,19.1964818 12.6987609,19.1964818 Z M14.876886,19.1964818 C14.4893164,19.1964818 14.1740083,19.5117899 14.1740083,19.8993595 C14.1740083,20.2870117 14.4893164,20.6023197 14.876886,20.6023197 C15.2644556,20.6023197 15.5797636,20.2870117 15.5797636,19.8993595 C15.5797636,19.5117899 15.2644556,19.1964818 14.876886,19.1964818 Z M19.2898773,19.1964818 C18.9023077,19.1964818 18.5869997,19.5117899 18.5869997,19.8993595 C18.5869997,20.2870117 18.9023077,20.6023197 19.2898773,20.6023197 C19.6774469,20.6023197 19.992755,20.2870117 19.992755,19.8993595 C19.992755,19.5117899 19.6774469,19.1964818 19.2898773,19.1964818 Z M21.468085,19.1964818 C21.0805154,19.1964818 20.7651248,19.5117899 20.7651248,19.8993595 C20.7651248,20.2870117 21.0804328,20.6023197 21.468085,20.6023197 C21.8556546,20.6023197 22.1709627,20.2870117 22.1709627,19.8993595 C22.1709627,19.5117899 21.8556546,19.1964818 21.468085,19.1964818 Z M13.4016385,21.586877 C13.4016385,21.1993074 13.0863305,20.8839993 12.6987609,20.8839993 C12.3111913,20.8839993 11.9958832,21.1993074 11.9958832,21.586877 C11.9958832,21.9744466 12.3111913,22.2897547 12.6987609,22.2897547 C13.0863305,22.2897547 13.4016385,21.9744466 13.4016385,21.586877 Z M15.5797636,21.586877 C15.5797636,21.1993074 15.2644556,20.8839993 14.876886,20.8839993 C14.4893164,20.8839993 14.1740083,21.1993074 14.1740083,21.586877 C14.1740083,21.9744466 14.4893164,22.2897547 14.876886,22.2897547 C15.2644556,22.2897547 15.5797636,21.9744466 15.5797636,21.586877 Z M17.7884798,21.586877 C17.7884798,21.1993074 17.4731717,20.8839993 17.0856021,20.8839993 C16.6980325,20.8839993 16.3827245,21.1993074 16.3827245,21.586877 C16.3827245,21.9744466 16.6980325,22.2897547 17.0856021,22.2897547 C17.4731717,22.2897547 17.7884798,21.9744466 17.7884798,21.586877 Z',
                    id: 'Combined-Shape',
                    fill: '#FFFFFF',
                }),
            ),
        ),
    );
}

CalendarIcon.propTypes = {
    className: _propTypes['default'].string,
    style: _propTypes['default'].object,
};
CalendarIcon.defaultProps = {
    className: undefined,
    style: undefined,
};
