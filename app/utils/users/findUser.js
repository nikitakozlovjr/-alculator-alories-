export default (users, username) => users.find((user) => {
    return user.username === username
});