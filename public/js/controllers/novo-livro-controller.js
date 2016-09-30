/* Controller criado para efetuar o cadastro do livro */
angular.module('biblioteca')
        .controller('NovoLivroController', function ($scope, $http, $routeParams) {
            /* objeto scope no qual vou pendurar meus objetos que vou usar no html*/
            $scope.livro = {};
            $scope.mensagem_sucesso = '';

            if ($routeParams.livroId) {
                $http.get('/v1/livros/' + $routeParams.livroId)
                        .success(function (livro) {
                            $scope.livro = livro;
                        })
                        .error(function (erro) {
                            console.log(erro);
                            $scope.mensagem_falha = 'Não foi possível carregar o livro';
                        });
            }

            /* função chamada na diretiva ng-sumit quando for dado um sumit no nosso formulário será executado este método*/
            $scope.submeter = function () {
                /* se o meu formulário válido, ou seja sem nenhum erro, executo a função de cadastro novo livro*/
                if ($scope.formulario.$valid) {
                    if ($scope.livro._id) {
                        $http.put('/v1/livros/' + $scope.livro._id, $scope.livro)
                                .success(function () {
                                    $scope.mensagem_sucesso = 'Livro Alterado com sucesso';
                                })
                                .error(function (erro) {
                                    $scope.mensagem = 'Não foi possível alterar o livro';
                                    console.log(erro);
                                });
                    } else {
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
                                });
                    }
                }
            };

        });