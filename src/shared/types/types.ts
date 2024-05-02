type TName = {
    title: string,
    first: string,
    last: string    
}

type TLogin = {
    uuid: string,
    username: string,
    password: string,
    salt: string,
    md5: string,
    sha1: string,
    sha256: string
}

interface ILocation {
    street: {
        number: number,
        name: string,
      },
      city: string,
      state: string,
      country: string,
      postcode: string,
      coordinates: {
        latitude: string,
        longitude: string
      },
      timezone: {
        offset: string,
        description: string
      }
}

type TPicture = {
    large: string,
    medium: string,
    thumbnail: string
}

export interface IUser {
    gender: "female" | "male",
    name: TName,
    location: ILocation,
    email: string,
    login: TLogin,
    dob: {
        date: string,
        age: number
    },
    registered: {
        date: string,
        age: number
    },
    phone: string,
    cell: string,
    id: {
        name: string,
        value: string
    },
    picture: TPicture,
    nat: string,
}
