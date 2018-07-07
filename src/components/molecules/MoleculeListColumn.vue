<script lang="ts">
    import AtomListItem from "../atoms/AtomListItem";
    import AtomListItemGroup from "../atoms/AtomListItemGroup"
    import {Vue, Component, Prop} from "vue-property-decorator";
    import {VNode} from "vue";

    @Component({
        components: {AtomListItem, AtomListItemGroup}
    })
    export default class MoleculeListColumn extends Vue {
        @Prop({required: true}) items!: Item[];

        public render(createElement: any): VNode {
            return createElement(
                "div",
                {
                    attrs: {
                        class: "container",
                    }
                },
                [
                    this.createListItems(createElement),
                    this.createListItemGroup(createElement),
                ]
            );
        }

        private createListItems(createElement: any): VNode[] {
            return this.items
                .filter((item) => !item.hasChildItem())
                .map((item) => createElement(
                    "atom-list-item",
                    [item.label],
                ));
        }

        private createListItemGroup(createElement: any): VNode[] {
            return this.items
                .filter((item) => item.hasChildItem())
                .map((item) => createElement(
                    "atom-list-item-group",
                    [item.label],
                ));
        }
    }

    /**
     * リストがレンダリングする内容を表現します。
     */
    class Item {

        /** 一意性を持つキー値 */
        readonly key: number;
        /** 画面上に表示されるラベル値 */
        readonly label: string;
        /** 子アイテム */
        readonly items: Item[];

        /**
         * 必要な値を初期化するコンストラクタです。
         */
        constructor(key: number, label: string, items: Item[] = []) {
            this.key = key;
            this.label = label;
            this.items = items;
        }

        /**
         * 子アイテムを持っているかを返します。
         *
         * @returns {boolean}
         */
        public hasChildItem(): boolean {
            return this.items.length !== 0;
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