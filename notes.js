const fs=require('fs');

var  fetchNotes=()=>{
    try{
        var  notesString=fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch(e){
        return [];
    }
};

var  saveNotes=(notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var logNote=(note)=>{
    console.log(`--`);
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);

};

var  addNote =(title,body) => {
    //console.log('Adding note:', title,'-', body);
    var  notes=fetchNotes();
    var  note={
        title,
        body
    };
    var  duplicateNotes=notes.filter((note)=> note.title===title)
    if (duplicateNotes.length===0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};


var  getAll=()=>{
    //console.log('Getting all notes');
    return fetchNotes();
};

var  getNote=(title)=>{
    //console.log('Getting note:', title);
    var  notes=fetchNotes();
    var  notesFiltered=notes.filter((note)=>note.title === title);
    return notesFiltered[0];
};

var  removeNote=(title)=>{
    //console.log('Removing note:', title);
    var  notes=fetchNotes();
    var  notesFiltered=notes.filter((note)=>note.title !== title);
    saveNotes(notesFiltered);
    return notes.length !== notesFiltered.length;
};

module.exports={
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};






//console.log('Starting notes.js')


// console.log(module);

// module.exports.age=25;


// module.exports.addNote= ()=>{
//     console.log('addNote');
//     return 'new Note';
// };
//
// module.exports.add= (a,b)=>{
//     return a+b;
// };