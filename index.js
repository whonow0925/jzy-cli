#!/usr/bin/env node

const commander = require("commander");
const downgit = require("download-git-repo");
const chalk = require("chalk");
const ora = require("ora");
const figlet = require("figlet")

commander.option("-a [num]", "this is test -a", (num) => {
  //[num]选填
  //<num>必填
  console.log("num :>> ", num);
  console.log("you input -a");
});
commander.command("init <type>").action((type) => {
  var spinner = ora("下载中").start();
  //第一个参数：github/gitlab:本体库作者名
  //第二个参数：使用者当前cmd的地址 ，就是要下载到那个地址
  //__dirname 当前项目地址
  //process.cwd 当前所在的地址
  //第三个参数：配置项 clone：true通过git clone 下载，默认为false，HTTP下载（会更快）
  //第四个参数：回调函数
  downgit("github:whonow0925/vite-vue3.0-template", process.cwd(), {}, (err) => {
    if (err) throw err;
    spinner.stop();
    console.log(chalk.green("下载成功"));
  });
});

commander.on("--help", () => {
  console.log(
    "\r\n" +
      figlet.textSync("mycli", {
        font: "Ghost",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      })
  );
  // 新增说明信息
  console.log(`\r\nRun ${chalk.cyan(`roc <command> --help`)} show details\r\n`);
});

commander.version("1.0.0");

commander.parse(process.argv);
//process.argv 是node自带存放参数的一个数组
// console.log(process.argv)
// if(process.argv[2] === "-v"){
//     console.log("version 1.0.0")
// }
// console.log(1);
