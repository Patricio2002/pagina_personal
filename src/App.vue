<script setup>
	import Info from './components/container/info.vue'
	import Proyect from './components/container/proyectos.vue'
    const tipo = ref(1)
	import { ref} from 'vue'
	
</script>

<template class="h-screen">
	<main class="flex-col flex m-auto w-[100vw] h-full text-center fondo text-white">
		<h1 class="mt-10 text-3xl">Patricio Alfaro</h1>
		<div class="mt-10">
			<button type="button" @click="tipo=1" class="mr-4">informacion</button>
			<button type="button" @click="tipo=2"  class="mr-4">proyectos</button>
		</div>


		<div v-show="tipo == 1"><Info></Info></div>
		<div v-show="tipo==2"><Proyect></Proyect></div>
	</main>
    
		
</template>

<style>
	button{
		background-color: #102C54 !important;
		border: solid 5px #0a121c;
		padding: 0.75rem;
		border-radius: 2rem;
	}
	html{
		background-image: url(../img/fondo.jpg);
		 background-size: cover;
	}
</style>