<template>
    <div class="container item" @click="$emit('click')">
        <i class="file icon"></i>
        <slot/>
    </div>
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
        cursor: pointer;
    }

    .container:hover {
        background-color: #dcdcdc;
    }
</style>