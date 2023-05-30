export const selectUser = state => state.auth.user;

export const selectPets = state => state.auth.pets;

export const selectIsUserLogin = state => state.auth.isUserLogin;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsLoading = state => state.auth.isLoading;

export const selectModalSuccessRegister = state =>
  state.auth.modalSuccessRegister;
