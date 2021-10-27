//inquire-做出交互，提问
const inquirer = require("inquirer");
//chalk-命令行输入五颜六色的字体
const chalk = require("chalk");
//ora-loading 效果，图标
const ora = require("ora");
const spniner = ora(chalk.red("下载中"));
// spniner.start()
// setTimeout(()=>{
//     spniner.stop()
// },2000)
// console.log(chalk.red("hello world"))
//颜色码的输出,.bgHex()添加背景色,.bold()字体加粗,.underline()下划线
// console.log(chalk.hex("#fff").bold().underline().bgHex("#ddd")("hello world"))
//rgb
//console.log(chalk.rgb(222,118,44)("hello world"))
//number,editor,(打开记事本),password,confirm(yes or no),rawlist,checkbox
inquirer
  .prompt([
    {
      type: "input",
      name: "username",
      message: "请输入用户名",
    },
    {
      type: "list",
      name: "food",
      message: "你喜欢吃什么",
      choices: ["苹果", "香蕉"],
    },
    {
        type:"editor",
        name:"intro",
        message:"请输入自我介绍"
    }
  ])
  .then((answer) => {
    console.log("answer :>> ", answer);
  });
