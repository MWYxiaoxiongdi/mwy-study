//工具类
module.exports = {
    debounce(func, wait) {//防抖
        let timer;
        return function () {
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(func, wait)
        }
    },

    fnThrottle(method, delay, duration) {
        var that = this;
        var timer = this.timer;
        var begin = new Date().getTime();
        return function () {
            var current = new Date().getTime();
            clearTimeout(timer);
            if (current - begin >= duration) {
                method();
                begin = current;
            } else {
                that.timer = setTimeout(function () {
                    method();
                }, delay);
            }
        };
    },

}