app.controller('LivroController', function($scope) {

	$scope.livro = {};	
	$scope.listaLivros = [];

	$scope.adiciona = function() {				

		$scope.listaLivros.push($scope.livro); 	

		$scope.livro = [];

	};

	$scope.remove = function(disciplina) {		

	};

	$scope.altera = function(disciplina) {


	};

	$scope.lista = function() {
		
	};

});
