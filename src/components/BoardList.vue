<template>
  <div class="board">
    <div v-for="(detail, number) in contents" :key="number">
      <h5> {{ detail.title }} </h5>
        <p> {{ detail.date }} </p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'BoardList',
    props: {
      contents: Array,
    }
}
</script>

<style>

</style>