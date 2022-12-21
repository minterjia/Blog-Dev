---
title: Hexo-Butterfly样式修改
tags:
  - Hexo
  - Butterfly
categories: Butterfly
keywords: 'hexo,butterfly,主题,样式'
description: Butterfly样式指南
sticky: 1000
cover:  https://minterjia.com/upload/2022/12/001322-16644680029df5.webp
abbrlink: 9c783434
date: 2022-08-30 22:31:46
---
## 文件头部配置
### Page Front-matter

| 写法 | 解释 |
| --- | --- |
| title | 【必需】页面标题 |
| date | 【必需】页面创建日期 |
| type | 【必需】标籤、分类和友情链接三个页面需要配置 |
| updated | 【可选】页面更新日期 |
| description | 【可选】页面描述 |
| keywords | 【可选】页面关键字 |
| comments | 【可选】显示页面评论模块(默认 true) |
| top_img | 【可选】页面顶部图片 |
| mathjax | 【可选】显示 mathjax(当设置 mathjax 的 per_page: false 时，才需要配置，默认 false) |
| katex | 【可选】显示 katex(当设置 katex 的 per_page: false 时，才需要配置，默认 false) |
| aside | 【可选】显示侧边栏 (默认 true) |
| aplayer | 【可选】在需要的页面加载 aplayer 的 js 和 css,请参考文章下面的`音乐` 配置 |
| highlight_shrink | 【可选】配置代码框是否展开(true/false)(默认为设置中 highlight_shrink 的配置) |

### Post Front-matter

| 写法 | 解释 |
| --- | --- |
| title | 【必需】文章标题 |
| date | 【必需】文章创建日期 |
| updated | 【可选】文章更新日期 |
| tags | 【可选】文章标籤 |
| categories | 【可选】文章分类 |
| keywords | 【可选】文章关键字 |
| description | 【可选】文章描述 |
| top_img | 【可选】文章顶部图片 |
| cover | 【可选】文章缩略图(如果没有设置 top_img,文章页顶部将显示缩略图，可设为 false/图片地址/留空) |
| comments | 【可选】显示文章评论模块(默认 true) |
| toc | 【可选】显示文章 TOC(默认为设置中 toc 的 enable 配置) |
| toc_number | 【可选】显示 toc_number(默认为设置中 toc 的 number 配置) |
| copyright | 【可选】显示文章版权模块(默认为设置中 post_copyright 的 enable 配置) |
| copyright_author | 【可选】文章版权模块的`文章作者` |
| copyright_author_href | 【可选】文章版权模块的`文章作者`链接 |
| copyright_url | 【可选】文章版权模块的`文章连结`链接 |
| copyright_info | 【可选】文章版权模块的`版权声明`文字 |
| mathjax | 【可选】显示 mathjax(当设置 mathjax 的 per_page: false 时，才需要配置，默认 false) |
| katex | 【可选】显示 katex(当设置 katex 的 per_page: false 时，才需要配置，默认 false) |
| aplayer | 【可选】在需要的页面加载 aplayer 的 js 和 css,请参考文章下面的`音乐` 配置 |
| highlight_shrink | 【可选】配置代码框是否展开(true/false)(默认为设置中 highlight_shrink 的配置) |
| aside | 【可选】显示侧边栏 (默认 true) |
| hide | 【可选】隐藏文章 |
| sticky | 【可选】文章置顶，值越大越考上 |

***
## 外挂标签Note

### 内置图标

{% tabs note %}

<!-- tab simple -->
```
{% note simple %}
默认 提示块标签
{% endnote %}

{% note default simple %}
default 提示块标签
{% endnote %}

{% note primary simple %}
primary 提示块标签
{% endnote %}

{% note success simple %}
success 提示块标签
{% endnote %}

{% note info simple %}
info 提示块标签
{% endnote %}

{% note warning simple %}
warning 提示块标签
{% endnote %}

{% note danger simple %}
danger 提示块标签
{% endnote %}
```


{% note simple %}
默认 提示块标签
{% endnote %}

{% note default simple %}
default 提示块标签
{% endnote %}

{% note primary simple %}
primary 提示块标签
{% endnote %}

{% note success simple %}
success 提示块标签
{% endnote %}

{% note info simple %}
info 提示块标签
{% endnote %}

{% note warning simple %}
warning 提示块标签
{% endnote %}

{% note danger simple %}
danger 提示块标签
{% endnote %}


<!-- endtab -->

<!-- tab modern -->

```
{% note modern %}
默认 提示块标签
{% endnote %}

{% note default modern %}
default 提示块标签
{% endnote %}

{% note primary modern %}
primary 提示块标签
{% endnote %}

{% note success modern %}
success 提示块标签
{% endnote %}

{% note info modern %}
info 提示块标签
{% endnote %}

{% note warning modern %}
warning 提示块标签
{% endnote %}

{% note danger modern %}
danger 提示块标签
{% endnote %}
```

{% note modern %}
默认 提示块标签
{% endnote %}

{% note default modern %}
default 提示块标签
{% endnote %}

{% note primary modern %}
primary 提示块标签
{% endnote %}

{% note success modern %}
success 提示块标签
{% endnote %}

{% note info modern %}
info 提示块标签
{% endnote %}

{% note warning modern %}
warning 提示块标签
{% endnote %}

{% note danger modern %}
danger 提示块标签
{% endnote %}

<!-- endtab -->

<!-- tab flat -->
```
{% note flat %}
默认 提示块标签
{% endnote %}

{% note default flat %}
default 提示块标签
{% endnote %}

{% note primary flat %}
primary 提示块标签
{% endnote %}

{% note success flat %}
success 提示块标签
{% endnote %}

{% note info flat %}
info 提示块标签
{% endnote %}

{% note warning flat %}
warning 提示块标签
{% endnote %}

{% note danger flat %}
danger 提示块标签
{% endnote %}
```

{% note flat %}
默认 提示块标签
{% endnote %}

{% note default flat %}
default 提示块标签
{% endnote %}

{% note primary flat %}
primary 提示块标签
{% endnote %}

{% note success flat %}
success 提示块标签
{% endnote %}

{% note info flat %}
info 提示块标签
{% endnote %}

{% note warning flat %}
warning 提示块标签
{% endnote %}

{% note danger flat %}
danger 提示块标签
{% endnote %}

<!-- endtab -->

<!-- tab disabled -->

```
{% note disabled %}
默认 提示块标签
{% endnote %}

{% note default disabled %}
default 提示块标签
{% endnote %}

{% note primary disabled %}
primary 提示块标签
{% endnote %}

{% note success disabled %}
success 提示块标签
{% endnote %}

{% note info disabled %}
info 提示块标签
{% endnote %}

{% note warning disabled %}
warning 提示块标签
{% endnote %}

{% note danger disabled %}
danger 提示块标签
{% endnote %}
```

{% note disabled %}
默认 提示块标签
{% endnote %}

{% note default disabled %}
default 提示块标签
{% endnote %}

{% note primary disabled %}
primary 提示块标签
{% endnote %}

{% note success disabled %}
success 提示块标签
{% endnote %}

{% note info disabled %}
info 提示块标签
{% endnote %}

{% note warning disabled %}
warning 提示块标签
{% endnote %}

{% note danger disabled %}
danger 提示块标签
{% endnote %}


<!-- endtab -->

<!-- tab no-icon -->
```
{% note no-icon %}
默认 提示块标签
{% endnote %}

{% note default no-icon %}
default 提示块标签
{% endnote %}

{% note primary no-icon %}
primary 提示块标签
{% endnote %}

{% note success no-icon %}
success 提示块标签
{% endnote %}

{% note info no-icon %}
info 提示块标签
{% endnote %}

{% note warning no-icon %}
warning 提示块标签
{% endnote %}

{% note danger no-icon %}
danger 提示块标签
{% endnote %}
```

