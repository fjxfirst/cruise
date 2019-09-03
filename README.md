# C R U I S E

**In modern agile software development practice, there is a development practice called "Continuous Integration (CI)",
which needs to generate a deployable version at any time, any place. Usually in the actual development, the developer
push the code to the code library, and this will automatically trigger a series of actions, such as code checking,
compiling, running testing, packaging. These steps are run through automated scripts to a group of servers, and we
would like to create a product like CRUISE, which can easily manage these servers, monitor or set the status.**

**现代敏敏捷软件开发实践中，有⼀一种开发实践叫“持续集成(CI)”，它要求任何时间，任何地点都可⽣生成⼀一个可部署的版本。通
常在实际开发中，开发⼈人员向代码库推送了了代码，会⾃自动触发⼀一系列列动作，包括代码检查，编译，运⾏行行测试，打包。这些
步骤通过⾃自动化的脚本交给⼀一群服务器器来运⾏行行，我们希望创建CRUISE这样⼀一个产品，可以⽅方便便的管理理这些服务器器
(Agents)，监控或设置它们的状态。**

## 技术选型
使用的主要技术栈是react,该项目由creat-react-app脚手架生成,以及衍生的js库和插件包括有：
*react*
*react-router-dom*
*redux*
*redux-thunk*
*react-redux*
使用的ajax库：
*axios*
css编写使用了scss，移动web适配方案为rem适配，结合postcss-pxtorem将px转为rem，使用媒体查询解决响应式布局
使用json-server模拟后台数据



## 如何启动项目
1.在mock-server目录中使用命令npm install安装所需的依赖包,再用命令npm-start开启后台模拟数据,地址为http://localhost:3001
2.cruise目录中使用npm install安装所需的依赖包，然后npm-start开启开发模式，会自动打开浏览器，这时会看到项目的主界面地址为http://localhost:3000/
### 注意
package.json中有3个命令
1. start是手机的开发模式,只有平板的看不了
2. dev-ipad是平板的开发模式，只有手机的看不了
3. build是打包项目

## 项目github地址
https://github.com/fjxfirst/cruise.git