<template>
  <div class="p-3 mb-2 bg-body-tertiary board">
    <div v-for="(detail, number) in contents" :key="number">
      <!-- <router-link to="/detail"> -->
        <h5 @click="$router.push('/detail/' + detail.number )"> {{ detail.title }} </h5>
      <!-- </router-link> -->
        <p> {{ detail.date }} </p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'BoardList',
    props: {
      contents: Array,
    },
}
</script>

<style>

</style>