console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note', title, body);
};

var getAll = () => {
    console.log('Getting all notes');
};

var readNote = (title, body) => {
    console.log('Reading a note', title, body);
};

var removeNote = (title) => {
    console.log('Removing note:', title);
}
module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
};
//ES6 syntax allows to omit declaration addNote: addNote if key and value are identical

