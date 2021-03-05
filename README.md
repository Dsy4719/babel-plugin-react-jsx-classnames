# babel-plugin-react-jsx-classnames
在react项目中className的值自动加上className()

```javascript
// 转换前
<div className={expression}></div>

// 转换后
import classNames from 'classnames'
<div className={classNames(expression)}></div>
```

## 使用

安装:

```
npm i babel-plugin-react-jsx-classnames --save-dev

yarn add babel-plugin-react-jsx-classnames -D
```

使用插件

```javascript
{
  "presets": [
    ...
  ],
  "plugins": [
    ...
    "react-jsx-classnames"
  ]
}
```

## 为什么

此babel插件是为了开发者方便

1.  因为使用classnames的时候, 每次都需要引入classnames, 产生重复代码块

2. jsx className有多个类名的时候比较麻烦, 所以使用classnames友好的解决了这个问题

   ```javascript
   // 不使用classnames
   <div className={`${styles.wrap ${styles.bgColor}}`}></div>
   <div className={[styles.wrap,styles.bgColor].join(' ')}></div>
   
   // 使用classnames
   <div className={className([styles.wrap,styles.bgColor])}></div>
   
   // 使用babel-plugin-react-jsx-classnames
   <div className={[styles.wrap,styles.bgColor]}></div>
   
   ```

   