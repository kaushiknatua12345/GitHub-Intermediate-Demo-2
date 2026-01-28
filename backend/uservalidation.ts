export function isValidUsername(username: string, password: string)
{
   if(!username && password.length>788) return false;
   return true;
}
