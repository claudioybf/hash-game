var rodada = 1;
var matriz_jogo = Array(3);

matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;



//quando o DOM tiver carregado
$(document).ready(function(){
	//inicia jogo apartir do click
	$('#btn_iniciar_jogo').click(function(){

		//verifica se o campo de apelido esta vazio
		if ($('#entrada_apelido_jogador_1').val() == '') {
			alert("Apelido do jogador 1 não foi inserido");

			return false;
		}
		//verifica se o campo de apelido esta vazio
		if ($('#entrada_apelido_jogador_2').val() == '') {
			alert("Apelido do jogador 2 não foi inserido");

			return false;
		}			
		//exibir apelidos
		$('#nome_jogador_1').html($('#entrada_apelido_jogador_1').val());		
		$('#nome_jogador_2').html($('#entrada_apelido_jogador_2').val());

		//controla a vizualização das divs
		$('#pagina_inicial').hide(); //esconde a div	
		$('#palco_jogo').show();	//mostra a div

	}); // inicialização do jogo

	//click da jogada
	$('.jogada').click(function(){
		var id_campo_clicado = this.id;
		$('#'+id_campo_clicado).off();
		jogada(id_campo_clicado);
	});

	//logica da jogada
	function jogada(id){
		var icone =''; // x ou bola
		var ponto = 0; // -1 -> jorgador1 e 1->jogador2

		if ((rodada% 2)==1) { //se mod for igual a 1 então é jogador 1 que fez a jogada
			icone ='url("imagens/marcacao_1.png")';
			ponto = -1;
		}else{               //se não é jogador 2 que fez a jogada
			icone ='url("imagens/marcacao_2.png")';
			ponto = 1;
		}

		rodada++; //a cada rodada soma  1
		
		//bota o icone aonde ta o id
		$('#'+id).css('background-image',icone);

		//divide a coordenada pra saber a posição
		var linha_coluda = id.split('-');
		//inser o ponto de acordo coma coordenada
		matriz_jogo[linha_coluda[0]][linha_coluda[1]] = ponto;

		verifica_combinacao();
	}

	//verificar se o jogador conseguiu combinar os campos
	function verifica_combinacao(){

		//verifica na horizotal - linha A
		var pontos = 0;
		for (var i = 1; i <= 3; i++ ) {
			pontos = pontos + matriz_jogo['a'][i];
		}
		ganhador(pontos);

		//verifica na horizotal - linha B
		pontos = 0;
		for (var i = 1; i <= 3; i++ ) {
			pontos = pontos + matriz_jogo['b'][i];
		}
		ganhador(pontos);

		//verifica na horizotal - linha C
		pontos = 0;
		for (var i = 1; i <= 3; i++ ) {
			pontos = pontos + matriz_jogo['c'][i];
		}
		ganhador(pontos);

		//verifica na vertical
		for (var l = 0; l <= 3 ;l ++) {
			pontos = 0;
			pontos += matriz_jogo['a'][l];
			pontos += matriz_jogo['b'][l];
			pontos += matriz_jogo['c'][l];
			ganhador(pontos);
		}

		//verifica na diagonal
		pontos =0;
		pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3];
		ganhador(pontos);

		pontos =0;
		pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];
		ganhador(pontos);

	}

	function ganhador(pontos){

		if (pontos == -3) {
			var jogada_1 = $('#entrada_apelido_jogador_1').val();
			alert( jogada_1+" venceu!");
			$('.jogada').off();

		}else if (pontos == 3) {
			var jogada_2 = $('#entrada_apelido_jogador_2').val();
			alert( jogada_2+" venceu!");
			$('.jogada').off();
		}
	}

});