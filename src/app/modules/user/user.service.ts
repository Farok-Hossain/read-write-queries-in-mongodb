import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  // connect to mongodb

  //   id: "444444444",
  //   role: "student",
  //   password: "janina",
  //   name: {
  //     firstName: "Md",
  //     middleName: "Zahir",
  //     lastName: "Hossain",
  //   },
  //   gender: "male",
  //   email: "zahirkhan7@gmail.com",
  //   contactNo: "4122545565",
  //   emergencyContactNo: "14444444444",
  //   presentAddress: "Mirpur",
  //   parmanentAddress: "Pabna",
  // });
  const user = new User(payload);
  await user.save();
  console.log(user.fullName());
  return user;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne(
    { id: payload },
    { name: 1, email: 1, contactNo: 1 }
  );
  return user;
};

export const getAdminUsersFromDB = async () => {
  const admins = await User.getAdminUsers();
  return admins;
};

// static = class er sathe attach houya method directly call using class
