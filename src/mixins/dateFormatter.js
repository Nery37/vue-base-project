
export default {
  methods: {
    addZero(number){
      return number <= 9 ? "0" + number : number
    },
    formatDateLocal(date) {
      var array = new Array();
      array = date.split(' ');
      array = array[0].split('-');
      return (array[2] + "/" + array[1] + "/" + array[0]);
    },
    formatDateISO(date){
      var day = String(date.getDate()).padStart(2, '0');
      var month = String(date.getMonth() + 1).padStart(2, '0');
      var year = date.getFullYear();
      return [year, month, day].join("-");
    },
  }
}
