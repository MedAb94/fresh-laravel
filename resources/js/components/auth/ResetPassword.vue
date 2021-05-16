<template>
    <section class="inscription light mb-0">
        <v-container>
            <v-row class="justify-center" align="center">
                <v-col cols="12" md="5">
                    <v-card flat class="pa-8">
                        <h5
                            class="text-center text-uppercase mb-5"
                        >
                            Choisissez un nouveau mot de passe
                        </h5>
                        <v-form ref="form" v-model="valid" lazy-validation>
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
                                    class="mt-5 text-uppercase"
                                    color="white"
                                    style="background:#243063;"
                                    :disabled="!valid"
                                    :loading="loading"
                                    @click="validate"
                                >
                                    Valider
                                </v-btn>
                            </div>
                        </v-form>
                    </v-card>
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
                email: "",
                token: this.$route.params.token,
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
                this.savePass();
            }
        },
        savePass() {
            this.loading = true;
            let user = this.user;
            axios.post('/reset_password', user)
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
    },

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
