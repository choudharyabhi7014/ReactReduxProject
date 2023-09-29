export const addToCart = (products) => {
    return ({
    type: 'AddToCart',
    payload: products
  })};
  export const removeFromCart = (products) => {
    return ({
    type: 'RemoveCart',
    payload: products
  })};