<template>
    <div class="container">
        <div v-for="item in items" :key="item.key" @click="$emit('click', item.key)" class="item">
            {{item.label}}
        </div>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";

    @Component
    export default class MoleculeListColumn extends Vue {
        @Prop({required: true}) items!: Item[]
    }

    /**
     * リストがレンダリングする内容を表現します。
     */
    class Item {

        /** 一意性を持つキー値 */
        private readonly key: number;
        /** 画面上に表示されるラベル値 */
        private readonly label: string;

        /**
         * 必要な値を初期化するコンストラクタです。
         */
        constructor(key: number, label: string) {
            this.key = key;
            this.label = label;
        }
    }

    export {
        Item
    }
</script>

<style scoped lang="scss">
    .container {
        display: flex;
        flex-direction: column;
    }
</style>