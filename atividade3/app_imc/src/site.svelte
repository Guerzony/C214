<script>
	// Variáveis de estado
	let peso = 0;      // Peso do usuário
	let altura = 0;    // Altura do usuário
	let imc = 0;       // Índice de Massa Corporal
	let classificacao = '';
	// Função para calcular o IMC
	function calcularIMC() {
	  if (peso > 0 && altura > 0) {
		imc = (peso / Math.pow(altura, 2)).toFixed(2);
		if(imc<18.5){
			classificacao = 'Abaixo do peso'

		}
		else if(imc >= 18.6 && imc <= 24.9){
			classificacao = 'Peso ideal(Parabens)'
		}
		else if(imc >= 25 && imc <= 29.9){
			classificacao = 'Levemente acima do peso'
		}
		else if(imc >= 30 && imc <= 34.9){
			classificacao = 'Obesidade grau 1'
		}
		else if(imc >= 35 && imc <= 39.9){
			classificacao = 'Obesidade grau 2 (severa)'
		}else{
			classificacao = 'Obesidade grau 3 (mórbida)'
		}
	  } else {
		imc = 0;
	  }
	}
  </script>
<main>
	<h1>CLASSIFICAÇÃO IMC </h1>
	<label>
	  Peso (kg): <input type="number" bind:value={peso} on:input={calcularIMC} />
	</label>
	<label>
	  Altura (m): <input type="number" bind:value={altura} on:input={calcularIMC} />
	</label>
	{#if imc > 0}
	  <p>Seu IMC é : {imc}</p>
	  <p>Classificação: {classificacao}</p>
	{/if}
  </main>

