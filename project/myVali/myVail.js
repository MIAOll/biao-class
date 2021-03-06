/*
|--------------------------------------------------------------------------
| biaoValee.js
|--------------------------------------------------------------------------
| 通过字符串规则快速验证
| 显示错误信息（未实现）
*/

;
(function() {
    'use strict';

    // 基础验证规则
    let is = {
        /**
         * 是否为数字
         * @param {number} value
         * @return {boolean}
         */
        numeric(value) {
            return !isNaN(parseFloat(value));
        },

        /**
         * 是否大于指定数字
         * @param {number} value
         * @param {number} comparison 最小值
         * @return {boolean}
         */
        min(value, comparison) {
            if (!this.numeric(value))
                return false;

            return value >= comparison;
        },

        /**
         * 是否小于指定数字
         * @param {number} value
         * @param {number} comparison 最大值
         * @return {boolean}
         */
        max(value, comparison) {
            if (!this.numeric(value))
                return false;

            return value <= comparison;
        },

        /**
         * 是否在两个值之间
         * @param {number} value
         * @param {number} min
         * @param {number} max
         * @return {boolean}
         */
        between(value, min, max) {
            return this.min(value, min) &&
                this.max(value, max);
        },

        /**
         * 是否是正数
         * @param {number} value
         * @return {boolean}
         */
        positive(value) {
            if (!this.numeric(value))
                return false;

            return value > 0;
        },

        /**
         * 是否为负数
         * @param value
         * @return {boolean}
         */
        negative(value) {
            if (!this.numeric(value))
                return false;

            return value < 0;
        },

        /**
         * 字符串是否小于指定长度
         * @param {string} value
         * @param {number} comparison
         * @return {boolean}
         */
        minLength(value, comparison) {
            return value.length >= comparison;
        },

        /**
         * 字符串是否大于指定长度
         * @param {string} value
         * @param {number} comparison
         * @return {boolean}
         */
        maxLength(value, comparison) {
            return value.length <= comparison;
        },

        /**
         * 字符串是否在指定长度之间
         * @param {string} value
         * @param {number} min
         * @param {number} max
         * @return {*|boolean}
         */
        lengthBetween(value, min, max) {
            return this.minLength(value, min) &&
                this.maxLength(value, max);
        },

        /**
         * 字符串是否以某段字符开始
         * @param {string} value
         * @param {string} comparison
         * @return {*|boolean}
         */
        startsWith(value, comparison) {
            return value.startsWith(comparison);
        },

        /**
         * 字符串是否以某段字符结束
         * @param {string} value
         * @param {string} comparison
         * @return {*|boolean}
         */
        endsWith(value, comparison) {
            return value.endsWith(comparison);
        },

        includes(value, comparison) {
            return value.includes(comparison);
        },

        /**
         * 在数组中
         * @param {mix} value
         * @param {Array} comparison
         */
        in (value, comparison) {
            return comparison.indexOf(value) !== -1;
        },

        /**
         * 邮箱格式是否合法
         * @param {string} value
         * @return {boolean}
         */
        email(value) {
            let re = /^\w+@\w+\.\w+$/;
            return re.test(value);
        },

        /**
         * 用户名格式是否合法
         * @param {string} value
         * @return {boolean}
         */
        username(value) {
            let re = /^[a-zA-Z0-9]\w+$/;
            return re.test(value);
        },

        /**
         * 手机号格式是否合法
         * @param {string} value
         * @param {string} country 所在国家
         * @return {boolean}
         */
        phone(value, country = 'zh') {
            let re;

            switch (country) {
                case 'zh':
                    re = /^(?:\+?(?:86))?(\s|-)?1\d{10}$/;
                    break;
            }

            return re.test(value);
        },

        /**
         * 是否可以匹配正则
         * @param value
         * @param re 用于匹配的正则表达式
         * @return {boolean}
         */
        regex(value, re) {
            if (typeof re == 'string')
                re = new RegExp(re);

            return re.test(value);
        },
    };

    // 暴露接口
    window.valee = {
        validate(value, strRule) {
            applyRules(value, parseRules(strRule));
        },
        is,
        applyRules,
    };



    /**
     * 批量验证多条规则（一条数据，多种限制）
     * @param {*} value 验证的值：123
     * @param {Array} rules 解析好的规则对象：{numeric:true, min:3, max:12}
     */
    function applyRules(value, rules) {
        let valid = true;

        for (let key in rules) {
            let ru = rules[key];
            let result = is[key](value, ru);
            if (!result)
                valid = false;
        }
        return valid;
    }

    /**
     * 解析规则
     * @param {string} str 原始字符串规则：'numeric|min:3|max:12'
     */
    function parseRules(str) {
        // 初始化规则对象，
        // 解析好的规则都会放到这个对象中
        let rule = {};

        // 由大到小拆分规则
        // 以'numeric|min:3|max:12'为例
        // 先用'|'拆分，得到数组：
        // ['numeric', 'min:3', 'max:12']
        let ruleArr = str.split('|');

        // 循环数组，继续拆分
        ruleArr.forEach(it => {
            // 使用':'拆分
            // 设it为'min:3'
            // itArr就等于 ['min', '3']
            let itArr = it.split(':');

            // 第一项为键
            let key = itArr[0];
            // 第二项为值
            let comparison = itArr[1];

            // 这些规则的值应该是数字类型
            let numRules = [
                'numeric', 'min', 'max',
                'between', 'minLength', 'maxLength',
            ];

            // 如果没有值，说明是xxx:true的简写
            if (!comparison)
                comparison = true;
            else { // 否则
                // 如果是数字类型的规则就将其转换为数字类型
                // 否则会给下游造成隐患
                if (numRules.indexOf(key))
                    comparison = parseFloat(comparison);
            }

            // 将当前规则放到规则对象里
            rule[key] = comparison;
        });

        // 返回解析好的规则中
        return rule;
    }
})();