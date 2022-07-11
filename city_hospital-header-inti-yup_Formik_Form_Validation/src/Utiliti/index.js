export const isLogin = () => {
    const Login = localStorage.getItem("user");

    if (Login === "123") {
        return true;
    } else {
        return false;
    }
}