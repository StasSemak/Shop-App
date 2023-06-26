export interface LoginItem {
    email: string;
    password: string;
}

export interface RegisterItem {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
    imageBase64: string;
}

export interface UserItem {
    id: number;
    userName: string;
    email: string;
    role: string;
    image: string; 
}

export function isUserLogged() {
    return (localStorage.isLogged === 'true');
}

export function logIn(user: UserItem) {
    localStorage.setItem("isLogged", "true");
    localStorage.setItem("loggedUser", JSON.stringify(user));
}

export function logOut() {
    localStorage.setItem("isLogged", "false");
    localStorage.setItem("loggedUser", JSON.stringify({}));
}

export function getLoggedUser() {
    return JSON.parse(localStorage.loggedUser) as UserItem;
}