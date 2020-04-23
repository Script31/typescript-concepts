import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function Hello(request: Request, response: Response) {
  const user = createUser({
    name: "elves trindade",
    email: "elvestrindade@gmail.com",
    password: "1245",
    techs: [
      "node",
      "react",
      "react-native",
      { title: "javascript", experince: 100 }
    ]
  });

  return user;
}
