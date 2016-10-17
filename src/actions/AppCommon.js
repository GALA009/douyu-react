export default {
    //添加样式
    addClass(ele, className) {
            if (ele === undefined) return false;
            if (className === undefined) return false;

            ele.className += className
        },
    //删除样式
    removeClass(ele, className) {
        if (ele === undefined) return false;
        if (className === undefined) return false;

        let reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        ele.className = ele.className.replace(reg, '');
    }
}