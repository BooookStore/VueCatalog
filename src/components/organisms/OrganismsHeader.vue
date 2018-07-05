<template>
    <div class="container">
        <atom-logo class="item" id="logo"/>
        <atom-version class="item" id="version"/>
    </div>
</template>

<script lang="ts">
    import AtomLogo from "../atoms/AtomLogo";
    import AtomVersion from "../atoms/AtomVersion";

    export default {
        name: "OrganismsHeader",
        components: {AtomVersion, AtomLogo}
    }
</script>

<style scoped lang="scss">
    .container {
        height: 100%;
        display: flex;
        align-items: center;
        .item {
            margin-left: 10px;
        }
    }
</style>