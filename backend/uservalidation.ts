export function isValidUsername(username: string, password: string)
{
   if(password.length<20) return false;
   return true;
}