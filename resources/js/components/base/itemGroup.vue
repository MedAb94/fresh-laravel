<template>
    <v-list-group
        :sub-group="subGroup"
        no-action
        v-model="listModel"
        flat
        active-class="bg-gray-200"
        class="pl-3"
        style="color:  #A0AAC8"
    >
        <!-- :group="group" -->
        <!-- text-gray-900 bg-gray-200 -->
        <template v-slot:activator>
            <v-list-item-icon>
                <v-icon v-text="item.icon" style="color:  #A0AAC8"/>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title class="text-13" v-text="item.text" style="color:  #A0AAC8"/>
            </v-list-item-content>
        </template>
        <template v-for="(child, i) in children">
            <base-item-sub-group
                v-if="child.children"
                :key="`sub-group-${i}`"
                :item="child"
                class="ml-5"
            />
            <base-item
                class="pl-0"
                v-else
                :key="`item-${i}`"
                :item="child"
                :text="false"
            />
        </template>
    </v-list-group>
</template>

<script>
// Utilities
import kebabCase from "lodash/kebabCase";
import Themeable from "vuetify/lib/mixins/themeable";

export default {
    name: "ItemGroup",
    mixins: [Themeable],

    inheritAttrs: false,
    data() {
        return {
            listModel: 0,
        };
    },
    props: {
        item: {
            type: Object,
            default: () => ({
                avatar: undefined,
                group: undefined,
                title: undefined,
                children: [],
            }),
        },
        subGroup: {
            type: Boolean,
            default: false,
        },
        text: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        children() {
            return this.item.children.map((item) => ({
                ...item,
                to: !item.to ? undefined : `/app/${this.item.group}/${item.to}`,
            }));
        },
        computedText() {
            if (!this.item || !this.item.title) return "";

            let text = "";

            this.item.title.split(" ").forEach((val) => {
                text += val.substring(0, 1);
            });

            return text;
        },
        group() {
            return this.genGroup(this.item.children);
        },
    },

    methods: {
        genGroup(children) {
            return children
                .filter((item) => item.to)
                .map((item) => {
                    const parent = item.group || this.item.group;
                    let group = `${parent}/${kebabCase(item.to)}`;

                    if (item.children) {
                        group = `${group}|${this.genGroup(item.children)}`;
                        console.log("child");
                    }

                    return group;
                    console.log(group);
                })
                .join("|");
        },
    },
};
</script>

<style>
</style>
