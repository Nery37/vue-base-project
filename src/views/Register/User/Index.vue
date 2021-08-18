<template>
  <div class="card card-page">
    <div class="card-body shadow">
      <WizardNavigator
        :steps="steps"
        :routeIndexes="routeIndexes"
        :identifier="quotationId"
        identifierRouteKey="quotationId"
      />
      <div class="container container-cozy">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import WizardNavigator from '@/components/Register/WizardNavigator';

export default {
  name: "Guarantee",
  props: {
    quotationId: {
      type: String
    },
  },
  components: {
    WizardNavigator,
  },
  data: () => ({
    steps: [
      "Pacote",
      "Cadastro",
      "Validação",
      "Pagamento",
      "Final",
    ],
    routeIndexes: {
      'package': 1,
      'register': 2,
      'validation': 3,
      'payment': 4,
      'final': 5
    }
  }),
};
</script>

<style>
</style>
