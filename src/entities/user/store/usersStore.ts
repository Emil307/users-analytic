import { makeAutoObservable } from "mobx";
import { IUser } from "@/shared";

class UsersState {
  users: IUser[] = [];
  searchedUsers: IUser[] = []
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUsers(users: IUser[]) {
    this.users = users;
  }

  deleteUser(email: string) {
    console.log(email);
    this.users = this.users.filter((user) => email !== user.email);
    console.log(this.users);
  }

  search(term: string) {
    const filtered = this.users.filter((user) => {
      const isName = (user.name.first + user.name.last + user.name.last).includes(term);
      const isEmail = user.email.includes(term);
      const isPhone = user.phone.includes(term);
      const isDOB = false;
      const isAdress = (
        user.location.city + user.location.state + user.location.country
      ).includes(term);

      return isName || isEmail || isPhone || isDOB || isAdress;
    })
    this.searchedUsers = filtered;
  }

  setIsLoading(value: boolean) {
    this.isLoading = value;
  }
}

export default new UsersState();
