#! /usr/bin/env node

import fs from 'fs';
import chalk from 'chalk';
import inquirer from 'inquirer';
import figlet from 'figlet';
import ncp from "copy-paste";

import { program } from 'commander';

program
    .version('1.0.0', '-v, --version')
    .argument('[mood]')
    .usage("[mood]")
    .description('This CLI will give you a random emoticon based on your mood!\nType uwu for the list of moods')
    if (process.argv.length < 3){
        console.log("The moods i know:\nhappy\nloving\nangry\nannoyed\nconfused\nsad\nsuprised\nsleepy\nsexy")
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
    console.log(randomEmo);
    console.log('Copied to clipboard!');
    process.exit(1);
});
