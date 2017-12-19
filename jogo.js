var rodada = 1;
var matriz_jogo = Array(3);

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

	}

});