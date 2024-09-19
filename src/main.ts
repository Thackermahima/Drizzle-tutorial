import "dotenv/config";
import { db } from "./drizzle/db";
import { UserPreferencesTable, UserTable } from "./drizzle/schema";
import { asc, eq, sql } from "drizzle-orm";

async function main() {
    const users = await db.select().from(UserTable)
    // const users = await db 
    // .update(UserTable)
    // .set({
    //     age: 30,
    // })
    // .where(eq(UserTable.age, 29))
    // const users = await db 
    // .select({id: UserTable.id, age: UserTable.age, emailUpdates: UserPreferencesTable.emailUpdates})
    // .from(UserTable)
    // // .where(eq(UserTable.age, 29))
    // .leftJoin(
    //     UserPreferencesTable,
    //     eq(UserPreferencesTable.userId, UserTable.id)
    // )

    // await db.insert(UserPreferencesTable).values({
    //     emailUpdates: true,
    //     userId : "1cd92b4a-3305-4998-9b83-689965acc997"
    // })

//    const users =  await db.query.UserTable.findMany({
//     columns: { name : true, id : true },
//     orderBy: asc(UserTable.name),
    // with: {
    //     posts: {with: { postCategories: true } },
    // }
    // with: { preferences : true},
    // offset: 0
    // limit: 1
    // extras : {
    //   lowerCaseName: sql<string>`lower(${UserTable.name})`.as("lowerCaseName"),
    // },
    // columns: { email: false},
    // columns: { email: true, name: true},

   //})
   console.log(users);
   
    /* Value Insert*/
    // await db.delete(UserTable);
//     const user = await db.insert(UserTable).values([{
//         name: "Mahima",
//         age: 19,
//         email: "test@latest.com"
//     }, 
//     {
//         name: "Kyle", age : 29, email : "test1@test2.com",
//     },
// ]).returning({
//         id: UserTable.id,
//         userName: UserTable.name
//     }).onConflictDoUpdate({
//         target : UserTable.email,
//         set: { name: "Updated Name" }
//     })

//     console.log(user);
    
 //   await db.insert(UserTable).values({
//     name: "Mahima",
//   })
//   const user = await db.query.UserTable.findFirst()
//   console.log(user);
  
}

main()