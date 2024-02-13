<template>
  <div v-for="(detail, number) in contents" :key="number">
    <div class="p-3 mb-2 bg-body-tertiary board">
      <router-link to="/detail">
        <h5> {{ detail.title }} </h5>
      </router-link>
        <div> {{ detail.date }} </div>
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