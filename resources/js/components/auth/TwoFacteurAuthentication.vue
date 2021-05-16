<template>
  <section class="two-facteur-authentification pt-10">
    <v-container>
      <h3 class="text-center py-8">Sesur</h3>
      <v-row justify="center" align="center">
        <v-col cols="12" md="7">
          <v-card class="pa-12 w-100">
            <h4 class="">Veuilllez entrer votre code de verification</h4>
            <p class="py-8">
              Nous avons envoyé un code au +22999999999, entrez ce code dans le
              champs suivant pour vous connecter.
            </p>
            <v-form>
              <div class="form-group">
                <label for="">Code de verification</label>

                <v-text-field
                  id="email"
                  filled
                  type="number"
                  placeholder="dalmeidacyrus@gmail.com"
                  clearable
                ></v-text-field>
              </div>
              <div class="form-group d-flex justify-center">
                <v-btn text large class="primary mt-5 btn">Confirmer</v-btn>
              </div>
            </v-form>

            <v-btn text color="primary" class="center-btn mt-8 text-capitalize"
              >Renvoyer le code ?</v-btn
            >
            <v-btn text color="primary" class="center-btn text-capitalize"
              >Retour</v-btn
            >
          </v-card>
        </v-col>
      </v-row>
      <v-layout justify-center class="py-8">
        <v-btn class="text-capitalize" text
          >Vous rencontrez des problèmes</v-btn
        >
        <v-btn class="text-capitalize" text>Contactez-nous</v-btn>
      </v-layout>
    </v-container>

    <Footer />
  </section>
</template>

<script>
export default {
  name: "TwoFacteurAuthentication",
};
</script>

<style scoped>
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
.two-facteur-authentification {
  background: rgba(247, 250, 252, 1);
}
.btn {
  width: 100%;
}
</style>
