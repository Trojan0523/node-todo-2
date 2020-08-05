const {program} = require('commander');
const api = require('./index.js');

program
    .option('-x, --xxx', 'what the x')
program
    .command('add')
    .description('add a task')
    .action((...args) => {
        const words = args.slice(0, -1).join('')
        api.add(words).then(() => {console.log('添加成功'),() => {console.log('添加失败')}})
    });
program
    .command('clear')
    .description('clear all task')
    .action(() => {
        api.clear().then(() => {console.log('清除完毕')}, () => {console.log('清除失败')});
    });

program.parse(process.argv);
if(process.argv.length === 2) {
//    说明用户直接运行node cli.js
    void api.showAll();
}




