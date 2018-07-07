<template>
    <a href="#" class="container" @click="$emit('click')">
        <slot/> [this is group]
    </a>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class AtomListItemGroup extends Vue {

    }
</script>

<style scoped lang="scss">
    .container {
        padding: 5px;
        color: #000;
        text-decoration: none;
    }

    .container:hover {
        background-color: #c8c8c8;
    }
</style>