{% note no-icon %}
默认 提示块标签
{% endnote %}

{% note default no-icon %}
default 提示块标签
{% endnote %}

{% note primary no-icon %}
primary 提示块标签
{% endnote %}

{% note success no-icon %}
success 提示块标签
{% endnote %}

{% note info no-icon %}
info 提示块标签
{% endnote %}

{% note warning no-icon %}
warning 提示块标签
{% endnote %}

{% note danger no-icon %}
danger 提示块标签
{% endnote %}

<!-- endtab -->

{% endtabs %}







### 自定义图标


{% tabs note %}

<!-- tab simple -->

```
{% note 'fab fa-cc-visa' simple %}
你是刷 Visa 还是是 UnionPay
{% endnote %}
{% note red 'fas fa-bullhorn' simple %}
2021 年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' simple %}
小心开车 安全至上
{% endnote %}
{% note green 'fas fa-fan' simple%}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' simple %}
该充电了哦！
{% endnote %}
{% note purple 'far fa-hand-scissors' simple %}
剪刀石頭布
{% endnote %}
{% note blue 'fab fa-internet-explorer' simple %}
前端最討厭的瀏覽器
{% endnote %}
```
{% note 'fab fa-cc-visa' simple %}
你是刷 Visa 还是是 UnionPay
{% endnote %}
{% note red 'fas fa-bullhorn' simple %}
2021 年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' simple %}
小心开车 安全至上
{% endnote %}
{% note green 'fas fa-fan' simple%}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' simple %}
该充电了哦！
{% endnote %}
{% note purple 'far fa-hand-scissors' simple %}
剪刀石頭布
{% endnote %}
{% note blue 'fab fa-internet-explorer' simple %}
前端最討厭的瀏覽器
{% endnote %}


<!-- endtab -->
<!-- tab modern -->

```
{% note 'fab fa-cc-visa' modern %}
你是刷 Visa 还是是 UnionPay
{% endnote %}
{% note red 'fas fa-bullhorn' modern %}
2021 年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' modern %}
小心开车 安全至上
{% endnote %}
{% note green 'fas fa-fan' modern%}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' modern %}
该充电了哦！
{% endnote %}
{% note purple 'far fa-hand-scissors' modern %}
剪刀石頭布
{% endnote %}
{% note blue 'fab fa-internet-explorer' modern %}
前端最討厭的瀏覽器
{% endnote %}
```
{% note 'fab fa-cc-visa' modern %}
你是刷 Visa 还是是 UnionPay
{% endnote %}
{% note red 'fas fa-bullhorn' modern %}
2021 年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' modern %}
小心开车 安全至上
{% endnote %}
{% note green 'fas fa-fan' modern%}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' modern %}
该充电了哦！
{% endnote %}
{% note purple 'far fa-hand-scissors' modern %}
剪刀石頭布
{% endnote %}
{% note blue 'fab fa-internet-explorer' modern %}
前端最討厭的瀏覽器
{% endnote %}



<!-- endtab -->
<!-- tab flat -->

```
{% note 'fab fa-cc-visa' flat %}
你是刷 Visa 还是是 UnionPay
{% endnote %}
{% note red 'fas fa-bullhorn' flat %}
2021 年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' flat %}
小心开车 安全至上
{% endnote %}
{% note green 'fas fa-fan' flat%}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' flat %}
该充电了哦！
{% endnote %}
{% note purple 'far fa-hand-scissors' flat %}
剪刀石頭布
{% endnote %}
{% note blue 'fab fa-internet-explorer' flat %}
前端最討厭的瀏覽器
{% endnote %}
```

{% note 'fab fa-cc-visa' flat %}
你是刷 Visa 还是是 UnionPay
{% endnote %}
{% note red 'fas fa-bullhorn' flat %}
2021 年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' flat %}
小心开车 安全至上
{% endnote %}
{% note green 'fas fa-fan' flat%}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' flat %}
该充电了哦！
{% endnote %}
{% note purple 'far fa-hand-scissors' flat %}
剪刀石頭布
{% endnote %}
{% note blue 'fab fa-internet-explorer' flat %}
前端最討厭的瀏覽器
{% endnote %}

<!-- endtab -->
<!-- tab disabled -->


```
{% note 'fab fa-cc-visa' disabled  %}
你是刷 Visa 还是是 UnionPay
{% endnote %}
{% note red 'fas fa-bullhorn' disabled  %}
2021 年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' disabled  %}
小心开车 安全至上
{% endnote %}
{% note green 'fas fa-fan' disabled %}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' disabled  %}
该充电了哦！
{% endnote %}
{% note purple 'far fa-hand-scissors' disabled  %}
剪刀石頭布
{% endnote %}
{% note blue 'fab fa-internet-explorer' disabled  %}
前端最討厭的瀏覽器
{% endnote %}
```

{% note 'fab fa-cc-visa' disabled  %}
你是刷 Visa 还是是 UnionPay
{% endnote %}
{% note red 'fas fa-bullhorn' disabled  %}
2021 年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' disabled  %}
小心开车 安全至上
{% endnote %}
{% note green 'fas fa-fan' disabled %}
这是三片呢？还是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' disabled  %}
该充电了哦！
{% endnote %}
{% note purple 'far fa-hand-scissors' disabled  %}
剪刀石頭布
{% endnote %}
{% note blue 'fab fa-internet-explorer' disabled  %}
前端最討厭的瀏覽器
{% endnote %}

<!-- endtab -->
<!-- tab no-icon -->
```
{% note no-icon %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note blue no-icon %}
2021 年快到了....
{% endnote %}
{% note pink no-icon %}
小心开车 安全至上
{% endnote %}
{% note red no-icon %}
这是三片呢？还是四片？
{% endnote %}
{% note orange no-icon %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note purple no-icon %}
剪刀石头布
{% endnote %}
{% note green no-icon %}
前端最讨厌的浏览器
{% endnote %}
```

{% note no-icon %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note blue no-icon %}
2021 年快到了....
{% endnote %}
{% note pink no-icon %}
小心开车 安全至上
{% endnote %}
{% note red no-icon %}
这是三片呢？还是四片？
{% endnote %}
{% note orange no-icon %}
你是刷 Visa 还是 UnionPay
{% endnote %}
{% note purple no-icon %}
剪刀石头布
{% endnote %}
{% note green no-icon %}
前端最讨厌的浏览器
{% endnote %}

<!-- endtab -->

{% endtabs %}

***





***


## Tabs标签

```
{% tabs note %}
<!-- tab 标签语法-->

<!-- endtab -->

<!-- tab 配置参数 -->

<!-- endtab -->

<!-- tab 样式预览 -->


<!-- endtab -->

<!-- tab 示例源码 -->

<!-- endtab -->
{% endtabs %}
```
```
{% tabs Unique name, [index] %}

<!-- tab [Tab caption] [@icon] -->

Any content (support inline tags too).

<!-- endtab -->

{% endtabs %}

Unique name : Unique name of tabs block tag without comma.
Will be used in #id's as prefix for each tab with their index numbers.
If there are whitespaces in name, for generate #id all whitespaces will replaced by dashes.
Only for current url of post/page must be unique!
[index] : Index number of active tab.
If not specified, first tab (1) will be selected.
If index is -1, no tab will be selected. It's will be something like spoiler.
Optional parameter.
[Tab caption] : Caption of current tab.
If not caption specified, unique name with tab index suffix will be used as caption of tab.
If not caption specified, but specified icon, caption will empty.
Optional parameter.
[@icon] : FontAwesome icon name (full-name, look like 'fas fa-font')
Can be specified with or without space; e.g. 'Tab caption @icon' similar to 'Tab caption@icon'.
Optional parameter.
```
###  预设方案 1：预设选择第一个【默认】
```
{% tabs test1 %}

<!-- tab -->

**This is Tab 1.**

<!-- endtab -->

<!-- tab -->

**This is Tab 2.**

<!-- endtab -->

<!-- tab -->

**This is Tab 3.**

<!-- endtab -->

{% endtabs %}
```
{% tabs test1 %}

