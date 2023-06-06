const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());

app.get('/baixar-partitura', (req, res) => {
  const link = req.query.link;
  const basePath = process.platform === 'win32' ? process.env.USERPROFILE : process.env.HOME;
  const filePath = path.join(basePath, '', '');
  const comando = `npx dl-librescore -i ${link} -t pdf -o ${filePath}`;

  exec(comando, (error, stdout, stderr) => {
    if (error) {
      console.error('Ocorreu um erro:', error);
      res.status(500).send('Erro ao baixar a partitura.');
    } else {
      console.log('Partitura baixada com sucesso!');
      res.status(200).send('Partitura baixada com sucesso!');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
