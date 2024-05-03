'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var EyeIcon = function EyeIcon(props) {
    var className = props.className,
        style = props.style;
    return _react['default'].createElement(
        'svg',
        {
            className: className,
            style: style,
            width: '14px',
            height: '13px',
            viewBox: '0 0 14 12',
        },
        _react['default'].createElement(
            'g',
            {
                id: 'components',
                stroke: 'none',
                strokeWidth: '1',
                fill: 'none',
                fillRule: 'evenodd',
            },
            _react['default'].createElement(
                'g',
                {
                    id: 'Components-Input-DesignGuidelines',
                    transform: 'translate(-614.000000, -363.000000)',
                    fill: 'currentColor',
                    fillRule: 'nonzero',
                },
                _react['default'].createElement('path', {
                    d:
                        'M615.447385,363.001436 L626.724393,374.281576 L625.913216,375.089562 L624.058631,373.231816 L623.788229,372.961414 C622.926144,373.308162 621.984552,373.499028 620.998404,373.499028 C617.817306,373.499028 615.100667,371.520381 614,368.727395 C614.49625,367.464523 615.326514,366.3734 616.376273,365.552679 L616.376273,365.552679 L614.636208,363.812614 L615.447385,363.001436 Z M618.154511,367.327726 C617.94456,367.753982 617.817306,368.224793 617.817306,368.727395 C617.817306,370.483356 619.242444,371.908494 620.998404,371.908494 C621.501036,371.908494 621.971818,371.78124 622.394912,371.571288 L622.394912,371.571288 L621.411956,370.588332 C621.27835,370.616962 621.141553,370.636048 620.998404,370.636048 C619.945454,370.636048 619.089751,369.780345 619.089751,368.727395 C619.089751,368.584246 619.108838,368.447479 619.137468,368.310682 L619.137468,368.310682 Z M620.998434,363.955792 C624.182694,363.955792 626.896172,365.934439 628,368.727425 C627.53238,369.91079 626.775271,370.947815 625.814592,371.749449 L625.814592,371.749449 L623.953656,369.888512 C624.096804,369.529059 624.179503,369.137785 624.179503,368.727425 C624.179503,366.971464 622.754365,365.546327 620.998404,365.546327 C620.588044,365.546327 620.19677,365.632216 619.837347,365.772174 L619.837347,365.772174 L618.463117,364.401135 C619.255208,364.114837 620.10772,363.955792 620.998434,363.955792 Z M620.998404,366.818742 C622.051355,366.818742 622.907058,367.674445 622.907058,368.727395 L622.907058,368.727395 L622.897514,368.832371 L620.893429,366.828285 Z',
                    id: 'eye-closed',
                }),
            ),
        ),
    );
};

EyeIcon.propTypes = {
    className: _propTypes['default'].string,
    style: _propTypes['default'].object,
};
EyeIcon.defaultProps = {
    className: undefined,
    style: undefined,
};
var _default = EyeIcon;
exports['default'] = _default;
