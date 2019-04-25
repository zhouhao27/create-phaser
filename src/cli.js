import arg from 'arg';
import inquirer from 'inquirer';
import {
  createProject
} from './main';
import chalk from 'chalk';

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg({
    '--yes': Boolean,
    '--template': String,
    '--help': Boolean,    
    '-y': '--yes',
    '-h': '--help',
    '-t': '--template'
  }, {
    argv: rawArgs.slice(2),
  });
  return {
    skipPrompts: args['--yes'] || false,    
    name: args._[0],
    template: args['--template']
  };
}

async function promptForMissingOptions(options) {

  if (!options.name) {
    console.error(`${chalk.red('You must specify a project name:')}`)
    showHelp()
    process.exit(1)
  }

  const defaultTemplate = 'TypeScript';
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

  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    template: options.template || answers.template    
  };
}

function showHelp() {
  console.log(`  phaser create ${chalk.green('<project-name>')} [options]`)
  console.log()
  console.error('For example:')
  console.log(`  create-phaser ${chalk.green('my-project')}`)
  console.log(`   options:`)
  console.log(`   -y, --yes to skip prompts`)
  console.log(`   -t, --template template name, currently only TypeScript or JavaScript supported`)
  console.log(`   -h, --help Help`)
  console.log()
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  console.log(options);
  await createProject(options)
}