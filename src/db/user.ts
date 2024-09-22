import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function createUser(username: string, password: string, firstName: string, lastName: string){
    const res = await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName
        }
    })
    console.log(res);
}

// createUser("bvti", "jvt", "Pushkar", "Gupta")

interface updateParams{
    firstName: string,
    lastName: string
}

async function updateUser(username: string, {firstName, lastName}: updateParams){
    const res = await prisma.user.update({
        where: {username},
        data: {
            firstName,
            lastName
        }
    })
    console.log(res);
}

// updateUser("bvti", {firstName: "Push", lastName: "Gupta"})

async function getUser(username: string){
    const res = await prisma.user.findFirst({
        where: {username}
    })

    console.log(res);
}

getUser("bvti")