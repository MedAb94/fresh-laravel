<template>
    <div>
        <div class="session-form-hold">
            <v-card-text class="text-center">
                <v-avatar size="60" class="mb-4">
                    <img src="../../assets/logo.png" alt="">
                </v-avatar>
                <p class="">Un lien de renitialisation sera envoyé a votre adresse
                    mail</p>
                <v-text-field v-model="mail"
                              label="Email"
                />
                <v-btn class="mb-4" block color="primary" @click="sendMail" :loading="loading" dark>Envoyer</v-btn>
                <div class="flex justify-around">
                    <v-btn text small color="primary" :to="{name: 'Connexion'}">Connecter</v-btn>
                </div>
            </v-card-text>
        </div>
    </div>
</template>
<script>
export default {
    name: "Forgot",
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: "Mot de passe oublié",
    },
    data() {
        return {
            mail: '',
            loading: false
        }
    },
    methods: {
        sendMail() {
            this.loading = true
            axios.post('/send_reset_email', {email: this.mail})
                .then(res => {
                    this.loading = false
                    this.$swal.fire('Reinitialisation',
                        res.data,
                        'info'
                    )
                })
                .catch(err => {
                    this.loading = false
                    this.$swal.fire('Reinitialisation',
                        err.response.data,
                        'error'
                    )
                })
        }
    }
}
</script>
<style lang="scss" scoped>
.page-wrap {
    display: flex;
    align-items: center;
    padding: 40px 1rem;
    height: 100%;
    min-height: 100vh;
}

.session-form-hold {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
}
</style>
