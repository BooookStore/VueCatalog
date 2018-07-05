<template>
    <template-play-ground>
        <organisms-header slot="header"/>
        <p>This is main</p>
        <molecule-list-column slot="menu" :items="items"/>
    </template-play-ground>
</template>

<script lang="ts">
    import TemplatePlayGround from "./templates/TemplatePlayGround";
    import OrganismsHeader from "./organisms/OrganismsHeader";
    import MoleculeListColumn, {Item} from "./molecules/MoleculeListColumn";

    import {Vue, Component} from "vue-property-decorator";

    @Component({
        components: {MoleculeListColumn, OrganismsHeader, TemplatePlayGround}
    })
    export default class PlayGround extends Vue {
        public data(): Object {

            // モックデータ
            const items: Item[] = [
                new Item(1, "item1"),
                new Item(2, "item2"),
                new Item(3, "item3"),
            ];

            return {
                items: items,
            }
        }
    }
</script>

<style lang="scss">
    /* load import style */
</style>