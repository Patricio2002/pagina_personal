<script setup>
    defineProps({
        title:String,
        context: String,
        image: String,
        boton: String
    })
</script>

<template>
    <div class="proyecto mt-10 mb-5 bg-blue-100 w-[50vw] m-auto rounded-xl p-2">
        <h2 class="headline--title text-xl ">{{ title }}</h2>
       <div class="flex-row md:flex m-4 items-align">
            <body class="mr-3" >
                <section>
                    {{ context }}
                </section>
                <br>
            </body>
            <div>
                <img :src=" image " class="w-[30vw] m-auto">
            </div>
       </div>
       <a :href="boton"><button class="mb-5">Ver mas</button></a>
    </div>
</template>