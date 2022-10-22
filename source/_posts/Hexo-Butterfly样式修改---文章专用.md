---
title: Hexo-Butterfly样式修改---文章专用
tags:
  - Hexo
  - Butterfly
categories: Butterfly
keywords: 'hexo,butterfly,主题,样式'
description: Butterfly样式指南
sticky: 1001
cover: /img/background.png
abbrlink: c045683e
---

***

## note 1
```
{% note blue 'fas fa-bullhorn' %}

 📖  Butterfly 

 🦋  Butterfly 

{% endnote %}
```
{% note blue 'fas fa-bullhorn' %}

 📖  Butterfly 

 🦋  Butterfly 

{% endnote %}

***

## note 2
```
{% note green 'fas fa-rocket' %}

 📚  文檔目錄

{% post_link Hexo-Butterfly样式修改---文章专用 ' 🚀 Butterfly ' %} - {% post_link Hexo-Butterfly样式修改---文章专用 ' 📑 Butterfly ' %} - {% post_link Hexo-Butterfly样式修改---文章专用 ' 🛠 Butterfly ' %} - {% post_link Hexo-Butterfly样式修改---文章专用 ' ⚔️ Butterfly ' %} - {% post_link Hexo-Butterfly样式修改---文章专用 ' ❓ Butterfly ' %} - {% post_link Hexo-Butterfly样式修改---文章专用 ' ⚡️ Butterfly ' %} - {% post_link Hexo-Butterfly样式修改---文章专用 ' ✨ Butterfly ' %} - {% post_link Hexo-Butterfly样式修改---文章专用 ' 🤞 Butterfly ' %}

{% endnote %}
```

{% note green 'fas fa-rocket' %}

 📚  文檔目錄

{% post_link Hexo-Butterfly样式修改---文章专用 ' 🚀 Butterfly ' %} - {% post_link Hexo-Butterfly样式修改---文章专用 ' 📑 Butterfly ' %} - {% post_link Hexo-Butterfly样式修改---文章专用 ' 🛠 Butterfly ' %} - {% post_link Hexo-Butterfly样式修改---文章专用 ' ⚔️ Butterfly ' %} - {% post_link Hexo-Butterfly样式修改---文章专用 ' ❓ Butterfly ' %} - {% post_link Hexo-Butterfly样式修改---文章专用 ' ⚡️ Butterfly ' %} - {% post_link Hexo-Butterfly样式修改---文章专用 ' ✨ Butterfly ' %} - {% post_link Hexo-Butterfly样式修改---文章专用 ' 🤞 Butterfly ' %}

{% endnote %}


***

## note 3
```
{% note orange 'fas fa-magic' %}

Butterfly 

{% endnote %}
```

{% note orange 'fas fa-magic' %}

Butterfly 

{% endnote %}

***

## tabs样式模版
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

***

## 安裝

{% tabs butterfly-install %}

<!-- tab Git安裝 (Github) @fab fa-github-square -->

**穩定版【建議】**

在你的 Hexo 根目錄裏

```powershell
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

**測試版**

> 測試版可能存在 bug，追求穩定的請安裝穩定版

如果想要安裝比較新的 dev 分支，可以

```powershell
git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

{% note info %}

升級方法：在主題目錄下，運行 `git pull`

{% endnote %}

<!-- endtab -->



<!-- tab Git安裝 (Gitee) @fab fa-git-square -->

**穩定版【建議】**

在你的 Hexo 根目錄裏

```powershell
git clone -b master https://gitee.com/immyw/hexo-theme-butterfly.git themes/butterfly
```

**測試版**

> 測試版可能存在Bugs，追求穩定的請安裝穩定版

如果想要安裝比較新的dev分支，可以

```powershell
git clone -b dev https://gitee.com/immyw/hexo-theme-butterfly.git themes/butterfly
```

{% note info %}

升級方法：在主題目錄下，運行`git pull`

{% endnote %}

<!-- endtab -->



<!-- tab npm安裝@fab fa-npm -->

> 此方法只支持 Hexo 5.0.0 以上版本
>
> ***通過 npm 安裝並不會在 themes 裏生成主題文件夾，而是在 node_modules 裏生成***

在你的 Hexo 根目錄裏

```powershell
npm i hexo-theme-butterfly
```

{% note info %}

升級方法：在 Hexo 根目錄下，運行 `npm update hexo-theme-butterfly`

{% endnote %}

<!-- endtab -->

{% endtabs %}

***

