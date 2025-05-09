<script setup>
import  Banner from '@/components/frontend/Banner.vue'

const faqs = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec."
  },
  {
    id: 2,
    question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam ?",
    answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos."
  },
  {
    id: 3,
    question: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur ?",
    answer: "Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus."
  },
  {
    id: 4,
    question: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium ?",
    answer: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  },
  {
    id: 5,
    question: "Nisi ut aliquid ex ea commodi consequatur ?",
    answer: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem."
  }
];

</script>

<template>

  <Banner title="Page de démarrage" />
  <div class="px-2.5 md:px-6 lg:px-16 max-w-7xl mx-auto py-2">
    <div class=" bg-white shadow-lg p-5">
      <h2 class="text-center text-xl font-bold">  <code>  < Code seulement ! Tu as tout ce qu'il te faut ! /> </code> </h2>
    </div>
  </div>
</template>

<style>

</style>
