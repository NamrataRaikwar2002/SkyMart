export const productReducer = (productState, productAction) => {
  const { cartList, wishList, quantity } = productState
  const cartItem = cartList.find(
    (item) => item._id === productAction.payload._id,
  )
  const wishListItem = wishList.find(
    (item) => item._id === productAction.payload._id,
  )
  switch (productAction.type) {
    case 'ADD_TO_CART':
      if (cartItem) {
        return { ...productState }
      } else {
        return {
          ...productState,
          cartList: [...cartList, productAction.payload],
        }
      }
    case 'REMOVE_FROM_CART':
      return {
        ...productState,
        cartList: cartList.filter(
          (item) => item._id != productAction.payload._id,
        ),
      }
    case 'ADD_TO_WISHLIST':
      if (wishListItem) {
        return { ...productState }
      } else {
        return {
          ...productState,
          wishList: [...wishList, productAction.payload],
        }
      }
    case 'MOVE_TO_CART':
      if (cartItem) {
        return {
          ...productState,
          wishList: wishList.filter(
            (item) => item._id !== productAction.payload._id,
          ),
        }
      }
      return {
        ...productState,
        cartList: [...cartList, productAction.payload],
        wishList: wishList.filter(
          (item) => item._id !== productAction.payload._id,
        ),
      }
    case 'REMOVE_FROM_WISHLIST':
      return {
        ...productState,
        wishList: wishList.filter(
          (item) => item._id !== productAction.payload._id,
        ),
      }
    case 'MOVE_TO_WISHLIST':
      if (wishListItem) {
        return {
          ...productState,
          cartList: cartList.filter(
            (item) => item._id !== productAction.payload._id,
          ),
        }
      } else {
        return {
          ...productState,
          wishList: [...wishList, productAction.payload],
          cartList: cartList.filter(
            (item) => item._id !== productAction.payload._id,
          ),
        }
      }
    case 'INCREASE_QUANTITY':
      return {
        ...productState,
        cartList: cartList.map((item) =>
          item._id === productAction.payload._id
            ? {
                ...item,
                quantity: item.quantity < 5 ? item.quantity + 1 : item.quantity,
              }
            : item,
        ),
      }
    case 'DECREASE_QUANTITY':
      return {
        ...productState,
        cartList: cartList.map((item) =>
          item._id === productAction.payload._id
            ? {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
              }
            : item,
        ),
      }
  }
}
