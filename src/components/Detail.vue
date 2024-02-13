<template>
    <div v-for="(detail, number) in contents" :key="number">
        <div class="p-3 mb-2 bg-body-tertiary board">
            <h5> {{ detail.title }} </h5>
            <p> {{ detail.date }} </p>
            <p> {{ detail.content }} </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'boardDetail',
    props: {
        contents: Array,
    },
}
</script>

<style>
.board {
    margin: 10px;
    border-radius: 20px;
}
</style>