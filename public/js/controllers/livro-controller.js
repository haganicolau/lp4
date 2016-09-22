/*
* Controller do Livro, no devem ser inseridos todas as regras de negócio da nossa entidade Livro
*Como boa prática de programação Angular, todos os nomes controllers deve começar com letra maiúscula e todas palavras também terão a primeira letra maiúscula
* 1º nossa variável global angular de novo 'biblioteca' cria um Controller pelo método .controller('nomeController', function)
* $scope é um objeto que permite "pendurar" nossas variáveis que serão acessadas na view (HTML)
*/
angular.module('biblioteca').controller('LivroController', function($scope){

  // String vazia que recebe os dados do teclado para o filtro da busca
  $scope.filtro ='';

  //Array livros contendo lista de livros com seus atributos
  //Atributos mapeados que vão subistituir as "lacunas" do HTML
  $scope.livros = [
    {
      nome: 'Pressman',
      img: 'http://diggyn.com.br/lp4/pressman.jpg'
    },

    {
      nome: 'Sommerville',
      img: 'http://diggyn.com.br/lp4/sommerville.jpg'
    },

    {
      nome: 'Tanenbaum',
      img: 'http://diggyn.com.br/lp4/tanenbaum.jpg'
    }
  ]
});
