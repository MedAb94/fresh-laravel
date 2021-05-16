<template>
    <section class="inscription light mb-0">
        <v-container>
            <v-row class="justify-center" align="center">
                <v-col cols="12" md="8" lg="8">
                    <v-card flat class="pa-8">
                        <h3
                            class="text-center text-uppercase mb-5"
                            style="color:#243063;font-weight:700"
                        >
                            Création d'utilisateur
                        </h3>
                        <p
                            class="danger--text text-center font-weight-bold"
                            v-if="error"
                        >
                            {{ error }}
                        </p>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <div class="form-group">
                                <label>Prénom </label>
                                <v-text-field
                                    v-model="payload.name"
                                    filled
                                    :rules="[rules.required]"
                                />
                            </div>
                            <div class="form-group">
                                <label>Nom </label>
                                <v-text-field
                                    v-model="payload.last_name"
                                    filled
                                />
                            </div>
                            <div class="form-group">
                                <label>Email </label>
                                <v-text-field v-model="payload.email" filled :rules="[rules.required, rules.email]" />
                            </div>

                            <div class="form-group">
                                <v-text-field
                                    :append-icon="
                                        show1 ? 'mdi-eye' : 'mdi-eye-off'
                                    "
                                    :rules="[rules.required, rules.min]"
                                    :type="show1 ? 'text' : 'password'"
                                    filled
                                    required
                                    v-model="payload.password"
                                    @click:append="show1 = !show1"
                                />
                            </div>
                            <div class="form-group">
                                <label>Cds</label>
                                <v-autocomplete
                                    :items="cdss"
                                    v-model="payload.cds_id"
                                    filled
                                    :rules="[rules.required]"
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
                                    Enregistrer
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
    name: "New",
    data() {
        return {
            payload: {
                name: "",
                last_name: "",
                email: "",
                telephone: "",
                cds_id: "",
                password: "",
                password_confirm: ""
            },

            rules: {
                required: value => !!value || "Obligatoire",
                min: v => v.length >= 6 || "Min 6 characters",
                max: v => v.length <= 50 || "100 characteres au plus",
                isNumber: v => Number(v) == v || "Valeur invalid",
                passMatch: v =>
                    v === this.user.password ||
                    `Password and password confirmation don't match`,
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return pattern.test(value) || "Votre email est invalide.";
                }
            },

            valid: true,
            loading: false,
            error: "",
            show1: false
        };
    },
    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                this.saveIndicateur();
            }
        },
        saveIndicateur() {
            this.loading = true;
            this.$store
                .dispatch("createUser", this.payload)
                .then(res => {
                    this.loading = false;
                    this.$swal
                        .fire(
                            "Reussi!",
                            "L'utilisateur été creé avec succées",
                            "success"
                        )
                        .then(() => {
                            this.$router.push({
                                name: "AllUsers"
                            });
                        });
                })
                .catch(err => {
                    this.loading = false;
                    this.error = err.response.data;
                    console.log(err.response);
                });
        }
    },
    computed: {
        ...mapGetters(["allCdss"]),
        cdss() {
            let cams = [];
            let items = this.allCdss;
            for (const o in items) {
                cams.push(items[o].id + "-" + items[o].libelle);
            }
            return cams;
        }
    },
    created() {
        this.$store.dispatch("fetchCdss");
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
