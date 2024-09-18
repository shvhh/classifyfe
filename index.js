var express = require('express');
var app = express();
var path = require('path');

//app.use(express.static(__dirname)); // Current directory is root
app.use('/.well-known/acme-challenge/4WdrDPoLlyuvJDBauqZOg-pkgpRMhRxnOhSiBMdvU3Y',(req, res)=>{
    res.send('4WdrDPoLlyuvJDBauqZOg-pkgpRMhRxnOhSiBMdvU3Y.C2TqpIUCyimXctYBKc6xzcAU7kFc5zFRQ5YYYSmF_kQ')
  })
app.use(express.static(path.join(__dirname, 'build'))); //  "public" off of current is root

app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(3000);
console.log('Listening on port 3000');