<!-- tab -->

**This is Tab 1.**

<!-- endtab -->

<!-- tab -->

**This is Tab 2.**

<!-- endtab -->

<!-- tab -->

**This is Tab 3.**

<!-- endtab -->

{% endtabs %}
###  预设方案 2：预设选择 tabs
```
{% tabs test2, 3 %}

<!-- tab -->

**This is Tab 1.**

<!-- endtab -->

<!-- tab -->

**This is Tab 2.**

<!-- endtab -->

<!-- tab -->

**This is Tab 3.**

<!-- endtab -->

{% endtabs %}
```
{% tabs test2, 3 %}

<!-- tab -->

**This is Tab 1.**

<!-- endtab -->

<!-- tab -->

**This is Tab 2.**

<!-- endtab -->

<!-- tab -->

**This is Tab 3.**

<!-- endtab -->

{% endtabs %}


### 预设方案 3：没有预设值
```
{% tabs test3, -1 %}

<!-- tab -->

**This is Tab 1.**

<!-- endtab -->

<!-- tab -->

**This is Tab 2.**

<!-- endtab -->

<!-- tab -->

**This is Tab 3.**

<!-- endtab -->

{% endtabs %}
```
{% tabs test3, -1 %}

<!-- tab -->

**This is Tab 1.**

<!-- endtab -->

<!-- tab -->

**This is Tab 2.**

<!-- endtab -->

<!-- tab -->

**This is Tab 3.**

<!-- endtab -->

{% endtabs %}


### 预设方案 4：自定义 Tab 名 + 只有 icon + icon 和 Tab 名
```
{% tabs test4 %}
<!-- tab 第一个Tab -->
**tab名字为第一个Tab**
<!-- endtab -->

<!-- tab @fab fa-apple-pay -->
**只有图标 没有Tab名字**
<!-- endtab -->

<!-- tab 炸弹@fas fa-bomb -->
**名字+icon**
<!-- endtab -->
{% endtabs %}
```
{% tabs test2 %}
<!-- tab 第一个Tab -->
**tab名字为第一个Tab**
<!-- endtab -->

<!-- tab @fab fa-apple-pay -->
**只有图标 没有Tab名字**
<!-- endtab -->

<!-- tab 炸弹@fas fa-bomb -->
**名字+icon**
<!-- endtab -->
{% endtabs %}

***
## 上标标签 tip


{% tabs note %}
<!-- tab 标签语法 -->
```
{% tip [参数，可选] %}文本内容{% endtip %}
```
<!-- endtab -->

<!-- tab 配置参数 -->
```
1. 样式: success,error,warning,bolt,ban,home,sync,cogs,key,bell
2. 自定义图标: 支持fontawesome。。
```
1. 样式: success,error,warning,bolt,ban,home,sync,cogs,key,bell
2. 自定义图标: 支持fontawesome。
<!-- endtab -->

<!-- tab 样式预览 -->
{% tip %}默认情况{% endtip %}
{% tip success %}success{% endtip %}
{% tip error %}error{% endtip %}
{% tip warning %}warning{% endtip %}
{% tip bolt %}bolt{% endtip %}
{% tip ban %}ban{% endtip %}
{% tip home %}home{% endtip %}
{% tip sync %}sync{% endtip %}
{% tip cogs %}cogs{% endtip %}
{% tip key %}key{% endtip %}
{% tip bell %}bell{% endtip %}
{% tip fa-atom %}自定义font awesome图标{% endtip %}

<!-- endtab -->

<!-- tab 示例源码 -->
```
{% tip %}默认情况{% endtip %}
{% tip success %}success{% endtip %}
{% tip error %}error{% endtip %}
{% tip warning %}warning{% endtip %}
{% tip bolt %}bolt{% endtip %}
{% tip ban %}ban{% endtip %}
{% tip home %}home{% endtip %}
{% tip sync %}sync{% endtip %}
{% tip cogs %}cogs{% endtip %}
{% tip key %}key{% endtip %}
{% tip bell %}bell{% endtip %}
{% tip fa-atom %}自定义font awesome图标{% endtip %}
```
<!-- endtab -->
{% endtabs %}







***


## 行内文本样式


{% tabs note %}
<!-- tab 下划线 -->
```
<u>下划线</u>
```
<u>下划线</u>
<!-- endtab -->

<!-- tab 着重线 -->
```
<emp>着重线</emp>
```
<emp>着重线</emp>
<!-- endtab -->

<!-- tab 波浪线 -->
```
<wavy>波浪线</wavy>
```
<wavy>波浪线</wavy>
<!-- endtab -->

<!-- tab 删除线 -->
```
<del>删除线</del>
```
<del>删除线</del>
<!-- endtab -->

<!-- tab 按键 -->
```
<kbd>command</kbd>
```
<kbd>command</kbd>
<!-- endtab -->

<!-- tab 隐藏框 -->
```
<psw>这里没有验证码</psw>
```
<psw>这里没有验证码</psw>
<!-- endtab -->

{% endtabs %}


***




## 行内文本 span

{% tabs note %}
<!-- tab 标签语法-->
```
{% span 样式参数(参数以空格划分), 文本内容 %}
```
<!-- endtab -->

<!-- tab 配置参数 -->
1. 字体: logo, code
2. 颜色: red,yellow,green,cyan,blue,gray
3. 大小: small, h4, h3, h2, h1, large, huge, ultra
4. 对齐方向: left, center, right
<!-- endtab -->

<!-- tab 样式预览 -->
- 彩色文字
在一段话中方便插入各种颜色的标签，包括：{% span red, 红色 %}、{% span yellow, 黄色 %}、{% span green, 绿色 %}、{% span cyan, 青色 %}、{% span blue, 蓝色 %}、{% span gray, 灰色 %}。
- 超大号文字
文档「开始」页面中的标题部分就是超大号文字。
{% span center logo  red large, Volantis %}
{% span center blue small, A Wonderful Theme for Hexo %}
<!-- endtab -->

<!-- tab 示例源码 -->
```
- 彩色文字
在一段话中方便插入各种颜色的标签，包括：{% span red, 红色 %}、{% span yellow, 黄色 %}、{% span green, 绿色 %}、{% span cyan, 青色 %}、{% span blue, 蓝色 %}、{% span gray, 灰色 %}。
- 超大号文字
文档「开始」页面中的标题部分就是超大号文字。
{% span center logo  red large, Volantis %}
{% span center blue small, A Wonderful Theme for Hexo %}
```
<!-- endtab -->
{% endtabs %}


***

```HTML
<span class="inline-tag [red|green|blue|yellow|grey]">语法</span>
<span class="inline-tag red">红色小标签</span>
<span class="inline-tag green">绿色小标签</span>
<span class="inline-tag blue">蓝色小标签</span>
<span class="inline-tag yellow">黄色小标签</span>
<span class="inline-tag grey">灰色小标签</span>
```

<span class="inline-tag red">红色小标签</span>&nbsp;<span class="inline-tag green">绿色小标签</span>&nbsp;<span class="inline-tag blue">蓝色小标签</span>&nbsp;<span class="inline-tag yellow">黄色小标签</span>&nbsp;<span class="inline-tag grey">灰色小标签</span>


