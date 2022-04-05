const filterReducer = (filterState, filterAction) => {
  switch (filterAction.type) {
    case 'HIGH_TO_LOW':
      return { ...filterState, sortBy: filterAction.type }

    case 'LOW_TO_HIGH':
      return { ...filterState, sortBy: filterAction.type }

    case 'RATING':
      return { ...filterState, rating: filterAction.payload }
    case 'PRICE':
      return { ...filterState, priceValue: filterAction.payload }
    case 'DEODORANT':
      return { ...filterState, Deodorant: filterAction.payload }
    case 'PERFUME':
      return { ...filterState, Perfume: filterAction.payload }
    case 'FRAGRANCE':
      return { ...filterState, Fragrance: filterAction.payload }
    case 'BODYSPRAY':
      return { ...filterState, BodySpray: filterAction.payload }
    case 'CLEAR':
      return {
        ...filterState,
        priceValue: 2000,
        sortBy: '',
        rating: '',
        Deodorant: false,
        Perfume: false,
        Fragrance: false,
        BodySpray: false,
      }

    default:
      return filterState
  }
}

export { filterReducer }
