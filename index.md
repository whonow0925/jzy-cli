## 一个cli工具应该的工作流程
+ 初始化命令
+ 执行交互的js
+ 与客户交互
+ 根据用户指令下载模板
+ 模板 下载成功

1、bin字段：定义项目的命令，手动添加入口文件
"bin": {"testcli1022": "./index.js"},

2、npm link : 将项目关联全局，才可以执行bin里面的命令。

3、npm install inquirer --dev # yarn add inquirer --dev 实现与询问用户信息的功能需要引入inquire.js

4、npm install ejs --save # yarn add ejs --save 借助ejs模板引擎将用户输入的数据渲染到模板上。

5、chalk（粉笔）：npm install chalk # yarn add chalk 美化我们在命令中输入内容的样式。

6、ora：命令行loading动效。

5、download-git-repo 下载远程模板

6、process.argv :是node自带存放参数的一个数组。

7、commander包

8、figlet包：npm install figlet 给脚手架弄一个logo

#### 下载模块-项目一般放在哪
+ 放在本地（跟脚手架放在同一个目录下）-直接fs下载
+ 放在git上 - download-git-repo（最常见）
+ 放在服务器上-通过服务器地址下载

#### 模板
模板-你整个项目的基础设施（组件库，工具，很多自己的轮子），工程化体系，工程规范。

#### 工程设计规范
+ Rails-style 按层级划分目录  组件层、路由层、页面层
+ Domain-style 按功能划分 支付功能、登录功能

#### 项目之间的差异

### 搭建自己的脚手架
#### 需要实现的功能
+ 通过指令启动项目
+ 徐闻用户选择需要的下载模板
+ 远程拉取模板文件

#### 搭建步骤拆解
+ 创建项目
+ 创建脚手架启动命令（使用commander）
+ 询问用户问题获取创建所需的信息（使用requirer）
+ 下载远程模板（使用download-git-repo）
+ 发布项目
