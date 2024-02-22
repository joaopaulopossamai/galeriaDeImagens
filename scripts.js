$(document).ready(function () {
  const baseImagens = {
    todas: ['imagem3.jpg', 'imagem.jpg', 'cidade.jpg', 'animal.jpg'],
    natureza: ['imagem3.jpg', 'imagem1.jpg', 'cidade1.jpg', 'animal1.jpg'],
    cidade: ['imagem3.jpg', 'imagem2.jpg', 'cidade2.jpg', 'animal2.jpg'],
    animais: ['imagem3.jpg', 'cidade3.jpg', 'animal3.jpg', 'imagem.jpg'],
  };

  function carregaImagens(categoria) {
    const imagens = baseImagens[categoria];
    const boxImagens = $('body').find('.box-imagens');
    boxImagens.empty();
    console.log(categoria);

    imagens.forEach((img) => {
      boxImagens.append('<div class="imagem-item"><img src="imagens/' + img + '" /></div>');
    });
  }

  $('.botao-categoria').on('click', function () {
    $('body').find('.botao-categoria').removeClass('active');
    $(this).addClass('active');
    const categoria = $(this).data('categoria');
    carregaImagens(categoria);
  });
});
