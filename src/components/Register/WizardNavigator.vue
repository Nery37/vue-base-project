<template>
  <nav class="card-page-wizard mb-5 mt-2">
    <ul class="d-flex justify-content-center flex-wrap flex-md-nowrap">
      <li
        v-for="(step, index) in steps"
        :key="step"
        class="d-block"
        :class="getItemClassObj(index)"
      >
        <a class="d-block"
          @click="goToIndex(index + 1)"
          :style="getLinkStyle(index + 1)">
          <span class="icon">{{ index + 1 }}</span>
          <span class="label">{{ step }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "WizardNavigator",
  data: () => ({
    currentIndex: 0,
    disableStepsNavigation: false,
  }),
  props: {
    steps: {
      type: Array,
      required: true
    },
    routeIndexes: {
      type: Object,
      require: true
    },
    identifier: {
      type: String
    },
    identifierRouteKey: {
      type: String,
      required: true
    },
  },
  created() {
    this.refreshRouteParams(this.$router.app._route);
  },
  methods: {
    getLinkStyle(index) {
      if (index >= this.currentIndex || this.disableStepsNavigation) {
        return {};
      }

      return {
        'cursor': 'pointer'
      };
    },
    getIndexFromRouteName(routeName) {
     return this.routeIndexes[routeName];
    },
    getRouteNameFromIndex(index) {
      return Object.keys(this.routeIndexes).find(key => this.routeIndexes[key] === index);
    },
    goToIndex(index) {
      if (index >= this.currentIndex || this.disableStepsNavigation) {
        return;
      }

      let params = {};
      if (this.identifier) {
        params = {
          [this.identifierRouteKey]: this.identifier
        };
      }
      this.$router.push({
        name: this.getRouteNameFromIndex(index),
        params
      });
    },
    refreshRouteParams(routeObject) {
      this.currentIndex = this.getIndexFromRouteName(routeObject.name);
      if (routeObject.meta.wizardNavigator) {
        this.disableStepsNavigation = routeObject.meta.wizardNavigator.disableStepsNavigation || false;
        return;
      }
      this.disableStepsNavigation = false;
    },
    getItemClassObj(itemIndex) {
      if(itemIndex < this.currentIndex && !this.disableStepsNavigation) {
        return [
          'checked',
          'active'
        ]
      }
      return [];
    }
  },
  watch: {
    '$route' (to) {
      this.refreshRouteParams(to);
    }
  }
};
</script>

<style>
</style>
