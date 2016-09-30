/* Controller criado para efetuar o cadastro do livro */
angular.module('biblioteca')
        .controller('NovoLivroController', function ($scope, $http) {
            /* objeto scope no qual vou pendurar meus objetos que vou usar no html*/
            $scope.livro = {};
            $scope.mensagem_sucesso = '';
            $scope.mensagem_falha = '';

            /* função chamada na diretiva ng-sumit quando for dado um sumit no nosso formulário será executado este método*/
            $scope.submeter = function () {
                /* se o meu formulário válido, ou seja sem nenhum erro, executo a função de cadastro novo livro*/
                if ($scope.formulario.$valid) {
                    /* o meu objeto injetado http é responsável por chamar no servidor o método de cadastrar livro, e passamos tbm o nosso objeto scope.livro */
                    $http.post('/v1/livros', $scope.livro)
                            /* se sucesso zera a variaǘel livro e cria uma mensagem de cadastro efetuado com suceso! */
                            .success(function () {
                                $scope.livro = {};
                                $scope.mensagem_sucesso = 'Cadastrado efetuado com Sucesso!';
                            })
                            /* se der erro passa o erro para o console */
                            .error(function (erro) {
                                console.log(erro);
                                $scope.mensagem_falha = 'Não foi possível efetuar o cadastro!';
                            });
                }
            };

        });