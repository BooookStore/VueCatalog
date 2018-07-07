<template>
    <a href="#" class="container" @click="$emit('click')">
        <slot/>
    </a>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class AtomListItem extends Vue {

    }
</script>

<style scoped lang="scss">
    .container {
        padding: 5px;
        text-decoration: none;
    }

    .container:hover {
        background-color: #dcdcdc;
    }
</style>