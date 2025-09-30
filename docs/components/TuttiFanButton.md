# TuttiFanButton 按钮组件

## 组件简介
TuttiFanButton 用于触发操作，支持多种样式和状态。

## 基本用法

```vue
<TuttiFanButton>默认按钮</TuttiFanButton>
```

## 配置

参数

| 属性     | 类型    | 默认值  | 说明     |
| -------- | ------- | ------- | -------- |
| type     | string  | primary | 按钮类型 |
| disabled | boolean | false   | 是否禁用 |

事件

| 事件  | 说明     |
| ----- | -------- |
| click | 点击事件 |

插槽

| 插槽    | 说明     |
| ------- | -------- |
| default | 按钮内容 |

## 高级用法

```vue
<TuttiFanButton type="danger" :disabled="true">危险按钮</TuttiFanButton>
```

## 注意事项
- 按钮内容建议简洁明了。
- 禁用状态下不可点击。