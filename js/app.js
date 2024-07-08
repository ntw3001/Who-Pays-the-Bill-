const {createApp, reactive, computed} = Vue;

const defaultState = {
  state: true,
  inputName:'',
  names:[],
  error:'',
  showError: false,
  result:''
}

createApp({
  setup(){
    const data = reactive(defaultState);

    const throwOnPile = () => {

    }

    return {
      data
     }
  }
}).mount('#app');
