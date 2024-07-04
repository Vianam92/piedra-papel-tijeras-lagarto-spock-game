let users: string[] = JSON.parse(localStorage.getItem("users") || "[]");

export const ls = (user: string) => {
  if (users.length > 0) {
    if (findUser(user)) {
      console.log("user found")
    } else {
      users.push(user);
      setValue(users);
    }
  } else{
    users.push(user);
    setValue(users);
  }

};

const setValue = (users: string[]) =>
  localStorage.setItem("users", JSON.stringify(users));

export const findUser = (user: string) => users.includes(user);