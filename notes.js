const fs = require('fs');

var fetchNotes = () => {
  try {
    var noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title: title,
    body: body
  };
  var duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  } else {
    console.log('duplicate note');
  }
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  var notes = fetchNotes();
  var myNotes = notes.filter((note) => {
    return note.title === title;
  });
  return myNotes[0];
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var deletedNote = notes.filter((note) => {
    return note.title !== title;
  });
  saveNotes(deletedNote);
  return notes.length !== deletedNote.lenth;
};

var logNote = (note) => {
  //Break on this line and use repl to output note
  debugger;
  //Read with --title
  console.log('---');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  //ES6 -> equivalent to addNote: addNote etc.
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
