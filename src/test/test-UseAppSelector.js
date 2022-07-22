import { usuarios } from "../simulacros"

 const state = {
  usersData:  usuarios
 }
 export  const testUseAppSector = (fn) => fn(state)