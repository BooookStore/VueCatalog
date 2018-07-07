<template>
    <div class="container">
        <header>
            <slot name="header"/>
        </header>
        <nav>
            <slot name="menu"/>
        </nav>
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
    $header-height: 30px;

    .container {
        display: grid;
        grid-template-rows: $header-height calc( 100vh - #{$header-height} );
        grid-template-columns: 250px 1fr;
        grid-row-gap: 5px;
        grid-column-gap: 5px;
        grid-template-areas:
                "header header"
                "menu   main";
    }

    header {
        background-color: #ffffff;
        grid-area: header;
    }

    nav {
        background-color: #ffffff;
        grid-area: menu
    }

    main {
        background-color: #ffffff;
        grid-area: main;
    }

</style>