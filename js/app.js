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

    const isReady = computed(() => {
      return data.names.length > 0;
    });

    const throwOnPile = () => {
      const friendName = data.inputName;

      if(validate(friendName)){
      data.names.push(friendName);
      data.inputName = '';
      data.showError = false;
      } else {
        data.showError = true;
      }
      console.log(data.names);
    }

    const validate = (value) => {
      if(value === ''){
        data.error = 'A true friend should have a name!';
        return false;
      }

      if(data.names.includes(value)){
        data.error = 'You can\'t have two friends with the same name!';
        return false;
      }

      return true;
    }

    const removeName = (index) => {
      data.names.splice(index, 1);
    }

    const getName = () => {
      return data.names[Math.floor(Math.random() * data.names.length)];
    }

    const worstFriend = function () {
      let rand = getName();

      if(data.result!== ""){
        while(rand === data.result){
          rand = getName();
        }
      }
      data.result = rand;
    }

    const showResults = () => {
      worstFriend()
      data.state = false;
    }

    const resetAll = () => {
        data.state = true;
        data.inputName ='';
        data.names = [];
        data.error = '';
        data.showError = false;
        data.result = '';
      }

      const newWorstFriend = () => {
        worstFriend();
      }

    return {
      data, throwOnPile, removeName, isReady, showResults, worstFriend, newWorstFriend, resetAll
     }
  }
}).mount('#app');
