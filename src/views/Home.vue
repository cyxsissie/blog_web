<template>
  <div class="home">
    <Article/>
  </div>
</template>

<script>
// @ is an alias to /src
import Article from '@/components/Article.vue';


export default {
  name: 'home',
  components: {
    Article,
  },
};
</script>
