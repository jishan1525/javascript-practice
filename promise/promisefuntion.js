// pormiseApi 
// aking parallel calls to all 3 api -> it is used to hadle multiple promises at once --> takes itnerable(array) as argument
//promise.All([p1,p2,p3]) -> lets say p1 takes 3secs, p2 takes 1 sec and p3 takes 2 secs...if all the API call is success then O/p -> array of the result of this three -> after 3 secs(maximum of all -> it will wait for all to execute) 
// if any of this promise fails then it will throw an error immediately even if any one of the call fails
console.log("I am changed");