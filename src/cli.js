import arg from 'arg';
import inquirer from 'inquirer';
import {
  createProject
} from './main';
import chalk from 'chalk';

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg({
    '--git': Boolean,
    '--yes': Boolean,
    '--install': Boolean,
    '--template': String,
    '--help': Boolean,
    '-g': '--git',
    '-y': '--yes',
    '-i': '--install',
    '-h': '--help',
    '-t': '--template'
  }, {
    argv: rawArgs.slice(2),
  });
  return {
    skipPrompts: args['--yes'] || false,
    git: args['--git'] || false,
    name: args._[0],
    runInstall: args['--install'] || false,
    template: args['--template']
  };
}

async function promptForMissingOptions(options) {

  if (!options.name) {
    console.error(`${chalk.red('You must specify a project name:')}`)
    showHelp()
    process.exit(1)
  }

  const defaultTemplate = 'JavaScript';
  if (options.skipPrompts) {
    return {
      ...options,
      template: options.template || defaultTemplate,
    };
  }

  const questions = [];
  if (!options.template) {
    questions.push({
      type: 'list',
      name: 'template',
      message: 'Please choose which project template to use',
      choices: ['JavaScript', 'TypeScript'],
      default: defaultTemplate,
    });
  }

  if (!options.git) {
    questions.push({
      type: 'confirm',
      name: 'git',
      message: 'Initialize a git repository?',
      default: false,
    });
  }

  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    template: options.template || answers.template,
    git: options.git || answers.git,
  };
}

function showHelp() {
  console.log(`  phaser create ${chalk.green('<project-name>')} [options]`)
  console.log()
  console.error('For example:')
  console.log(`  create-phaser ${chalk.green('my-project')}`)
  console.log()
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  console.log(options);
  await createProject(options)
}