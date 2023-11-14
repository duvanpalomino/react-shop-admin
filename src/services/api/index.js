const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
    auth: {
        login: `${API}/api/${VERSION}/auth/login`,
        profile: `${API}/api/${VERSION}/auth/profile`,
        refreshToken: `${API}/api/${VERSION}/auth/refreshToken`,
    },
    products: {
        getList: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
        postProducts: `${API}/api/${VERSION}/products`,
        getProductId: (id) => `${API}/api/${VERSION}/products/${id}`,
        putProductsId: (id) => `${API}/api/${VERSION}/products/${id}`,
        deleteProductsId: (id) => `${API}/api/${VERSION}/products/${id}`,
    },
    users: {
        getUsers: (limit) => `${API}/api/${VERSION}/users?limit=${limit}`,
        postUsers: `${API}/api/${VERSION}/users`,
        getUserId: (id) => `${API}/api/${VERSION}/users/${id}`,
        putUsersId: (id) => `${API}/api/${VERSION}/users/${id}`,
        deleteUsersId: (id) => `${API}/api/${VERSION}/users/${id}`,
        isUserAvailable: `${API}/api/${VERSION}/users/is-available`,
    },
    categories: {
        getCategory: (limit) => `${API}/api/${VERSION}/categories?limit=${limit}`,
        postCategory: `${API}/api/${VERSION}/categories`,
        getCategoryId: (id) => `${API}/api/${VERSION}/categories/${id}`,
        putCategoryId: (id) => `${API}/api/${VERSION}/categories/${id}`,
        deleteCategoryId: (id) => `${API}/api/${VERSION}/categories/${id}`,
        getCategoryIdLimitOffset: (id, limit, offset) => `${API}/api/${VERSION}/categories/${id}/products?limit=${limit}/offset=${offset}`,
    },
    files: {
        postFiles: `${API}/api/${VERSION}/files/upload`,
        getFilename: (filename) => `${API}/api/${VERSION}/files/filename=${filename}`,
    }
};

export default endPoints;