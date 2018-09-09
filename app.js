const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

//the ./ syntax references the current folder
const notes = require('./notes.js');
let titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}

let bodyOptions = {
  describe: 'The body of the note',
  demand: true,
  alias: 'b'
}

const argv = yargs.command('add','Adds a new note',{
title: titleOptions,
body: bodyOptions,
})
.command('list', 'List all notes')
.command('read', 'Read a note', {
  title: titleOptions,
})
.command('remove','Remove a note', {
  title: titleOptions,
})
.help().argv;
var command = argv._[0];

if(command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if(note) {
    notes.logNote(note);
  } else {
    console.log('Sorry that note title already exists!');
  }
} else if(command ==='list'){
  var allNotes = notes.getAll();
  console.log(`Printing: ${allNotes.length} note(s)`);
  allNotes.forEach((note) => {
    notes.logNote(note);
  })
} else if(command ==='read'){
  var note = notes.getNote(argv.title);
  if(note) {
    console.log(`Note found!`);
    notes.logNote(note);
  } else {
    console.log('Note not found :(');
  }
} else if(command ==='remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not found');
}
