<script setup>
import { ref } from 'vue'
import Title from '@/components/frontend/SectionTitle.vue'

const actualites = [
  {
    id: 1,
    titre: "Lancement de la plateforme santé digitale",
    image: "https://media.istockphoto.com/id/902506410/photo/young-woman-taking-a-picture.jpg?s=612x612&w=0&k=20&c=TCe0o16X85PmpG4SpplLT9HG0y-fXqTp1tyrVIDnD0U=",
    description: "Une nouvelle application permet aux utilisateurs de trouver des médicaments disponibles autour d’eux en temps réel."
  },
  {
    id: 2,
    titre: "Campagne de sensibilisation sur l’automédication",
    image: "https://previews.123rf.com/images/rostovdriver/rostovdriver1608/rostovdriver160800013/62083580-mujer-joven-tomando-foto-con-c%C3%A1mara-profesional-al-aire-libre.jpg",
    description: "Le ministère de la santé lance une campagne contre l'automédication dans les zones rurales et urbaines."
  },
  {
    id: 3,
    titre: "Partenariat avec les pharmacies locales",
    image: "https://static-cse.canva.com/blob/1626008/ComposeStunningImages16.jpg",
    description: "La startup signe un accord avec plus de 200 pharmacies pour améliorer l'accès à l'information médicale."
  },
  {
    id: 4,
    titre: "Mise à jour majeure de l’application mobile",
    image: "https://cdn.pixabay.com/photo/2016/11/19/11/11/hands-1838658_1280.jpg",
    description: "Une nouvelle version de l'application mobile est disponible avec une interface plus fluide et une meilleure carte interactive."
  }
];

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);
const currentIndex = ref(0);
</script>

