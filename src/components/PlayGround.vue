<template>
    <template-play-ground>
        <h1 slot="header">Vue Catalog</h1>
        <p>This is main</p>
        <h5 slot="menu">This is menu</h5>
    </template-play-ground>
</template>

<script lang="ts">
    import TemplatePlayGround from "./templates/TemplatePlayGround";

    export default {
        name: "PlayGround",
        components: {TemplatePlayGround},
    }
</script>

<style>
    body, header, menu, footer, p, h1, h2, h3, h4, h5 {
        margin: 0;
        padding: 0;
    }
</style>