<template>
    <!-- url에 있는 파라미터 가져오기 -->
    {{ $route.params.id }}
    <div class="p-3 mb-2 bg-body-tertiary board">
        <!-- <div v-for="(detail, number) in contents" :key="number"> -->
            <h5> {{ contents[$route.params.id].title }} </h5>
            <p> {{ contents[$route.params.id].date }} </p>
            <p> {{ contents[$route.params.id].content }} </p>
        <!-- </div> -->
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