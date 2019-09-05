### 主题方案

###

### 方案 1

利用 lessc 命令 根据 不同的变量文件生成不同的 css
生成多个主题的 css
缺点：vue 里不能含有主题相关的东西

```
function toggleThemeClick() {
    let a = document.getElementsByTagName("link");
    let aHref = a[0].getAttribute("href").slice(2, -4);
    a[0].parentElement.removeChild(a[0]);
    let b = document.createElement("link");
    b.setAttribute("rel", "stylesheet");
    if ("patriotic-red" === aHref) {
      b.setAttribute("href", "./sky-blue.css");
    } else {
      b.setAttribute("href", "./patriotic-red.css");
    }
    document.getElementsByTagName("head")[0].appendChild(b);
  }

```

###方案 2

写多份主题的 less 变量文件,根据 class 来切换

```
@import "var.less";
@import (multiple) "index.less";

.theme-a {
    @import "theme-a-var";
    @import (multiple) "index.less";
}
.theme-b {
    @import "theme-b-var";
    @import (multiple) "index.less";
}

```

缺点：vue 中如果涉及到皮肤的东西，也这么引入太复杂，最好所有需要换肤的都写到 index.less .

### 方案 2

浏览器引用 less 文件，和 lessjs ，并且调用浏览器的 modifyvar
缺点：浏览器编译较慢

### 方案 3

采用 css 变量写 css，然后调用 js 来修改主题颜色
缺点：兼容性？

### 方案 4

字符串替换，替换所有颜色
缺点：需要保证正确性