```
<span class="inline-tag" style="--Color:#9c9">自定义颜色小标签</span>
```

<span class="inline-tag" style="--Color:#9c9">自定义颜色小标签</span>


***



## label标签
```
{% label 红色小标签 red %}
{% label 绿色小标签 green %}
{% label 蓝色小标签  blue %}
{% label 黄色小标签 yellow %}
{% label 灰色小标签 grey %}
```
{% label 红色小标签 red %}&nbsp;{% label 绿色小标签 green %}&nbsp;{% label 蓝色小标签  blue %}&nbsp;{% label 黄色小标签 yellow %}&nbsp;{% label 灰色小标签 grey %}



***



{% tabs note %}
<!-- tab 标签语法-->
```
{% label text color %}
```
<!-- endtab -->

<!-- tab 配置参数 -->
label标签参数配置：

| 参数                                      | 解释                        |
| ----------------------------------------- | --------------------------- |
| text                                      | 文字                        |
| color                                     | 可选背景颜色，默认`default`    可选参数有：`default/blue/pink/red/purple/orange/green` |  
<!-- endtab -->

<!-- tab 样式预览 -->
臣亮言：{% label 先帝 %}創業未半，而{% label 中道崩殂 blue %}。今天下三分，{% label 益州疲敝 pink %}，此誠{% label 危急存亡之秋 red %}也！然侍衞之臣，不懈於內；{% label 忠志之士 purple %}，忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。誠宜開張聖聽，以光先帝遺德，恢弘志士之氣；不宜妄自菲薄，引喻失義，以塞忠諫之路也。
宮中、府中，俱為一體；陟罰臧否，不宜異同。若有{% label 作奸 orange %}、{% label 犯科 green %}，及為忠善者，宜付有司，論其刑賞，以昭陛下平明之治；不宜偏私，使內外異法也。
<!-- endtab -->

<!-- tab 示例源码 -->
```
臣亮言：{% label 先帝 %}創業未半，而{% label 中道崩殂 blue %}。今天下三分，{% label 益州疲敝 pink %}，此誠{% label 危急存亡之秋 red %}也！然侍衞之臣，不懈於內；{% label 忠志之士 purple %}，忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。誠宜開張聖聽，以光先帝遺德，恢弘志士之氣；不宜妄自菲薄，引喻失義，以塞忠諫之路也。
宮中、府中，俱為一體；陟罰臧否，不宜異同。若有{% label 作奸 orange %}、{% label 犯科 green %}，及為忠善者，宜付有司，論其刑賞，以昭陛下平明之治；不宜偏私，使內外異法也。
```
<!-- endtab -->
{% endtabs %}



























***




## 上下左右边框

```
<p class="div-border [left|right|top|bottom] [red|green|blue|yellow|grey]">
  语法
</p>
<p class="div-border top red">上边框</p>
<p class="div-border right red">右边框</p>
<p class="div-border bottom red">下边框</p>
<p class="div-border left red">左边框</p>
```
<p class="div-border top red">上边框</p>
<p class="div-border right red">右边框</p>
<p class="div-border bottom red">下边框</p>
<p class="div-border left red">左边框</p>

预设颜色分别为`red`、`green`、`blue`、`yellow`、`grey`也就是小标签的五种颜色

自定义颜色

```
<p class="div-border left style="--Color:#881B12"">左边框</p>
```
<p class="div-border left style="--Color:#881B12"">左边框</p>

***

## 全边框及自定义颜色

```
<p
  class="div-border"
  style="background-color: rgba(82,196,26,.1);border: 1px solid #52c41a;border-radius: 4rem;"
>
  全边框
</p>
/* 或者如下写法 */
<p
  style="background-color: rgba(82,196,26,.1);border: 1px solid #52c41a;border-radius: 4rem;display: block;padding: 10px;"
>
  全边框
</p>
/* 内置样式 */
<p class="div-border green">绿色</p>
<p class="div-border red">红色</p>
<p class="div-border yellow">黄色</p>
<p class="div-border grey">灰色</p>
<p class="div-border blue">蓝色</p>
```

<p
  class="div-border"
  style="background-color: rgba(82,196,26,.1);border: 1px solid #52c41a;border-radius: 1px;"
>
  全边框
</p>

<p class="div-border green">绿色</p>
<p class="div-border red">红色</p>
<p class="div-border yellow">黄色</p>
<p class="div-border grey">灰色</p>
<p class="div-border blue">蓝色</p>


***
## 几款漂亮的css美化框
```
<div id="zm_mhz"> 迷幻紫</div>
<div id="zm_xgh"> 西瓜红</div>
<div id="zm_tkzj">天空之境</div>
<div id="zm_gll">撖榄绿</div>
<div id="zm_yyz">优雅紫</div>
```
<div id="zm_mhz"> 迷幻紫</div>
<div id="zm_xgh"> 西瓜红</div>
<div id="zm_tkzj">天空之境</div>
<div id="zm_gll">撖榄绿</div>
<div id="zm_yyz">优雅紫</div>






***
##  Checkbox & Radio


{% tabs note %}
<!-- tab 标签语法-->
```
{% checkbox 样式参数（可选）, 文本（支持简单md） %}
```
<!-- endtab -->

<!-- tab 配置参数 -->
1. 样式: plus, minus, times
2. 颜色: red ,yellow, green, cyan, blue, gray, gray
3. 选中状态: checked
<!-- endtab -->

<!-- tab 样式预览 -->
{% checkbox 纯文本测试 %}
{% checkbox checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% checkbox red, 支持自定义颜色 %}
{% checkbox green checked, 绿色 + 默认选中 %}
{% checkbox yellow checked, 黄色 + 默认选中 %}
{% checkbox cyan checked, 青色 + 默认选中 %}
{% checkbox blue checked, 蓝色 + 默认选中 %}
{% checkbox plus green checked, 增加 %}
{% checkbox minus yellow checked, 减少 %}
{% checkbox times red checked, 叉 %}
{% radio 纯文本测试 %}
{% radio checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% radio red, 支持自定义颜色 %}
{% radio green, 绿色 %}
{% radio yellow, 黄色 %}
{% radio cyan, 青色 %}
{% radio blue, 蓝色 %}
<!-- endtab -->

<!-- tab 示例源码 -->

```
{% checkbox 纯文本测试 %}
{% checkbox checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% checkbox red, 支持自定义颜色 %}
{% checkbox green checked, 绿色 + 默认选中 %}
{% checkbox yellow checked, 黄色 + 默认选中 %}
{% checkbox cyan checked, 青色 + 默认选中 %}
{% checkbox blue checked, 蓝色 + 默认选中 %}
{% checkbox plus green checked, 增加 %}
{% checkbox minus yellow checked, 减少 %}
{% checkbox times red checked, 叉 %}
{% radio 纯文本测试 %}
{% radio checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% radio red, 支持自定义颜色 %}
{% radio green, 绿色 %}
{% radio yellow, 黄色 %}
{% radio cyan, 青色 %}
{% radio blue, 蓝色 %}
```
<!-- endtab -->
{% endtabs %}








***





## 时间轴

{% tabs note %}
<!-- tab 标签语法-->
```
{% timeline title,color %}
<!-- timeline title -->
xxxxx
<!-- endtimeline -->
<!-- timeline title -->
xxxxx
<!-- endtimeline -->
{% endtimeline %}
```
<!-- endtab -->

<!-- tab 配置参数 -->
1. 标题：title
2. 颜色：default(留空) / blue / pink / red / purple / orange / green
<!-- endtab -->

<!-- tab 样式预览 -->
{% timeline 2022 %}
<!-- timeline 01-02 -->
这是测试页面
<!-- endtimeline -->
{% endtimeline %}

