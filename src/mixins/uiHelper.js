export default {
  methods: {
    scroll(top) {
      this.$nextTick(() => {
        window.scroll({ top: top || 50, behavior: 'smooth' });
      });
    },
  }
}
