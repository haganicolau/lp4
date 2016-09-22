/*
*O Angular disponibiliza no escolpo global o objeto angular, que possui uma série
*de funções que permite interagir com o framework, entre elas o module que permite
*criar um módulo. Obs.: Como boa prática, esta deve ser a única variável globao
*temos injeção de duas dependências, módulo minhasDiretrizes que chama a nossa diretiva criada
*ngAnimate que permite aparecer as classes CSS dos eventos Angular
*/
angular.module('biblioteca',['minhasDiretrizes', 'ngAnimate']);
