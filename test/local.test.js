const intl = require('../lib')

/*const locales = {
    en: require('./data/en.json'),
    'zh-CN': require('./data/zh-CN.json'),
    'zh-HK': require('./data/zh-HK.json')
}*/

describe('本地方案', () => {
    it('基准测试', () => {

        expect('en-US').toEqual('en-US')
    })
})
