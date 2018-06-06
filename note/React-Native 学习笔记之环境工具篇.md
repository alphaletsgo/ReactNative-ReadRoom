# React-Native 学习笔记之环境工具篇
## 安装Homebrew
- 定义：Homebrew是OS X的套件(包)管理器，我们可以通过它获取并且安装很多组件。
- 安装方式：在终端运行
```sh
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)”
```

**注意：执行上面的命令之后，安装过程取决于你当前的网速。**
## 安装npm和Node.js
Node.js最好安装4.0及其以上更高版本，node安装成功之后npm自动就有了，直接下载安装Node.js，网址：http://nodejs.cn/download/
## 安装WatchMan
- 作用：该插件用于监控bug和文件变化，并且可以触发指定的操作。(非必须安装，看自己意愿)
- 安装方式：`brew install watchman`,当出现🍺图标的时候，表示已经安装成功，由于我电脑已经安装了，所以会提示`Warning: watchman-4.5.0 already installed`

**注意：在Mac OS X 10.11(EI Capitan)版本中，homebrew在安装软件时可能会碰到/usr/local目录不可写的权限问题。可以使用在前面添加 sudo(管理员权限)。**
## 安装Flow
- 定义：flow是一个JavaScript的静态类型检查器，建议安装它，以方便找出代码中可能存在的类型错误。
-  安装方式：`brew install flow`，同安装WatchMan一样，当出现🍺图标的时候，表示已经安装成功，如果你电脑已经安装了，则会提示`Warning: flow-0.24.1 already installed`

**注意：如果提示command not found，请加上sudo获取管理员权限。**