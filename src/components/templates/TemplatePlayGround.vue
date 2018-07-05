<template>
    <div class="container">
        <header>
            <slot name="header"/>
        </header>
        <menu>
            <slot name="menu"/>
        </menu>
        <main>
            <slot/>
        </main>
    </div>
</template>

<script lang="ts">
    export default {
        name: "TemplatePlayGround"
    }
</script>

<style lang="scss" scoped>

    .container {
        display: grid;
        grid-template-rows: 50px 1fr;
        grid-template-columns: 250px 1fr;
        grid-template-areas: "header header" "menu   main";
    }

    header {
        background-color: #808080;
        grid-area: header;
    }

    menu {
        background-color: #808080;
        grid-area: menu
    }

</style>