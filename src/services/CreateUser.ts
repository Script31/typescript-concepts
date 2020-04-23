interface TechObject {
  title: String,
  experence: number,
}

interface createUserData {
  name?: String;
  email: String;
  password: String;
  techs: Array<String | TechObject>
}
export default function createUser({
  name = "",
  email,
  password
}: createUserData) {
  const user = {
    name,
    email,
    password
  };

  return user;
}
