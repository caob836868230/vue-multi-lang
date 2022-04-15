# vue-switch-multi-lang
vue框架下语言切换功能

# install
```
  npm i vue-switch-multi-lang -S
```

# basic usage
```javascript
  ...
  import vueMultiLang from "vue-multi-lang"
  // entry
  Vue.use(vueMultiLang, {
    el: '#app'
  })
```

# params
## 参数列表
|      param      |  type  | remark |
|  -------------  | ------ | ------ |
| el              | String | 元素根节点(最终传入document.querySelector方法中) |
| lang            | Object | 初始化语言包对象，默认 {} |
| langType        | String | 初始化语言类型，默认'zh' |
| targetName      | String | 挂载Vue原型节点名称，默认'$TbLang' |
| prefixClassName | String | el节点语言类名前缀，默认'tb-lang'，设置langType为'zh'，最终类名会叫'tb-lang-zh' |

## 事件说明（默认targetName为'$TbLang'）
|   function      |  params  | remark |
|  -------------  | ------   | ------ |
| changeLang      | (langType (string 语言类型), lang (Object 语言包对象) | 修改语言环境 |
| cleanLang       | - 无     | 清空语言环境 |

```javascript
  // 使用示例
  this.$TbLang.changeLang('en', {...});

  this.$TbLang.cleanLang();
```

## 可获取到的参数（默认targetName为'$TbLang'）
1. 语言包数据：假设语言包设置成{test: 'hello world'}，可以通过this.$TbLang.lang.test获取到值，template获取如下：
```html
  <template>
    <div>{{ $TbLang.lang.xxx }}</div>
  </template>
```
2. 语言包环境：假设语言包设置成'en'，可以通过this.$TbLang.langEnv获取到值