<template>
    <section class="inscription light mb-0">
        <v-container>
            <v-row class="justify-center" align="center">
                <v-col cols="12" md="5">
                    <v-card flat class="pa-8">
                        <h3
                            class="text-center text-uppercase mb-5"
                            style="color:#243063;font-weight:700"
                        >
                            Créer un compte
                        </h3>
                        <p
                            class="danger--text text-center font-weight-bold"
                            v-if="error"
                        >
                            {{ error }}
                        </p>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <div class="form-group">
                                <label>Nom </label>
                                <v-text-field
                                    v-model="user.name"
                                    filled
                                    :rules="[rules.required]"
                                />
                            </div>
                            <div class="form-group">
                                <label>Prénoms</label>
                                <v-text-field
                                    v-model="user.last_name"
                                    filled
                                    :rules="[rules.required]"
                                />
                            </div>

                            <div class="form-group">
                                <label>Email</label>
                                <v-text-field
                                    v-model="user.email"
                                    filled
                                    :rules="[rules.required, rules.email]"
                                />
                            </div>
                            <div class="form-group">
                                <label>Mot de passe</label>
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
                            <div class="form-group">
                                <label>Confirmer mot de passe</label>
                                <v-text-field
                                    :append-icon="
                                        show2 ? 'mdi-eye' : 'mdi-eye-off'
                                    "
                                    :rules="[rules.required, rules.passMatch]"
                                    :type="show2 ? 'text' : 'password'"
                                    filled
                                    v-model="user.password_confirmation"
                                    @click:append="show2 = !show2"
                                />
                            </div>

                            <div class="form-group d-flex justify-center">
                                <v-btn
                                    text
                                    large
                                    block
                                    class="primary mt-5 text-uppercase"
                                    color="white"
                                    :disabled="!valid"
                                    :loading="loading"
                                    @click="validate"
                                >
                                    Créer mon compte
                                </v-btn>
                            </div>

                            <div class="text-sm text-center">
                                En cliquant sur le bouton «Créer mon compte»,
                                vous acceptez nos
                            </div>
                            <div class="text-center primary--text">
                                Conditions d'utilisation acceptable
                            </div>
                        </v-form>
                    </v-card>
                    <div class="text-center">
                        Vous avez déja un compte?
                        <router-link
                            :to="{ name: 'Connexion' }"
                            class="primary--text ml-5"
                            >Connecter</router-link
                        >
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "Inscription",
    data() {
        return {
            user: {
                name: "",
                last_name: "",
                nationalite: "",
                email: "",
                password: "",
                password_confirmation: ""
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
            show1: false,
            show2: false,
            valid: true,
            loading: false,
            error: ""
        };
    },
    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                this.register();
            }
        },
        register() {
            this.loading = true;
            let user = this.user;
            this.$store
                .dispatch("register", user)
                .then(res => {
                    this.loading = false;
                    this.$router.push({
                        name: "MailVerification",
                        params: { email: this.user.email }
                    });
                })
                .catch(err => {
                    this.loading = false;
                    console.log(err.response.data.email[0]);
                    this.error = err.response.data.email[0];
                });
        }
    },
    computed: {
        ...mapGetters(["authLoading"])
    }
};
</script>

<style scoped>
.input-form {
    width: 100%;
    outline: none;
    padding: 10px 20px;
    border-radius: 3px;
}

.input-form:focus {
    background: rgba(142, 144, 166, 0.3);
}

.text-sm {
    font-size: 12px;
}
</style>
