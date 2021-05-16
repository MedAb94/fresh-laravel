<template>
    <div>
        <section class="inscription primary--text light">
            <v-container>
                <v-row class="justify-center" align="center">
                    <v-col cols="12" md="5">
                        <v-card class="px-8 py-2">
                            <div class="text-center ">
                                <img
                                    src="../../assets/logo.png"
                                    width="80px"
                                    class="mx-auto"
                                    alt=""
                                />
                            </div>
                            <h5
                                class="text-center text-uppercase"
                                style="color:#243063;font-weight:700"
                            >
                                {{$t('nav.ministere')}}
                            </h5>
                            <p class=" text-center">
                                <strong>{{$t('nav.direction')}}</strong>
                            </p>
                            <p class="red--text text-center font-weight-bold"
                               v-if="error"
                            >
                                {{ error }}
                            </p>
                            <v-form @submit.prevent()>
                                <div class="form-group">
                                    <label>Nom d'utilisateur</label>
                                    <v-text-field
                                        v-model="user.email"
                                        filled
                                        :rules="[rules.required, rules.email]"
                                    />
                                </div>
                                <div class="form-group">
                                    <v-row class="primary--text">
                                        <v-col cols="12" class="black--text"
                                        >Mot de passe
                                        </v-col>

                                    </v-row>

                                    <div class="form-group">
                                        <v-text-field
                                            :append-icon="
                                            show1 ? 'mdi-eye' : 'mdi-eye-off'
                                        "
                                            :rules="[rules.required, rules.min]"
                                            :type="show1 ? 'text' : 'password'"
                                            filled
                                            required
                                            v-model="user.password"
                                            @click:append="show1 = !show1"
                                        />
                                    </div>
                                </div>
                                <div class=" d-flex justify-center">
                                    <v-btn
                                        text
                                        large
                                        block
                                        class="primary mt-5"
                                        color="white"
                                        :loading="loading"
                                        @click="login"
                                    >
                                        Se connecter
                                    </v-btn>
                                </div>
                            </v-form>
                            <div class="my-2 text-center">
                                <router-link :to="{name: 'Forgot'}"
                                >Mot de passe oublié ?
                                </router-link
                                >
                            </div>
                        </v-card>
                        <!--                        <div class="mt-5 text-center">-->
                        <!--                            Vous n'avez pas de compte?-->
                        <!--                            <router-link-->
                        <!--                                :to="{ name: 'Inscription' }"-->
                        <!--                                class="primary&#45;&#45;text ml-5"-->
                        <!--                            >-->
                        <!--                                S'inscrire-->
                        <!--                            </router-link>-->
                        <!--                        </div>-->
                    </v-col>
                </v-row>
            </v-container>

        </section>
    </div>
</template>

<script>
    export default {
        name: "Connexion",
        data() {
            return {
                loading: false,
                error: "",
                user: {
                    email: "",
                    password: ""
                },
                rules: {
                    required: value => !!value || "Obligatoire",
                    min: v => v.length >= 6 || "Min 6 characters",
                    passMatch: v =>
                        v === this.user.password ||
                        `Password and password confirmation don't match`,
                    email: value => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return pattern.test(value) || "Votre email est invalide.";
                    }
                },
                show1: false
            };
        },
        // components: {VueReCaptcha},
        methods: {
            login() {
                this.loading = true;
                let user = this.user;
                this.$store
                    .dispatch("login", user)
                    .then(res => {
                        this.loading = false;
                        // if (this.$route.query.redirect) {
                        //     this.$router.push(this.$route.query.redirect);
                        //     return
                        // }
                        // if (res.data.role === "admin") {
                            this.$router.push({name: "Dashboard"});
                            // return
                        // } else {
                        //     this.$router.push({name: "UserDashboard"});
                        // }

                    })
    .catch(err => {
        this.loading = false;
        console.log(err.response);
        if (err.response.status == 400) {
            this.error = err.response.data.incorrectLogin[0];
        } else {
            this.error = err.response.data.incorrectLogin;
            this.$router.push({
                name: "MailVerification",
                params: {email: this.user.email}
            });
        }
    });
    }
    }
    }
    ;
</script>

<style scoped>
    .input-form {
        background: rgba(142, 144, 166, 0.1);
        width: 100%;
        border-radius: 2px;
    }

    .input-form:focus {
        background: rgba(142, 144, 166, 0.3);
    }
</style>
