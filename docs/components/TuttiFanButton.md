
# TuttiFanButton 按钮组件

## 组件简介
TuttiFanButton 是一个风格鲜明、功能丰富的按钮组件，支持多种类型、尺寸、状态和交互。

## 基本用法

<TuttiFanButton>默认按钮</TuttiFanButton>

```vue
<TuttiFanButton>默认按钮</TuttiFanButton>
```

## Props 参数

| 属性        | 类型    | 默认值   | 可选值                                   | 说明             |
| ----------- | ------- | -------- | ---------------------------------------- | ---------------- |
| size        | string  | medium   | medium / small / mini                    | 按钮尺寸         |
| type        | string  | primary  | primary / success / warning / danger / info / text | 按钮类型         |
| plain       | boolean | false    | true / false                             | 是否朴素按钮      |
| round       | boolean | false    | true / false                             | 是否圆角按钮      |
| circle      | boolean | false    | true / false                             | 是否圆形按钮      |
| loading     | boolean | false    | true / false                             | 是否加载中状态    |
| disabled    | boolean | false    | true / false                             | 是否禁用状态      |
| autofocus   | boolean | false    | true / false                             | 是否默认聚焦      |
| nativeType  | string  | button   | button / submit / reset                  | 原生 type 属性    |

## 事件

| 事件  | 说明         |
| ----- | ------------ |
| click | 按钮点击事件 |

## 插槽

| 插槽   | 说明     |
| ------ | -------- |
| default| 按钮内容 |

## 用法示例

### 朴素按钮
<TuttiFanButton plain>朴素按钮</TuttiFanButton>

```vue
<TuttiFanButton plain>朴素按钮</TuttiFanButton>
```

### 圆角按钮
<TuttiFanButton round>圆角按钮</TuttiFanButton>

```vue
<TuttiFanButton round>圆角按钮</TuttiFanButton>
```

### 圆形按钮
<TuttiFanButton circle>+</TuttiFanButton>

```vue
<TuttiFanButton circle>+</TuttiFanButton>
```

### 加载中状态
<TuttiFanButton :loading="true">加载中</TuttiFanButton>

```vue
<TuttiFanButton :loading="true">加载中</TuttiFanButton>
```

### 禁用状态
<TuttiFanButton :disabled="true">禁用按钮</TuttiFanButton>

```vue
<TuttiFanButton :disabled="true">禁用按钮</TuttiFanButton>
```

### 多种类型
<TuttiFanButton type="success">成功</TuttiFanButton>
<TuttiFanButton type="warning">警告</TuttiFanButton>
<TuttiFanButton type="danger">危险</TuttiFanButton>
<TuttiFanButton type="info">信息</TuttiFanButton>
<TuttiFanButton type="text">文字按钮</TuttiFanButton>

```vue
<TuttiFanButton type="success">成功</TuttiFanButton>
<TuttiFanButton type="warning">警告</TuttiFanButton>
<TuttiFanButton type="danger">危险</TuttiFanButton>
<TuttiFanButton type="info">信息</TuttiFanButton>
<TuttiFanButton type="text">文字按钮</TuttiFanButton>
```

## 注意事项
- 按钮内容建议简洁明了。
- 禁用或加载中状态下不可点击。
- 可通过 slot 自定义按钮内容。