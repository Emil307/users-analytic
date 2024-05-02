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
    if (this.searchedUsers.length > 0) {
      this.searchedUsers = this.searchedUsers.filter((user) => email !== user.email);
      return
    }
    if (this.searchedUsers.length === 0) {
      this.users = this.users.filter((user) => email !== user.email);
      return
    }
  }

  search(term: string) {
    if (term === '') {
      this.searchedUsers = [];
      return
    }
    const filtered = this.users.filter((user) => {
      const isName = (user.name.first + user.name.last + user.name.last).includes(term);
      const isEmail = user.email.includes(term);
      const isPhone = user.phone.includes(term);
      const isDOB = new Date(user.dob.date).toLocaleDateString().includes(term);
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
