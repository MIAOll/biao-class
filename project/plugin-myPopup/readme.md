# myPopup使用文档
## 上手
```html
    <link rel="stylesheet" href="myPopup.css">

    <script src="myPopup.js"></script>
    <script>
        myPopup.boot('#trigger', '#popup');
    </script>

```
### 选项

```js
myPopup.boot('#trigger', '#popup', {
    position: 'left-top', // 位置：左上角，支持：center|top|bottom|left|right|top-left|top-right|bottom-left|bottom-right
    keyToHide: 'a', // 关闭快捷键
    on: 'dblclick', // 触发事件 click|dblclick
    offsetX: 100, // 在position基础上的横向偏移量
    offsetY: 100, // 在position基础上的纵向偏移量
});
```