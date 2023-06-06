const { exec } = require('child_process');

function baixarPartitura() {
  const comando = 'npx dl-librescore -i https://musescore.com/user/123/scores/456 -t mp3 -o /home/doas';

  exec(comando, (error, stdout, stderr) => {
    if (error) {
      console.error('Ocorreu um erro:', error);
    } else {
      console.log('Partitura baixada com sucesso!');
    }
  });
}

window.baixarPartitura = baixarPartitura;


