class GlobalState {
  static instance: GlobalState;

  userData: UserData[] = [];

  user: string | undefined;

  constructor() {
    this.loadFromLocalStorage();
  }

  static getInstance(): GlobalState {
    if (!GlobalState.instance) {
      GlobalState.instance = new GlobalState();
    }
    return GlobalState.instance;
  }

  setUserData(userData: UserData[]) {
    userData.forEach((newUser) => {
      const index = this.userData.findIndex(
        (user) => user.username === newUser.username
      );
      if (index > -1) {
        this.userData[index] = {...newUser};
      } else {
        if (newUser.username) {
          this.userData.push({...newUser});
        }
      }
    });
    this.saveToLocalStorage();
  }

  setUser(user: string) {
    this.user = user;
    this.saveToLocalStorage();
  }

  getUser() {
    return this.user;
  }

  getUserData() {
    return this.userData;
  }

  saveToLocalStorage() {
    localStorage.setItem("userData", JSON.stringify(this.userData));
  }

  loadFromLocalStorage() {
    const userData = localStorage.getItem("userData");
    if (userData) {
      this.userData = JSON.parse(userData);
    }
  }
}

export const globalState = GlobalState.getInstance();

export interface UserData {
  username?: string;
  score?: number;
}
