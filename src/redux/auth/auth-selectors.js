const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserName = (state) => state.auth.user.name;

const getIsLoading = (state) => state.auth.loading;

export default { getIsAuthenticated, getUserName, getIsLoading };