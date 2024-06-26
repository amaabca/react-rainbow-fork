'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _typeof = require('@babel/runtime/helpers/typeof');

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports['default'] = exports.Component = void 0;

var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));

var _react = _interopRequireWildcard(require('react'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _reactAsyncScriptLoader = _interopRequireDefault(require('react-async-script-loader'));

var _withReduxForm = _interopRequireDefault(require('../../libs/hocs/withReduxForm'));

var _hooks = require('../../libs/hooks');

var _helpers = require('./helpers');

var _RenderIf = _interopRequireDefault(require('../RenderIf'));

var _label = _interopRequireDefault(require('../Input/label'));

var _helpText = _interopRequireDefault(require('../Input/styled/helpText'));

var _errorText = _interopRequireDefault(require('../Input/styled/errorText'));

var _container = _interopRequireDefault(require('./styled/container'));

var _cardInput = _interopRequireDefault(require('./styled/cardInput'));

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== 'function') return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || (_typeof(obj) !== 'object' && typeof obj !== 'function')) {
        return { default: obj };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
        if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj['default'] = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}

var StripeCardInput = _react['default'].forwardRef(function(props, ref) {
    var id = props.id,
        apiKey = props.apiKey,
        label = props.label,
        labelAlignment = props.labelAlignment,
        hideLabel = props.hideLabel,
        bottomHelpText = props.bottomHelpText,
        error = props.error,
        disabled = props.disabled,
        required = props.required,
        locale = props.locale,
        onChange = props.onChange,
        onFocus = props.onFocus,
        onBlur = props.onBlur,
        className = props.className,
        style = props.style,
        isScriptLoaded = props.isScriptLoaded,
        isScriptLoadSucceed = props.isScriptLoadSucceed,
        size = props.size,
        borderRadius = props.borderRadius;

    var _useState = (0, _react.useState)(null),
        _useState2 = (0, _slicedToArray2['default'])(_useState, 2),
        stripe = _useState2[0],
        setStripe = _useState2[1];

    var cardRef = (0, _react.useRef)();
    var stripeCardInputId = (0, _hooks.useUniqueIdentifier)('stripe-card-input');
    var errorMessageId = (0, _hooks.useUniqueIdentifier)('error-message');
    var theme = (0, _hooks.useTheme)().rainbow;
    var cardElementOptions = (0, _react.useMemo)(
        function() {
            return (0, _helpers.getCardElementOptions)(theme, disabled, size);
        },
        [disabled, size, theme],
    );
    var localeStripe = (0, _hooks.useLocale)(locale);
    var elementsOptions = (0, _react.useMemo)(
        function() {
            return (0, _helpers.getElementsOptions)(localeStripe);
        },
        [localeStripe],
    );
    (0, _react.useEffect)(
        function() {
            if (isScriptLoaded && isScriptLoadSucceed && window.Stripe && apiKey) {
                setStripe(window.Stripe(apiKey));
            }
        },
        [apiKey, isScriptLoadSucceed, isScriptLoaded],
    );
    (0, _react.useEffect)(
        function() {
            if (stripe) {
                var cardNode = cardRef.current;
                var elements = stripe.elements(elementsOptions);
                var card = elements.create('card', cardElementOptions);
                card.mount(cardNode);
                card.on('change', function(event) {
                    var stripeCardEvent = {
                        stripe: stripe,
                        card: card,
                        isEmpty: event.empty,
                        isComplete: event.complete,
                        cardBrand: event.brand,
                        error: (0, _helpers.getError)(event.error),
                    };
                    onChange(stripeCardEvent);
                });
                card.on('focus', onFocus);
                card.on('blur', onBlur);
                return function() {
                    card.unmount();
                    card.destroy();
                };
            }
        },
        [cardElementOptions, elementsOptions, stripe],
    );
    return _react['default'].createElement(
        _container['default'],
        {
            id: id,
            ref: ref,
            className: className,
            style: style,
            disabled: disabled,
            error: error,
            size: size,
        },
        _react['default'].createElement(_label['default'], {
            label: label,
            hideLabel: hideLabel,
            labelAlignment: labelAlignment,
            inputId: stripeCardInputId,
            required: required,
            size: size,
        }),
        _react['default'].createElement(_cardInput['default'], {
            ref: cardRef,
            id: stripeCardInputId,
            disabled: disabled,
            size: size,
            borderRadius: borderRadius,
        }),
        _react['default'].createElement(
            _RenderIf['default'],
            {
                isTrue: bottomHelpText,
            },
            _react['default'].createElement(
                _helpText['default'],
                {
                    alignSelf: 'center',
                },
                bottomHelpText,
            ),
        ),
        _react['default'].createElement(
            _RenderIf['default'],
            {
                isTrue: error,
            },
            _react['default'].createElement(
                _errorText['default'],
                {
                    id: errorMessageId,
                    alignSelf: 'center',
                },
                error,
            ),
        ),
    );
});

exports.Component = StripeCardInput;
StripeCardInput.propTypes = {
    id: _propTypes['default'].string,
    apiKey: _propTypes['default'].string.isRequired,
    label: _propTypes['default'].oneOfType([
        _propTypes['default'].string,
        _propTypes['default'].node,
    ]),
    labelAlignment: _propTypes['default'].oneOf(['left', 'center', 'right']),
    hideLabel: _propTypes['default'].bool,
    bottomHelpText: _propTypes['default'].oneOfType([
        _propTypes['default'].string,
        _propTypes['default'].node,
    ]),
    error: _propTypes['default'].oneOfType([
        _propTypes['default'].string,
        _propTypes['default'].node,
    ]),
    disabled: _propTypes['default'].bool,
    required: _propTypes['default'].bool,
    locale: _propTypes['default'].oneOf([
        'ar',
        'da',
        'de',
        'en',
        'es',
        'fi',
        'fr',
        'he',
        'it',
        'ja',
        'lt',
        'lv',
        'ms',
        'nb',
        'nl',
        'pl',
        'pt',
        'pt-BR',
        'ru',
        'sv',
        'zh',
    ]),
    onChange: _propTypes['default'].func,
    onFocus: _propTypes['default'].func,
    onBlur: _propTypes['default'].func,
    className: _propTypes['default'].string,
    style: _propTypes['default'].object,
    isScriptLoaded: _propTypes['default'].bool.isRequired,
    isScriptLoadSucceed: _propTypes['default'].bool.isRequired,
    size: _propTypes['default'].oneOf(['small', 'medium', 'large']),
    borderRadius: _propTypes['default'].oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
};
StripeCardInput.defaultProps = {
    id: undefined,
    label: undefined,
    labelAlignment: 'center',
    hideLabel: false,
    bottomHelpText: null,
    error: null,
    disabled: false,
    required: false,
    locale: undefined,
    onChange: function onChange() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    className: undefined,
    style: undefined,
    size: 'medium',
    borderRadius: 'rounded',
};

var _default = (0, _reactAsyncScriptLoader['default'])('https://js.stripe.com/v3')(
    (0, _withReduxForm['default'])(StripeCardInput),
);

exports['default'] = _default;
