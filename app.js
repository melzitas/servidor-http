const express = require('express'); // chama a biblioteca Express
const path = require('path');  // chama a biblioteca Path é  usada para trabalhar com caminhos de arquivos e diretórios




const app = express(); // Atribuindo uma variável à lib express
const port = 3000;  // Definindo a porta que o servidor irá rodar evitar   conflitos com outros servidores como o do Mysql 3306




app.use(express.static(path.join(__dirname, 'public')));

//app.

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'indexFooter.html'));
});

app.get('/Sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' ,'indexSobre.html'));
});




app.listen(port, () => {
    console.log(`Servidor rodando em http://127.0.0.1:${port}`);
});
