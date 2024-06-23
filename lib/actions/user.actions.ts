"use server"

import { CreateUserParams } from "@/types"
import { handleError } from "../utils"
import { connectToDatabase } from "../database"
import User from "../database/models/user.model"

export async function createUser(user: {
    firstName: any;
    lastName: any;
    clerkId: string | undefined;
    photo: any;
    email: any;
    username: any
}) {
    try {
      await connectToDatabase()
  
      const newUser = await User.create(user)
      return JSON.parse(JSON.stringify(newUser))
    } catch (error) {
      handleError(error)
    }
  }
  