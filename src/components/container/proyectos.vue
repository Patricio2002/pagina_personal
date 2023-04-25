<script setup>
    import Proyecto from '../base/proyecto.vue';
</script>

<template>
    <Proyecto :title="'Juego Mictlan'" :context="'Un juego diseñado en C el cual consiste de un Ajolote que falleció y tiene que recorrer los 9 niveles del Mictlan para poder descansar en paz'" :image="'../img/proyectos/Mictlan.jpg'" :boton="'https://drive.google.com/file/d/1L3Tic4yShzmOrMHZBnwtDpcenQsU9DN_/view?usp=sharing'"></Proyecto>
    <Proyecto :title="'Arcade'" :context="'Una simulación de un arcade. Cuenta con dos juegos para que el ussuario pruebe con un sistema de puntos. Se puede disfrutar de un doodle jump o de una versión propia de kong'" :image="'../img/proyectos/kiki.jpg'" :boton="'https://github.com/DiegoHhrt/KikiArcade'"></Proyecto>
    <Proyecto :title="'Maratón'" :context="'Videojuego de Maratón que cuenta con las materias de Historia, Biología, Computación, entre otras. Tiene un diseño inspirado en la vida marina, por lo que los personajes son pulpos' " :image="'../img/proyectos/octo.jpg'" :boton="'https://github.com/Francisco-Galindo/psychic-octo-lamp'"></Proyecto>
</template>