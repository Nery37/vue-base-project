export default {
  data: () => ({
    alert: {
      type: null,
      message: null
    },
  }),
  computed: {
    alertVariant() {
      const variants = {
        'error': 'danger',
        'success': 'success'
      };

      return this.alert.type ? variants[this.alert.type] : null;
    },
    alertMessage() {
      return this.alert.message;
    },
  },
  methods: {
    resetAlert() {
      this.alert = {
        type: null,
        message: null
      };
    },
    showError(message) {
      this.alert = {
        type: 'error',
        message
      };
    },
    showSuccess(message) {
      this.alert = {
        type: 'success',
        message
      };
    }
  },
}