{% timeline 2022,blue %}
<!-- timeline 01-02 -->
这是测试页面
<!-- endtimeline -->
{% endtimeline %}

{% timeline 2022,pink %}
<!-- timeline 01-02 -->
这是测试页面
<!-- endtimeline -->
{% endtimeline %}

{% timeline 2022,red %}
<!-- timeline 01-02 -->
这是测试页面
<!-- endtimeline -->
{% endtimeline %}

{% timeline 2022,purple %}
<!-- timeline 01-02 -->
这是测试页面
<!-- endtimeline -->
{% endtimeline %}

{% timeline 2022,orange %}
<!-- timeline 01-02 -->
这是测试页面
<!-- endtimeline -->
{% endtimeline %}

{% timeline 2022,green %}
<!-- timeline 01-02 -->
这是测试页面
<!-- endtimeline -->
{% endtimeline %}

<!-- endtab -->

<!-- tab 示例源码 -->
```
{% timeline 2022 %}
<!-- timeline 01-02 -->
这是测试页面
<!-- endtimeline -->
{% endtimeline %}

{% timeline 2022,blue %}
<!-- timeline 01-02 -->
这是测试页面
<!-- endtimeline -->
{% endtimeline %}

{% timeline 2022,pink %}
<!-- timeline 01-02 -->
这是测试页面
<!-- endtimeline -->
{% endtimeline %}

{% timeline 2022,red %}
<!-- timeline 01-02 -->
这是测试页面
<!-- endtimeline -->
{% endtimeline %}

{% timeline 2022,purple %}
<!-- timeline 01-02 -->
这是测试页面
<!-- endtimeline -->
{% endtimeline %}

{% timeline 2022,orange %}
<!-- timeline 01-02 -->
这是测试页面
<!-- endtimeline -->
{% endtimeline %}

{% timeline 2022,green %}
<!-- timeline 01-02 -->
这是测试页面
<!-- endtimeline -->
{% endtimeline %}
```
<!-- endtab -->
{% endtabs %}




***




{% tabs note %}
<!-- tab 标签语法-->
```
{% timeline 时间节点标题,颜色 %}

<!-- timeline 时间节点 -->

正文内容

<!-- endtimeline -->

{% endtimeline %}
```
<!-- endtab -->

<!-- tab 配置参数 -->
1. 标题：title
2. 颜色：default(留空) / blue / pink / red / purple / orange / green
<!-- endtab -->

<!-- tab 样式预览 -->
{% timeline 2022,red %}

<!-- timeline 01-02 -->

這是測試頁面

<!-- endtimeline -->

{% endtimeline %}

<!-- endtab -->

<!-- tab 示例源码 -->
```
{% timeline 2022,red %}

<!-- timeline 01-02 -->

這是測試頁面

<!-- endtimeline -->

{% endtimeline %}
```
<!-- endtab -->
{% endtabs %}
















***
## Link



{% tabs note %}
<!-- tab 标签语法-->
```
{% link 标题, 链接, 图片 %}
```
<!-- endtab -->

<!-- tab 配置参数 -->

<!-- endtab -->

<!-- tab 样式预览 -->
{% link Butterfly,https://butterfly.wiki,https://butterfly.wiki/img/favicon.ico %}{% link Butterfly,https://butterfly.wiki,https://butterfly.wiki/img/favicon.ico %}{% link Butterfly,https://butterfly.wiki,https://butterfly.wiki/img/favicon.ico %}{% link Butterfly,https://butterfly.wiki,https://butterfly.wiki/img/favicon.ico %}{% link Butterfly,https://butterfly.wiki,https://butterfly.wiki/img/favicon.ico %}{% link Butterfly,https://butterfly.wiki,https://butterfly.wiki/img/favicon.ico %}
<!-- endtab -->

<!-- tab 示例源码 -->
```
{% link Butterfly,https://butterfly.wiki,https://butterfly.wiki/img/favicon.ico %}
```
<!-- endtab -->
{% endtabs %}


***


## flink

{% tabs note %}
<!-- tab 标签语法-->
```
{% flink %}
xxxxxx
{% endflink %}
```
<!-- endtab -->

<!-- tab 配置参数 -->

<!-- endtab -->

<!-- tab 样式预览 -->
{% flink %}
- class_name: 友情链接
  class_desc: 那些人，那些事
  link_list:
    - name: JerryC
      link: https://jerryc.me/
      avatar: https://jerryc.me/img/avatar.png
      descr: 今日事,今日毕
    - name: Hexo
      link: https://hexo.io/zh-tw/
      avatar: https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg
      descr: 快速、简单且强大的网誌框架

- class_name: 网站
  class_desc: 值得推荐的网站
  link_list:
    - name: Youtube
      link: https://www.youtube.com/
      avatar: https://i.loli.net/2020/05/14/9ZkGg8v3azHJfM1.png
      descr: 视频网站
    - name: Weibo
      link: https://www.weibo.com/
      avatar: https://i.loli.net/2020/05/14/TLJBum386vcnI1P.png
      descr: 中国最大社交分享平台
    - name: Twitter
      link: https://twitter.com/
      avatar: https://i.loli.net/2020/05/14/5VyHPQqR6LWF39a.png
      descr: 社交分享平台
      {% endflink %}

<!-- endtab -->

<!-- tab 示例源码 -->
```
{% flink %}
- class_name: 友情链接
  class_desc: 那些人，那些事
  link_list:
    - name: JerryC
      link: https://jerryc.me/
      avatar: https://jerryc.me/img/avatar.png
      descr: 今日事,今日毕
    - name: Hexo
      link: https://hexo.io/zh-tw/
      avatar: https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg
      descr: 快速、简单且强大的网誌框架

- class_name: 网站
  class_desc: 值得推荐的网站
  link_list:
    - name: Youtube
      link: https://www.youtube.com/
      avatar: https://i.loli.net/2020/05/14/9ZkGg8v3azHJfM1.png
      descr: 视频网站
    - name: Weibo
      link: https://www.weibo.com/
      avatar: https://i.loli.net/2020/05/14/TLJBum386vcnI1P.png
      descr: 中国最大社交分享平台
    - name: Twitter
      link: https://twitter.com/
      avatar: https://i.loli.net/2020/05/14/5VyHPQqR6LWF39a.png
      descr: 社交分享平台
{% endflink %}
```
<!-- endtab -->
{% endtabs %}








***



## 按钮

```
{% btn [url],[text],[icon],[color] [style] [layout] [position] [size] %}
```

| Option        | Default      | Description  |
| ------------- | ------------ | ------------------------------------------------------------ |
|  [url]        | 必选| 链接|  
|  [text]       | 必选  | 按钮文字| 
|  [icon]      |  可选 |  图标| 
|  [color]       | 可选| 按钮背景顔色(默认style时  按钮字体和边框顔色(outline时)  default/blue/pink/red/purple/orange/green|
|  [style]      | 可选|  按钮样式 默认实心 outline/留空 | 
|  [layout]      | 可选| 按钮佈局 默认为line  block/留空| 
|  [position]    | 可选| 按钮位置 前提是设置了layout为block 默认为左边   center/right/留空| 
|  [size]        | 可选|  按钮大小 larger/留空| 


{% tabs note %}
<!-- tab Inline-->

```
This is my website, click the button {% btn 'https://butterfly.js.org',Butterfly %}
This is my website, click the button {% btn 'https://butterfly.js.org',Butterfly,,outline%}
```
This is my website, click the button {% btn 'https://butterfly.js.org',Butterfly %}
This is my website, click the button {% btn 'https://butterfly.js.org',Butterfly,,outline%}
<!-- endtab -->

<!-- tab Block -->
```
This is my website, click the button  {% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,block larger %}
This is my website, click the button  {% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,block center larger %}
This is my website, click the button  {% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,block right blue larger %}
```
This is my website, click the button  {% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,block larger %}
This is my website, click the button  {% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,block center larger %}
This is my website, click the button  {% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,block right blue larger %}
<!-- endtab -->

<!-- tab Option -->
```
<div class="btn-center">
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,blue larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,pink larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,red larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,purple larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,orange larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,green larger %}
</div>
```
<div class="btn-center">
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,blue larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,pink larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,red larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,purple larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,orange larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,green larger %}
</div>
<!-- endtab -->

<!-- tab Option-outline -->
```
<div class="btn-center">
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline blue larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline pink larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline red larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline purple larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline orange larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline green larger %}
</div>
```
<div class="btn-center">
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline blue larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline pink larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline red larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline purple larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline orange larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline green larger %}
</div>
<!-- endtab -->
{% endtabs %}

