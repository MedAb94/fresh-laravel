<template>
    <v-container class="bg-light" style="height: 70vh">
        <h1 class="text-center">Fresh!</h1>
    </v-container>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: "Dashboard",
    data() {
        return {
            dialog: false,
        }
    },

    methods: {
    },
    computed: {

    },
    created() {

    }
}
</script>

<style scoped>
div.col-md-2.col-12 {
    margin-right: -78px;
}

div a img {
    margin-left: 66px;
}

.border1 {
    /*border: 3px solid black !important;*/
    background: #fff;
}
</style>
