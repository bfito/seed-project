export class User {
  constructor(public email: string,
            public password: string,
            public firstName?: string,
            public lastName?: string) {}
}

//             public firstName?: string, the ? makes the field optional, will have option to pass this field but nor required
