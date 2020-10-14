<template>
  <v-card>
    <v-toolbar dense color="primary" dark>
      <v-toolbar-title class="headline text-uppercase mr-4">
        <span>Stock</span>
        <span class="font-weight-light">Trader</span>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn color="primary" to="/">Início</v-btn>
        <v-btn color="primary" to="/portfolio">Portfólio</v-btn>
        <v-btn color="primary" to="/acoes">Ações</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn @click="endDay" color="primary">Finalizar Dia</v-btn>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" color="primary"
              >Salvar & Carregar</v-btn
            >
          </template>
          <v-list>
            <v-list-item @click="saveData">
              <v-list-tile-title>Salvar Dados</v-list-tile-title>
            </v-list-item>
            <v-list-item @click="loadDataLocal">
              <v-list-tile-title>Carregar Dados</v-list-tile-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-row class="ml-4 flex-column" align="center" no-gutters>
          <v-row align="center" no-gutters>
            Saldo:
          </v-row>
          <v-row align="center" no-gutters>
            {{ funds | currency }}
          </v-row>
        </v-row>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
    ...mapActions(["randomizeStocks", "loadData"]),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const { funds, stockPortfolio, stocks } = this.$store.getters;
      this.$http.put("data.json", { funds, stockPortfolio, stocks });
    },
    loadDataLocal() {
      this.loadData();
    },
  },
};
</script>

<style></style>
