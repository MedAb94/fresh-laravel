<template>
    <section class="mail-verification">
        <v-container>
            <h3 class="text-center">Sesur</h3>
            <v-row justify="center">
                <v-col cols="12" md="7">
                    <v-card class="pa-12">
                        <h4 class="">Veuillez confirmer votre e-mail</h4>
                        <p class="" style="color: #16133d">
                            Vous avez presque terminé! Nous avons envoyé un mail à
                            <strong>{{this.$route.params.email}}.</strong>
                        </p>
                        <p class="">
                            Cliquez sur le lien de verification dans le mail pour confirmer
                            votre adresse mail et terminer votre inscription. Si vous ne voyez
                            pas le mail, vous devrez peut-être vérifier votre dossier spam.
                        </p>
                        <p>Vous ne voyez toujours pas le mail?</p>
                        <v-btn text large class="primary mt-5 btn" @click="resend" :loading="loading">Renvoyez le mail
                        </v-btn>

                        <v-layout justify-center class="py-8">
                            <v-btn class="text-capitalize" text
                            >Vous avez besoin d’aide?
                            </v-btn
                            >
                            <v-btn class="text-capitalize" text>Contactez-nous</v-btn>
                        </v-layout>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <Footer/>
    </section>
</template>

<script>
    export default {
        name: "MailVerification",
        data() {
            return {
                loading: false,
            }
        },
        methods: {
            resend() {
                this.loading = true;
                this.$store.dispatch('resendVerificationEmail', this.$route.params.email).then(res => {
                    console.log(res);
                    this.$swal.fire(
                        'Bravo!',
                        "Un email de verification a été envoyé à votre adresse",
                        'success'
                    ).then(
                        () => this.$router.push({name: 'Connexion'})
                    )
                })
            }
        }
    };
</script>

<style scoped>
    p {
        font-size: 17px;
        text-align: center;
        margin: 20px 0;
    }

    .center-btn {
        display: block;
        margin: 0 auto;
    }

    .input-form {
        background: rgba(142, 144, 166, 0.1);
        width: 100%;
        outline: none;
        padding: 10px 20px;
        margin: 20px 0;
        border-radius: 8px;
    }

    .input-form:focus {
        background: rgba(142, 144, 166, 0.3);
    }

    .mail-verification {
        background: rgba(247, 250, 252, 1);
    }

    .btn {
        width: 100%;
    }
</style>