<template>

  <div>
    <Carousel
      :value="actualites"
      :numVisible="1"
      :numScroll="1"
      :autoplayInterval="5000"
      :show-navigators="false"
      :show-indicators="false"
      :circular="true"
      v-model:page="currentIndex"
    >
      <template #item="slotProps">
        <div class="relative">
          <img :src="slotProps.data.image" :alt="slotProps.data.titre" class="w-full h-[85vh] object-cover rounded" />
          <div class="absolute inset-0 bg-gradient-to-l from-app-principal to-transparent h-full">
            <div class="px-2.5 md:px-6 lg:px-16 max-w-7xl mx-auto py-2 h-full">
              <div class="flex flex-col justify-center h-full max-w-4xl">
                <div class="flex flex-col space-y-4 text-white">
                  <h3 class="text-xl lg:text-6xl font-bold mt-4 font-Poppins">{{ slotProps.data.titre }}</h3>
                  <p class="text-sm font-Poppins">{{ slotProps.data.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        <div
          v-for="(item, index) in actualites"
          :key="item.id"
          @click="currentIndex = index"
          class="w-10 h-10 rounded-full cursor-pointer transition border "
          :class="currentIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/80'"
        ></div>
      </div>

    </Carousel>
  </div>

  <Title
    title="Actualités"
    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores consectetur cupiditate dolores id iste itaque libero quae quia ratione. Alias distinctio dolor error nisi reiciendis saepe, veniam veritatis voluptas."
  />

  <div class="px-2.5 md:px-6 lg:px-16 max-w-7xl mx-auto py-2">

    <div class="grid  grid-cols-1 lg:grid-cols-3 gap-6">

        <div class="bg-white shadow hover:shadow-lg transition-all duration-300 cursor-pointer ease-in-out">
          <a href="#" title="" class="block aspect-w-4 aspect-h-3">
            <img class="object-cover object-center w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg" alt="" />
          </a>
          <span class="inline-flex px-4 py-2 text-[10px] font-bold  uppercase text-white bg-blue-500"> Technology </span>
          <div class="px-4 py-3">
            <p class=" text-sm font-bold">
              <a href="#" title="" class="text-black"> How to mange your remote team? </a>
            </p>
            <p class="mt-4 opacity-80 text-sm">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            <div class="h-0 my-2 border-t-2 border-gray-200 w-2/3"></div>
            <span class="block text-xs opacity-50 italic"> Par Jhon Doe . <span class="font-medium"> le June 12, 2021</span> </span>
          </div>
        </div>

      <div class="bg-white shadow hover:shadow-lg transition-all duration-300 cursor-pointer ease-in-out">
          <a href="#" title="" class="block aspect-w-4 aspect-h-3">
            <img class="object-cover object-center w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg" alt="" />
          </a>
          <span class="inline-flex px-4 py-2 text-[10px] font-bold  uppercase text-white bg-orange-500"> Technology </span>
          <div class="px-4 py-3">
            <p class=" text-sm font-bold">
              <a href="#" title="" class="text-black"> How to mange your remote team? </a>
            </p>
            <p class="mt-4 opacity-80 text-sm">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            <div class="h-0 my-2 border-t-2 border-gray-200 w-2/3"></div>
            <span class="block text-xs opacity-50 italic"> Par Jhon Doe . <span class="font-medium"> le June 12, 2021</span> </span>
          </div>
      </div>

      <div class="bg-white shadow hover:shadow-lg transition-all duration-300 cursor-pointer ease-in-out">
          <a href="#" title="" class="block aspect-w-4 aspect-h-3">
            <img class="object-cover object-center w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg" alt="" />
          </a>
          <span class="inline-flex px-4 py-2 text-[10px] font-bold  uppercase text-white bg-orange-500"> Technology </span>
          <div class="px-4 py-3">
            <p class=" text-sm font-bold">
              <a href="#" title="" class="text-black"> How to mange your remote team? </a>
            </p>
            <p class="mt-4 opacity-80 text-sm">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            <div class="h-0 my-2 border-t-2 border-gray-200 w-2/3"></div>
            <span class="block text-xs opacity-50 italic"> Par Jhon Doe . <span class="font-medium"> le June 12, 2021</span> </span>
          </div>
      </div>

      </div>

  </div>

  <Title
    title="Témoignages"
    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores consectetur cupiditate dolores id iste itaque libero quae quia ratione. Alias distinctio dolor error nisi reiciendis saepe, veniam veritatis voluptas."
  />

  <div class="px-2.5 md:px-6 lg:px-16 max-w-7xl mx-auto py-2">

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-6 gap-y-6">

      <div class="overflow-hidden bg-white">
        <div class="p-5">
          <div class="relative w-24 h-24 mx-auto">
            <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg" alt="" />
            <div class="absolute top-0 right-0 flex items-center justify-center bg-app-principal rounded-full w-7 h-7">
              <Icon icon="lucide:message-circle" class="size-5 text-white" />
            </div>
          </div>
          <blockquote class="mt-4">
            <p class="text-sm opacity-80 ">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat”</p>
          </blockquote>

          <div class="mt-4">
            <hr>
          </div>

          <div class="flex flex-col">
            <h2 class="text-sm font-bold opacity-80 mt-4"> John Doe </h2>
            <p class="mt-1 text-sm text-app-principal italic ">Project Manager at Microsoft</p>
          </div>
        </div>
      </div>

      <div class="overflow-hidden bg-white">
        <div class="p-5">
          <div class="relative w-24 h-24 mx-auto">
            <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg" alt="" />
            <div class="absolute top-0 right-0 flex items-center justify-center bg-app-principal rounded-full w-7 h-7">
              <Icon icon="lucide:message-circle" class="size-5 text-white" />
            </div>
          </div>
          <blockquote class="mt-4">
            <p class="text-sm opacity-80 ">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat”</p>
          </blockquote>

          <div class="mt-4">
            <hr>
          </div>

          <div class="flex flex-col">
            <h2 class="text-sm font-bold opacity-80 mt-4"> John Doe </h2>
            <p class="mt-1 text-sm text-app-principal italic ">Project Manager at Microsoft</p>
          </div>
        </div>
      </div>

      <div class="overflow-hidden bg-white">
        <div class="p-5">
          <div class="relative w-24 h-24 mx-auto">
            <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg" alt="" />
            <div class="absolute top-0 right-0 flex items-center justify-center bg-app-principal rounded-full w-7 h-7">
              <Icon icon="lucide:message-circle" class="size-5 text-white" />
            </div>
          </div>
          <blockquote class="mt-4">
            <p class="text-sm opacity-80 ">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat”</p>
          </blockquote>

          <div class="mt-4">
            <hr>
          </div>

          <div class="flex flex-col">
            <h2 class="text-sm font-bold opacity-80 mt-4"> John Doe </h2>
            <p class="mt-1 text-sm text-app-principal italic ">Project Manager at Microsoft</p>
          </div>
        </div>
      </div>

      <div class="overflow-hidden bg-white">
        <div class="p-5">
          <div class="relative w-24 h-24 mx-auto">
            <img class="relative object-cover w-24 h-24 mx-auto rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg" alt="" />
            <div class="absolute top-0 right-0 flex items-center justify-center bg-app-principal rounded-full w-7 h-7">
              <Icon icon="lucide:message-circle" class="size-5 text-white" />
            </div>
          </div>
          <blockquote class="mt-4">
            <p class="text-sm opacity-80 ">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat”</p>
          </blockquote>

          <div class="mt-4">
            <hr>
          </div>

          <div class="flex flex-col">
            <h2 class="text-sm font-bold opacity-80 mt-4"> John Doe </h2>
            <p class="mt-1 text-sm text-app-principal italic ">Project Manager at Microsoft</p>
          </div>
        </div>
      </div>

    </div>

  </div>

</template>

<style>

</style>
