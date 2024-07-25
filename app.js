const fs = require('fs')

// fs.writeFileSync('notes.txt','Changing the text in the file')

fs.appendFileSync('notes.txt','Appending new text')