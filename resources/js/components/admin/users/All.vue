<template>
    <v-container>
        <v-card flat class="my-8 card-shadow">
            <v-layout class="justify-space-between align-center">
                <v-card-title>Liste des utilisateurs</v-card-title>
                <v-spacer></v-spacer>
                <v-text-field
                    placeholder="Rechercher"
                    background-color="light"
                    append-icon="mdi-magnify"
                    dense
                    shaped
                    v-model="search"
                    outlined
                    class="mr-3 mt-5 px-5"
                    style="max-width: 250px"

                />
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            class=" mr-3"
                            color="primary"
                            dark
                            text
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon right>mdi-menu</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item link :to="{name: 'NewUser'}" :disabled="role==='user'">
                            <v-list-item-title>Nouveau utilisateur</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-layout>

            <v-data-table
                :headers="headers"
                :items="allUsers"
                :items-per-page="5"
                class="elevation-1"
                :search="search"
            >
                <template v-slot:item.action="{ item }">
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon
                                color="primary"
                                dark
                                v-bind="attrs"
                                v-on="on"
                            >
                                mdi-dots-horizontal
                            </v-icon>
                        </template>
                        <v-list>
                            <v-list-item link :to="{name: 'EditUser', params:{id: item.id}}"
                                         :disabled="role==='user'">
                                <v-list-item-title>Modifier</v-list-item-title>
                            </v-list-item>
                            <v-list-item link :disabled="role==='user'">
                                <v-list-item-title @click="deleteRecor(item.id)">
                                    Supprimer
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </template>
            </v-data-table>
        </v-card>
    </v-container>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "All",
        data() {
            return {
                search: '',
                headers: [
                    {
                        text: 'ID',
                        align: 'start',
                        sortable: false,
                        value: 'id',
                    },
                    {text: 'Prénom', value: 'name'},
                    {text: 'Nom', value: 'last_name'},
                    {text: 'Email', value: 'email'},
                    {text: 'Action', value: 'action'},
                ],
            };
        },
        methods:{
            deleteRecor(id) {
                this.$swal.fire({
                    title: "Etes vous sur?",
                    text: "Cette action de suppression est irreversible",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: "Supprimer",
                    cancelButtonText: "Annuler",
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.$store.dispatch('deleteRecord', {type: "users", id: id})
                            .then((resp) => {
                                this.$store.dispatch('fetchUsers')
                                this.$swal.fire(
                                    'Ok!',
                                    "La suppression est faite",
                                    'success'
                                )
                            })
                            .catch((error) => {
                                console.log(error);
                            });

                    }
                })


            },
        },
        computed: {
            ...mapGetters(['allUsers', 'role'])
        },
        created() {
            this.$store.dispatch('fetchUsers')
        }
    }
</script>

<style scoped>

</style>
