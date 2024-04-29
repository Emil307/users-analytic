import { IUser } from "@/shared";

export function calcAnalytic(users: IUser[]) {
    let maleCount = 0;
    let femaleCount = 0;
    let to20 = 0;
    let to30 = 0;
    let to40 = 0
    let to50 = 0;
    let more50 = 0;

    users && users.forEach((user: IUser) => {
        if (user.gender === 'male') {
          maleCount += 1
        }
        if (user.gender === 'male') {
          femaleCount += 1
        }
  
        switch (true) {
          case (11 <= user.dob.age) && (20 >= user.dob.age):
            to20 += 1;
            break
          case (21 <= user.dob.age) && (30 >= user.dob.age):
            to30 += 1;
            break
          case (31 <= user.dob.age) && (40 >= user.dob.age):
            to40 += 1;
            break
          case (41 <= user.dob.age) && (50 >= user.dob.age):
              to50 += 1;
              break
          default:
            more50 += 1;
            break
        }
    })

    return {
        maleCount: maleCount,
        femaleCount: femaleCount,
        to20: to20,
        to30: to30,
        to40: to40,
        to50: to50,
        more50: more50,
      }
}
