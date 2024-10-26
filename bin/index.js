#! /usr/bin/env node

import fs from 'fs';
import ncp from "copy-paste";
import { showBanner, getRandomColor, cusChalk, colors} from './even_cuter.js'; 
import { program } from 'commander';

const randomColor = [];
const number_of_moods = 9
for (let i = 0; i < number_of_moods; i++){
    randomColor[i] = cusChalk.hex(getRandomColor());
}

program
    .version('1.0.0', '-v, --version')
    .argument('[mood]')
    .usage("[mood]")
    .description('This CLI will give you a random emoticon based on your mood!\nType uwu for the list of moods')
    if (process.argv.length < 3){
        console.log(cusChalk.hex(colors[0])("The moods I know:\n") 
        + cusChalk.hex(colors[1])("  happy\n") 
        +cusChalk.hex(colors[2])("  loving\n")
        +cusChalk.hex(colors[3])("  angry\n")
        +cusChalk.hex(colors[4])("  annoyed\n")
        +cusChalk.hex(colors[5])("  confused\n")
        +cusChalk.hex(colors[6])("  sad\n")
        +cusChalk.hex(colors[7])("  suprised\n")
        +cusChalk.hex(colors[8])("  sleepy\n")
        +cusChalk.hex(colors[9])("  sexy"))
        process.exit(1)};

program.showHelpAfterError();
program.parse(process.argv);




const filename = program.args[0];
const filepath = './emoticons/' + filename+'.txt';


fs.readFile(filepath, 'utf8', (err, data) =>{
    if (err){
        console.log("Sorry I don't know this mood")
        process.exit(1);
    }
    //split by newlines
    const emo = data.split('\n');

    const randomIndex = Math.floor(Math.random()*emo.length);
    const randomEmo = emo[randomIndex];

    ncp.copy(randomEmo);
    console.log('\n\n\n');
    console.log('\t'+randomColor[0](randomEmo));
    console.log('\n\n\n');
    console.log(randomColor[1]('  Copied to clipboard!'));
    showBanner('UwU');
    process.exit(1);
});
