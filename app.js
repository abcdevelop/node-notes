const fs = require('fs');
const _ = require('lodash');
const yargs=require('yargs');

const notes = require('./notes');

const titleOptions={
    describe:'Title of a note',
    demand:true,
    alias:'t'
};

const bodyOptions={
    describe:'Body of a note',
    demand:true,
    alias:'b'
};

const argv=yargs
    .command('add','Add a new note',{
        title:titleOptions,
        body:bodyOptions
    })
    .command('list','list all notes')
    .command('read','read a note',{
        title:titleOptions
    })
    .command('remove','remove a note',{
        title:titleOptions
    })
    .help()
    .argv;
var command=argv._[0];


if(command==='add'){
    var note=notes.addNote(argv.title, argv.body);
    if(note){
        console.log('Note created:');
        notes.logNote(note);
    }else{
        console.log('Note title already exist');
    }
}else if(command==='list'){
    var allNotes=notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note)=>notes.logNote(note));
}else if(command==='read'){
    var note=notes.getNote(argv.title);
    if(note){
        console.log('Note found:');
        notes.logNote(note);
    }else{
        console.log('Note not found');
    }
}else if(command==='remove'){
    var noteRemoved=notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
}else{
    console.log('Command not recognized');
}










//console.log('Starting app.js');
//console.log('Command:',command);
//console.log('Yargs',argv);


//const os= require('os');
//var command=process.argv[2]
// console.log('Process',process.argv);

//console.log(_.uniq([1, 1, 1, 2, 2, 2, 1, 2]));

//console.log('Result:',notes.add(9,-2));

// var res =notes.addNote();
// console.log(res);


//var user=os.userInfo();
//fs.appendFile('greetings.txt',  `Hello ${user.username}! You are ${notes.age}.`);

// , (err) => {
//     if (err) throw err;
//     console.log('The "data to append" was appended to file!');
// });