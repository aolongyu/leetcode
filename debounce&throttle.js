/**
 * debounce - 防抖
 * 指定时间内如果多次出发，那会在最后一次出发完成之后才真正执行
 */
const debounce =  (fn, delay) => {
    let timer = null;

    return function () {
        let _this = this;
        let args = arguments;

        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(_this, args);
        }, delay);
    }
}

/**
 * throttle - 节流
 * 指定时间内不管触发多少次，都会执行一次；不会往后推
 */
const throttle = (fn, delay) => {
    let timer = null;

    return function () {
        let _this = this;
        let args = arguments;

        if (timer) return;

        timer = setTimeout(() => {
            fn.apply(_this, args);
            timer = null;
        }, delay);
    }
}

