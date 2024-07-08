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
      const friendName = data.inputName;

      data.names.push(friendName);
      data.friendName = '';
      
      console.log(data.names);
    }

    const removeName = (index) => {
      data.names.splice(index, 1);
    }

    return {
      data, throwOnPile, removeName
     }
  }
}).mount('#app');
