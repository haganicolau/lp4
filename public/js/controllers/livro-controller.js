/*
 * Controller do Livro, no devem ser inseridos todas as regras de negócio da nossa entidade Livro
 *Como boa prática de programação Angular, todos os nomes controllers deve começar com letra maiúscula e todas palavras também terão a primeira letra maiúscula
 * 1º nossa variável global angular de novo 'biblioteca' cria um Controller pelo método .controller('nomeController', function)
 * $scope é um objeto injetado pelo angular que permite "pendurar" nossas variáveis que serão acessadas na view (HTML)
 */
angular.module('biblioteca').controller('LivroController', function ($scope, $http) {

    // String vazia que recebe os dados do teclado para o filtro da busca
    $scope.filtro = '';

    $scope.mensagem_sucesso = '';
    $scope.mensagem_falha = '';

    //Array livros contendo lista de livros com seus atributos
    //Atributos mapeados que vão subistituir as "lacunas" do HTML
    $scope.livros = [];

    /* requisição http com o verbo get o servidor retorna a requisição pedida fazendo uso da metodologia REST, tornando a nossa aplicação RESTFUL */
    $http.get('/v1/livros')
            /* Se sucesso o retorno, que contém a lista json com os elementos é pendurada no nosso objeto scope */
            .success(function (retorno) {
                $scope.livros = retorno;
            })
            /* se houver erro é printado no console */
            .error(function (erro) {
                console.log(erro);
            });

    $scope.remover = function (livro) {
        $http.delete('v1/livros/' + livro._id)
                .success(function () {
                    var indiceLivro = $scope.livros.indexOf(livro);
                    $scope.livros.splice(indiceLivro, 1);
                    $scope.mensagem_sucesso = 'Livro Foi Removido com Sucesso!';
                })
                .error(function (erro) {
                    console.log(erro);
                    $scope.mensagem_falha = 'Não Foi Possível Remover!';
                });
    };

});