***

```
{% btn 'https://butterfly.js.org',Butterfly,fas fa-code,blue block %}
{% btn 'https://butterfly.js.org',Butterfly,fas fa-lightbulb,pink block %}
{% btn 'https://butterfly.js.org',Butterfly,far fas fa-music,red block %}
```

{% btn 'https://butterfly.js.org',Butterfly,fas fa-code,blue block %}
{% btn 'https://butterfly.js.org',Butterfly,fas fa-lightbulb,pink block %}
{% btn 'https://butterfly.js.org',Butterfly,far fas fa-music,red block %}

***


## 引入图片
```
![Butterfly](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
```
![Butterfly](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
***

## Gallery相册图库

{% note info flat %}
- name：图库名字
- description：图库描述
- link：连接到对应相册的地址
- img-url：图库封面的地址
{% endnote %}

```
<div class="gallery-group-main">
{% galleryGroup name description link img-url %}
{% galleryGroup name description link img-url %}
{% galleryGroup name description link img-url %}
</div>
```
```
<div class="gallery-group-main">
{% galleryGroup '壁纸' '收藏的一些壁纸' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
{% galleryGroup '漫威' '关于漫威的图片' '/Gallery/marvel' https://i.loli.net/2019/12/25/8t97aVlp4hgyBGu.jpg %}
{% galleryGroup 'OH MY GIRL' '关于OH MY GIRL的图片' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>
```
<div class="gallery-group-main">
{% galleryGroup '壁纸' '收藏的一些壁纸' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
{% galleryGroup '漫威' '关于漫威的图片' '/Gallery/marvel' https://i.loli.net/2019/12/25/8t97aVlp4hgyBGu.jpg %}
{% galleryGroup 'OH MY GIRL' '关于OH MY GIRL的图片' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>

***

## 子页面图片
```
{% gallery %}
markdown 图片格式
{% endgallery %}
```
```
{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
![](https://i.loli.net/2019/12/25/gEy5Zc1Ai6VuO4N.jpg)
![](https://i.loli.net/2019/12/25/d6QHbytlSYO4FBG.jpg)
![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
{% endgallery %}
```

{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
![](https://i.loli.net/2019/12/25/gEy5Zc1Ai6VuO4N.jpg)
![](https://i.loli.net/2019/12/25/d6QHbytlSYO4FBG.jpg)
![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
{% endgallery %}
***




##  mermaid

{% note info flat %}
使用 mermaid 标签可以绘制 Flowchart（流程图）、Sequence diagram（时序图 ）、Class Diagram（类别图）、
State Diagram（状态图）、Gantt（甘特图）和 Pie Chart（圆形图），
具体可以查看 [mermaid 文档](https://mermaid-js.github.io/mermaid/#/)
{% endnote %}

{% tabs note %}
<!-- tab 标签语法-->
```
{% mermaid %}
内容
{% endmermaid %}
```
<!-- endtab -->

<!-- tab 配置参数 -->

<!-- endtab -->

<!-- tab 样式预览 -->

{% mermaid %}
pie
title Key elements in Product X
"Calcium" : 42.96
"Potassium" : 50.05
"Magnesium" : 10.01
"Iron" : 5
{% endmermaid %}

<!-- endtab -->

<!-- tab 示例源码 -->
```
{% mermaid %}
pie
title Key elements in Product X
"Calcium" : 42.96
"Potassium" : 50.05
"Magnesium" : 10.01
"Iron" : 5
{% endmermaid %}
```
<!-- endtab -->
{% endtabs %}


***



## github卡片 ghcard
{% tabs note %}
<!-- tab 标签语法-->
```
{% ghcard 用户名, 其它参数（可选） %}
{% ghcard 用户名/仓库, 其它参数（可选） %}
```
<!-- endtab -->

<!-- tab 配置参数 -->
更多参数可以参考：

使用,分割各个参数。写法为：参数名=参数值
以下只写几个常用参数值。
| 参数名 | 取值 | 释义 |
| --- | --- | --- |
| hide | stars,commits,prs,issues,contribs | 隐藏指定统计 |
| count_private | true | 将私人项目贡献添加到总提交计数中 |
| show_icons | true | 显示图标 |
| theme | 请查阅[Available Themes](https://github.com/anuraghazra/github-readme-stats/blob/master/themes/README.md) | 主题 |
<!-- endtab -->

<!-- tab 样式预览 -->

1. 用户信息卡片

| {% ghcard xaoxuu %} | {% ghcard xaoxuu, theme=vue %} |
| -- | -- |
| {% ghcard xaoxuu, theme=buefy %} | {% ghcard xaoxuu, theme=solarized-light %} |
| {% ghcard xaoxuu, theme=onedark %} | {% ghcard xaoxuu, theme=solarized-dark %} |
| {% ghcard xaoxuu, theme=algolia %} | {% ghcard xaoxuu, theme=calm %} |

2. 仓库信息卡片

| {% ghcard volantis-x/hexo-theme-volantis %} | {% ghcard volantis-x/hexo-theme-volantis, theme=vue %} |
| -- | -- |
| {% ghcard volantis-x/hexo-theme-volantis, theme=buefy %} | {% ghcard volantis-x/hexo-theme-volantis, theme=solarized-light %} |
| {% ghcard volantis-x/hexo-theme-volantis, theme=onedark %} | {% ghcard volantis-x/hexo-theme-volantis, theme=solarized-dark %} |
| {% ghcard volantis-x/hexo-theme-volantis, theme=algolia %} | {% ghcard volantis-x/hexo-theme-volantis, theme=calm %} |

<!-- endtab -->

<!-- tab 示例源码 -->

1. 用户信息卡片
```
| {% ghcard xaoxuu %} | {% ghcard xaoxuu, theme=vue %} |
| -- | -- |
| {% ghcard xaoxuu, theme=buefy %} | {% ghcard xaoxuu, theme=solarized-light %} |
| {% ghcard xaoxuu, theme=onedark %} | {% ghcard xaoxuu, theme=solarized-dark %} |
| {% ghcard xaoxuu, theme=algolia %} | {% ghcard xaoxuu, theme=calm %} |
```
2. 仓库信息卡片
```
| {% ghcard volantis-x/hexo-theme-volantis %} | {% ghcard volantis-x/hexo-theme-volantis, theme=vue %} |
| -- | -- |
| {% ghcard volantis-x/hexo-theme-volantis, theme=buefy %} | {% ghcard volantis-x/hexo-theme-volantis, theme=solarized-light %} |
| {% ghcard volantis-x/hexo-theme-volantis, theme=onedark %} | {% ghcard volantis-x/hexo-theme-volantis, theme=solarized-dark %} |
| {% ghcard volantis-x/hexo-theme-volantis, theme=algolia %} | {% ghcard volantis-x/hexo-theme-volantis, theme=calm %} |
```
<!-- endtab -->
{% endtabs %}
***
## github徽标ghbdage
{% tabs note %}
<!-- tab 标签语法-->
```
{% bdage [right],[left],[logo]||[color],[link],[title]||[option] %}
```
<!-- endtab -->

<!-- tab 配置参数 -->
1. left：徽标左边的信息，必选参数。
2. right: 徽标右边的信息，必选参数，
3. logo：徽标图标，图标名称详见simpleicons，可选参数。
4. color：徽标右边的颜色，可选参数。
5. link：指向的链接，可选参数。
6. title：徽标的额外信息，可选参数。主要用于优化SEO，但object标签不会像a标签一样在鼠标悬停显示title信息。
7. option：自定义参数，支持shields.io的全部API参数支持，具体参数可以参看上文中的拓展写法示例。形式为name1=value2&name2=value2。
<!-- endtab -->

<!-- tab 样式预览 -->
1. 基本参数
{% bdage Theme,Butterfly %}
{% bdage Frame,Hexo,hexo %}

2. 信息参数
{% bdage CDN,JsDelivr,jsDelivr||abcdef,https://metroui.org.ua/index.html,本站使用JsDelivr为静态资源提供CDN加速 %}
{% bdage Source,GitHub,GitHub||,https://github.com/ %}

3. 拓展参数
{% bdage Hosted,Vercel,Vercel||brightgreen,https://vercel.com/,本站采用双线部署，默认线路托管于Vercel||style=social&logoWidth=20 %}
{% bdage Hosted,Vercel,Vercel||||style=social&logoWidth=20&logoColor=violet %}
<!-- endtab -->

<!-- tab 示例源码 -->
本外挂标签的参数分为三组，用||分割。
1. 基本参数,定义徽标左右文字和图标
```
{% bdage Theme,Butterfly %}
{% bdage Frame,Hexo,hexo %}
```
2. 信息参数，定义徽标右侧内容背景色，指向链接
```
{% bdage CDN,JsDelivr,jsDelivr||abcdef,https://metroui.org.ua/index.html,本站使用JsDelivr为静态资源提供CDN加速 %}
//如果是跨顺序省略可选参数，仍然需要写个逗号,用作分割
{% bdage Source,GitHub,GitHub||,https://github.com/ %}
```
3. 拓展参数，支持shields的API的全部参数内容
```
{% bdage Hosted,Vercel,Vercel||brightgreen,https://vercel.com/,本站采用双线部署，默认线路托管于Vercel||style=social&logoWidth=20 %}
//如果是跨顺序省略可选参数组，仍然需要写双竖线||用作分割
{% bdage Hosted,Vercel,Vercel||||style=social&logoWidth=20&logoColor=violet %}
```
<!-- endtab -->
{% endtabs %}

***


## 网站卡片 sites


{% tabs note %}
<!-- tab 标签语法-->
```
{% sitegroup %}
{% site 标题, url=链接, screenshot=截图链接, avatar=头像链接（可选）, description=描述（可选） %}
{% site 标题, url=链接, screenshot=截图链接, avatar=头像链接（可选）, description=描述（可选） %}
{% endsitegroup %}
```
<!-- endtab -->

<!-- tab 配置参数 -->
<!-- endtab -->

<!-- tab 样式预览 -->
{% sitegroup %}
{% site xaoxuu, url=https://xaoxuu.com, screenshot=https://i.loli.net/2020/08/21/VuSwWZ1xAeUHEBC.jpg, avatar=https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png, description=简约风格 %}
{% site inkss, url=https://inkss.cn, screenshot=https://i.loli.net/2020/08/21/Vzbu3i8fXs6Nh5Y.jpg, avatar=https://cdn.jsdelivr.net/gh/inkss/common@master/static/web/avatar.jpg, description=这是一段关于这个网站的描述文字 %}
{% site MHuiG, url=https://blog.mhuig.top, screenshot=https://i.loli.net/2020/08/22/d24zpPlhLYWX6D1.png, avatar=https://cdn.jsdelivr.net/gh/MHuiG/imgbed@master/data/p.png, description=这是一段关于这个网站的描述文字 %}
{% site Colsrch, url=https://colsrch.top, screenshot=https://i.loli.net/2020/08/22/dFRWXm52OVu8qfK.png, avatar=https://cdn.jsdelivr.net/gh/Colsrch/images/Colsrch/avatar.jpg, description=这是一段关于这个网站的描述文字 %}
{% site Linhk1606, url=https://linhk1606.github.io, screenshot=https://i.loli.net/2020/08/21/3PmGLCKicnfow1x.png, avatar=https://i.loli.net/2020/02/09/PN7I5RJfFtA93r2.png, description=这是一段关于这个网站的描述文字 %}
{% endsitegroup %}
<!-- endtab -->

<!-- tab 示例源码 -->
```
{% sitegroup %}
{% site xaoxuu, url=https://xaoxuu.com, screenshot=https://i.loli.net/2020/08/21/VuSwWZ1xAeUHEBC.jpg, avatar=https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png, description=简约风格 %}
{% site inkss, url=https://inkss.cn, screenshot=https://i.loli.net/2020/08/21/Vzbu3i8fXs6Nh5Y.jpg, avatar=https://cdn.jsdelivr.net/gh/inkss/common@master/static/web/avatar.jpg, description=这是一段关于这个网站的描述文字 %}
{% site MHuiG, url=https://blog.mhuig.top, screenshot=https://i.loli.net/2020/08/22/d24zpPlhLYWX6D1.png, avatar=https://cdn.jsdelivr.net/gh/MHuiG/imgbed@master/data/p.png, description=这是一段关于这个网站的描述文字 %}
{% site Colsrch, url=https://colsrch.top, screenshot=https://i.loli.net/2020/08/22/dFRWXm52OVu8qfK.png, avatar=https://cdn.jsdelivr.net/gh/Colsrch/images/Colsrch/avatar.jpg, description=这是一段关于这个网站的描述文字 %}
{% site Linhk1606, url=https://linhk1606.github.io, screenshot=https://i.loli.net/2020/08/21/3PmGLCKicnfow1x.png, avatar=https://i.loli.net/2020/02/09/PN7I5RJfFtA93r2.png, description=这是一段关于这个网站的描述文字 %}
{% endsitegroup %}
```
<!-- endtab -->
{% endtabs %}


***



##  Aplayer

{% tabs note %}
<!-- tab 标签语法-->

<!-- endtab -->

<!-- tab 配置参数 -->

The meting options are shown below:

| Option        | Default      | Description                                                  |
| ------------- | ------------ | ------------------------------------------------------------ |
| id            | **required** | song id / playlist id / album id / search keyword            |
| server        | **required** | Music platform: `netease`, `tencent`, `kugou`, `xiami`, `baidu` |
| type          | **required** | `song`, `playlist`, `album`, `search`, `artist`              |
| fixed         | `false`      | Enable fixed mode                                            |
| mini          | `false`      | Enable mini mode                                             |
| loop          | `all`        | Player loop play, values: 'all', 'one', 'none'               |
| order         | `list`       | Player play order, values: 'list', 'random'                  |
| volume        | 0.7          | Default volume, notice that player will remember user setting, default volume will not work after user set volume themselves |
| lrctype       | 0            | Lyric type                                                   |
| listfolded    | `false`      | Indicate whether list should folded at first                 |
| autoplay      | `false`      | Autoplay song(s), not supported by mobile browsers           |
| mutex         | `true`       | Pause other players when this player playing                 |
| listmaxheight | `340px`      | Max height of play list                                      |
| preload       | `auto`       | The way to load music, can be `none`, `metadata`, `auto`     |
| storagename   | `metingjs`   | LocalStorage key that store player setting                   |
| theme         | `#ad7a86`    | Theme color                                                  |
<!-- endtab -->

<!-- tab 样式预览 -->


<!-- endtab -->

<!-- tab 示例源码 -->
```
{% meting "7610490853" "netease" "playlist" %}
{% meting "7610490853" "netease" "playlist" "autoplay" "mutex:false" "listmaxheight:340px" "preload:none" "theme:#ad7a86"%}
```
<!-- endtab -->
{% endtabs %}

{% meting "7610490853" "netease" "playlist" "autoplay" "mutex:false" "listmaxheight:340px" "preload:none" "theme:#ad7a86"%}

***





## 插入网易云音乐
```
{% raw %}
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=1377574592&auto=1&height=66"></iframe>
{% endraw %}
```
{% raw %}
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=1377574592&auto=1&height=66"></iframe>
{% endraw %}

***




## 嵌入自适应 B 站视频

{% tabs note %}
<!-- tab 标签语法-->

<!-- endtab -->

<!-- tab 配置参数 -->
参数说明：

| key | 说明 |
| --- | --- |
| aid | 之前 B 站使用的 AV 号 |
| bvid | 目前的 BV 号 |
| page | 第几个视频, 起始下标为 1 (默认值也是为 1)就是 B 站视频, 选集里的, 第几个视频 |
| as_wide | 是否宽屏 【1: 宽屏, 0: 小屏】 |
| high_quality | 是否高清 【1: 高清(最高1080p) / 0: 最低视频质量(默认)】 |
| danmaku | 是否开启弹幕 【1: 开启(默认), 0: 关闭】
<!-- endtab -->

<!-- tab 样式预览 -->
<div style="position: relative; padding: 30% 45%;">
<iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" 
src="//player.bilibili.com/player.html?bvid=BV19Y4y1n7WL&page=1&as_wide=1&high_quality=1&danmaku=1" 
scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>
<!-- endtab -->

<!-- tab 示例源码 -->
```
<div style="position: relative; padding: 30% 45%;">
<iframe style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" src="//player.bilibili.com/player.html?bvid=BV19Y4y1n7WL&page=1&as_wide=1&high_quality=1&danmaku=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>
```
<!-- endtab -->
{% endtabs %}





***










## toggle (收缩框)
### 内置
```
{% hideToggle 我是谁 %}
butterfly
{% endhideToggle %}
```
{% hideToggle 我是谁 %}
butterfly
{% endhideToggle %}
### 折叠框 folding
`Butterfly`虽然也有内置折叠框`hideToggle`标签，但是`Volantis`的`folding`折叠框更好看一些。
{% tabs note %}
<!-- tab 标签语法-->
```
{% folding 参数（可选）, 标题 %}
![](https://cdn.bilicdn.tk/gh/volantis-x/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)
{% endfolding %}
```
<!-- endtab -->

<!-- tab 配置参数 -->
```
1. 颜色：blue, cyan, green, yellow, red
2. 状态：状态填写 open 代表默认打开。
```
<!-- endtab -->

<!-- tab 样式预览 -->
{% folding 查看图片测试 %}

![](https://cdn.bilicdn.tk/gh/volantis-x/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)

{% endfolding %}

{% folding cyan open, 查看默认打开的折叠框 %}

这是一个默认打开的折叠框。

{% endfolding %}

{% folding green, 查看代码测试 %}
```
Butterfly
这是代码块
```
{% endfolding %}

{% folding yellow, 查看列表测试 %}

- Butterfly
- Butterfly

{% endfolding %}

{% folding red, 查看嵌套测试 %}

{% folding blue, 查看嵌套测试2 %}

{% folding 查看嵌套测试3 %}

Butterfly <span><img src='https://cdn.bilicdn.tk/gh/volantis-x/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg' style='height:24px'></span>

{% endfolding %}

{% endfolding %}

{% endfolding %}

<!-- endtab -->

<!-- tab 示例源码 -->
```
{% folding 查看图片测试 %}

![](https://cdn.bilicdn.tk/gh/volantis-x/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg)

{% endfolding %}

{% folding cyan open, 查看默认打开的折叠框 %}

这是一个默认打开的折叠框。

{% endfolding %}

{% folding green, 查看代码测试 %}
`
Butterfly
这是代码块
`
{% endfolding %}

{% folding yellow, 查看列表测试 %}

- Butterfly
- Butterfly

{% endfolding %}

{% folding red, 查看嵌套测试 %}

{% folding blue, 查看嵌套测试2 %}

{% folding 查看嵌套测试3 %}

Butterfly <span><img src='https://cdn.bilicdn.tk/gh/volantis-x/cdn-wallpaper/abstract/41F215B9-261F-48B4-80B5-4E86E165259E.jpeg' style='height:24px'></span>

{% endfolding %}

{% endfolding %}

{% endfolding %}
```
<!-- endtab -->
{% endtabs %}




***







## 隐藏内容
### 隐藏文字

{% note info flat %}
隐藏一些内容，需要点击才能插看
`inline` 在文本里面添加按钮隐藏内容，只限文字( `content` 不能包含当引号，可用 `&apos`;)
`block` 独立的` block` 隐藏内容，可以隐藏很多内容，包括图片，代码块等等
{% endnote %}

{% tabs note %}
<!-- tab 标签语法-->
```
{% hideInline content,display,bg,color %}

{% hideBlock display,bg,color %}
Butterfly
{% endhideBlock %}
```
<!-- endtab -->

<!-- tab 配置参数 -->
-  content: 文本内容
-  display: 按钮显示的文字 (可选)
-  bg: 按钮的背景颜色 (可选)
-  color: 按钮文字的颜色 (可选) 
<!-- endtab -->

<!-- tab 样式预览 -->
隐藏内容：{% hideInline content,display,bg,color %}
隐藏内容：
{% hideBlock display,bg,color %}
```
Butterfly
```
{% endhideBlock %}

<!-- endtab -->

<!-- tab 示例源码 -->
```
隐藏内容：{% hideInline content,display,bg,color %}
隐藏内容：
{% hideBlock display,bg,color %}
`
Butterfly
`
{% endhideBlock %}

```
<!-- endtab -->
{% endtabs %}

***

###  hideToggle
{% tabs note %}
<!-- tab 标签语法-->
```
{% hideToggle content,display,bg,color %}
内容
{% endhideToggle %}
```
<!-- endtab -->

<!-- tab 配置参数 -->
- content: 文本内容
- display: 显示的文字 (可选)
- bg: 背景颜色 (可选)
- color: 文字的颜色 (可选)
<!-- endtab -->

<!-- tab 样式预览 -->
{% hideToggle display,bg,color %}
Butterfly
{% endhideToggle %}
<!-- endtab -->

<!-- tab 示例源码 -->
```
{% hideToggle display,bg,color %}
Butterfly
{% endhideToggle %}
```
<!-- endtab -->
{% endtabs %}






***


## inline (一行内)
```
{% hideInline content,display,bg,color %}
```

1. content: 文本内容
2. display: 按钮显示的文字 (可选)
3. bg: 按钮的背景颜色 (可选)
4. color: 按钮文字的颜色 (可选)

{% hideInline content,display,bg,color %}

***


## Block (块)
```
{% hideBlock 主题是什么 %}
butterfly
{% endhideBlock %}
```
{% hideBlock 主题是什么 %}
butterfly
{% endhideBlock %}

***


## 关于raw
一些内容不想被主题渲染，可以使用该标签呈现原始状态。
```
{% raw %}
content
{% endraw %}
```


***



## 单页html不渲染
```
---
layout: false
---
{% raw %}
代码
{% endraw %}
```

***



