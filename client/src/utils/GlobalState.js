import React, { createContext, useContext } from "react";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false, 
    categories: [],
    currentCategory: '',
  });

  console.log(state);
  return <Provider value={[state, dispatch]} {...props} />;
}

const useStoreContext = () => {
  return useContext(StoreContext);
};

// export { StoreProvider, useStoreContext };