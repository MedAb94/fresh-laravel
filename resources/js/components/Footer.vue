<template>
    <v-footer dark height="200px" class="footer   white--text">
        <v-container>
            <v-divider/>
            <div class="text-center ">&copy Tout droits reservés</div>
        </v-container>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer"
    };
</script>
<style scoped>

    a {
        color: white !important;
    }

    .footer ul {
        list-style: none;
        width: 100%;
    }

    .footer h6 {
        font-size: 18px !important;
    }

    .footer ul li {
        padding: 10px 0;
        text-align: center;
    }

    .footer ul .email {
        font-size: 20px;
    }
</style>
