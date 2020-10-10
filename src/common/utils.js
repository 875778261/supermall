
//防抖
export function debounce(func, delay) {
    let timer = null;
    return function (...args) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        func.apply(this, args);
        console.log('防抖加载次数');
      }, delay);
    };
  }