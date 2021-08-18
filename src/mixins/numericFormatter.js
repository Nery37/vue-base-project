import accounting from 'accounting';

export default {
  methods: {
    formatCurrency(number) {
      return accounting.formatMoney(number, 'R$ ', 2, '.', ',');
    },
    formatPercentage(number) {
      return accounting.formatMoney(number, { symbol: '%', format: '%v %s', precision: 2, decimal: ',', thousand: '.' });
    }
  }
}
