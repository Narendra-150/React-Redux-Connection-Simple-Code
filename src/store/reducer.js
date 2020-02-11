const initialState = {
  count: 9
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      console.log("Inside ADD");
      return {
        count: state.count + 2
      };
    }

    case "SUB": {
      console.log("Inside SUB");
      return {
        count: state.count - 2
      };
    }

    case "MULT": {
      console.log("Inside MULT");
      return {
        count: state.count * 2
      };
    }

    case "DIV": {
      console.log("Inside DIV");
      return {
        count: state.count / 2
      };
    }

    case "Cust": {
      console.log("Inside Cust");
      return {
        count: state.count + action.value
      };
    }

    default: {
      console.log("Inside Default");
      return {
        count: state.count + 0
      };
    }
  }
};
export default reducer;
