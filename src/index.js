import React from 'react'
import IntlMessageFormat from 'intl-messageformat'
import isObject from 'lodash/isObject'

const DEFAULT_LANG = 'zh-CN'

export default class EduIntl {
    constructor(options) {
        const {
            locales,
            language,
            defaultLanguage,
        } = options
        this.defaultLanguage = defaultLanguage || DEFAULT_LANG
        this.locales = locales
        this.language = language
    }

    get(key, pmDefaultMessage, pmData) {
        let data = pmData
        let defaultMessage = pmDefaultMessage
        const argLn = arguments.length
        if (argLn === 2 && isObject(pmDefaultMessage)) {
            data = pmDefaultMessage
            defaultMessage = key
        }
        const {locales, language, defaultLanguage} = this
        const languageSetData = locales[language] ? locales[language] : locales[defaultLanguage]
        const message = languageSetData[key] ? languageSetData[key] : defaultMessage
        if (!data) {
            return message
        }
        const fmt = new IntlMessageFormat(message, language)
        return fmt.format(data)
    }

    getHTML(key, pmDefaultMessage, data) {
        const msg = this.get(key, pmDefaultMessage, data)
        return React.createElement('span', {
            dangerouslySetInnerHTML: {
                __html: msg
            }
        })
    }
}
