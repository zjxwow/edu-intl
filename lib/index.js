'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _intlMessageformat = require('intl-messageformat');

var _intlMessageformat2 = _interopRequireDefault(_intlMessageformat);

var _isObject = require('lodash/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_LANG = 'zh-CN';

var EduIntl = function () {
    function EduIntl(options) {
        _classCallCheck(this, EduIntl);

        var locales = options.locales,
            language = options.language,
            defaultLanguage = options.defaultLanguage;

        this.defaultLanguage = defaultLanguage || DEFAULT_LANG;
        this.locales = locales;
        this.language = language;
    }

    _createClass(EduIntl, [{
        key: 'get',
        value: function get(key, pmDefaultMessage, pmData) {
            var data = pmData;
            var defaultMessage = pmDefaultMessage;
            var argLn = arguments.length;
            if (argLn === 2 && (0, _isObject2.default)(pmDefaultMessage)) {
                data = pmDefaultMessage;
                defaultMessage = key;
            }
            var locales = this.locales,
                language = this.language,
                defaultLanguage = this.defaultLanguage;

            var languageSetData = locales[language] ? locales[language] : locales[defaultLanguage];
            var message = languageSetData[key] ? languageSetData[key] : defaultMessage;
            if (!data) {
                return message;
            }
            var fmt = new _intlMessageformat2.default(message, language);
            return fmt.format(data);
        }
    }, {
        key: 'getHTML',
        value: function getHTML(key, pmDefaultMessage, data) {
            var msg = this.get(key, pmDefaultMessage, data);
            return _react2.default.createElement('span', {
                dangerouslySetInnerHTML: {
                    __html: msg
                }
            });
        }
    }]);

    return EduIntl;
}();

exports.default = EduIntl;