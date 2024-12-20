# Icon

用于显示图标

```html preview
<s-icon name="home"></s-icon>
<s-icon name="add"></s-icon>
<s-icon name="search"></s-icon>
<s-icon name="menu"></s-icon>
<s-icon name="arrow_back"></s-icon>
<s-icon name="arrow_forward"></s-icon>
<s-icon name="arrow_upward"></s-icon>
<s-icon name="arrow_downward"></s-icon>
<s-icon name="arrow_drop_up"></s-icon>
<s-icon name="arrow_drop_down"></s-icon>
<s-icon name="arrow_drop_left"></s-icon>
<s-icon name="arrow_drop_right"></s-icon>
<s-icon name="more_vert"></s-icon>
<s-icon name="more_horiz"></s-icon>
<s-icon name="close"></s-icon>
<s-icon name="done"></s-icon>
<s-icon name="chevron_up"></s-icon>
<s-icon name="chevron_down"></s-icon>
<s-icon name="chevron_left"></s-icon>
<s-icon name="chevron_right"></s-icon>
<s-icon name="light_mode"></s-icon>
<s-icon name="dark_mode"></s-icon>
<s-icon name="star"></s-icon>
<s-icon name="favorite"></s-icon>
```

使用 color 设置颜色

```html preview
<s-icon name="add" style="color: #009688"></s-icon>
```

加载图标

```html preview
<s-icon src="/images/sentiment_neutral.svg"></s-icon>
```

> 注意：如果目标文件的 `content-type` 为 `image/svg+xml` 则会加载完成后在内部渲染，因此它支持定义颜色，反之将会使用 `<img />` 来渲染。

你也可以直接在内部放置 SVG 图标。

```html preview
<s-icon>
  <svg viewBox="0 -960 960 960">
    <path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 260q68 0 123.5-38.5T684-400H276q25 63 80.5 101.5T480-260Zm0 180q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"></path>
  </svg>
</s-icon>
```

> 大多数组件都支持直接使用 SVG 作为插槽，所以该组件的使用场景主要用于自定义布局时使用。

你也可以在 [图标库](/resource/icon) 中获取 SVG 图标 、或者使用 [阿里巴巴矢量图标库](https://www.iconfont.cn)。

---

## 属性

| 名称 | 类型     | 默认值 | 同步 | 介绍        |
| ---- | ------- | ------ | --- | ----------- |
| name | string  | none   | 是  | 自带图标名称 |
| src  | string  |        | 否  | 图标路径     |

---

## 事件

| 名称  | 参数   | 冒泡 | 可取消 | 介绍             |
| ----- |------ |------|------ |----------------- |
| load  | Event | 否   | 否    | src 加载完成后触发 |
| error | Event | 否   | 否    | src 加载错误后触发 |

---

## CSS 变量

| 名称                         | 介绍              |
| ---------------------------- | ----------------- |
| --s-color-on-surface-variant | 图标颜色，同 color |