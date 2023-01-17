export const fetchUser = () => {
    const getUser  = JSON.parse(localStorage.getItem('user')!)
    return getUser !== undefined ? getUser : localStorage.clear()
}