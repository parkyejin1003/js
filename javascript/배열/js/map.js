const userList=[{
    userId:"1",
    firstName:"jeehyun",
    lastName:"cho",
    yyyymmdd:'19800403',
    phone:"010-0000-0000",
    address:"seoul"
},
{
    userId:"2",
    firstName:"jeahii",
    lastName:"cho",
    yyyymmdd:'19900403',
    phone:"010-0000-0000",
    address:"seoul"
},
{
    userId:"3",
    firstName:"hyun",
    lastName:"cho",
    yyyymmdd:'20030403',
    phone:"010-0000-0000",
    address:"seoul"
}
]
const mon=["Jan", "Feb","Mar", "Apr", "May", "Jun","jul","Aug","Sep","Oct","Nov","Dec"];

console.log(mon[parseInt("05")-1])


const newUserList=userList.map(u =>({
    userId:u.userId,
    firstName:u.firstName,
    lastName:u.lastName,
    fullName:u.firstName + " " + u.lastName,
    yyyymmdd:u.yyyymmdd,
    year:u.yyyymmdd.substring(0,4),
    month:u.yyyymmdd.substring(4,6),
    day:u.yyyymmdd.substring(6,8),
    uDateFormat:(mon[parseInt(u.yyyymmdd.substring(4,6))-1] + "" + parseInt(u.yyyymmdd.substring(6,8)) + "" + u.yyyymmdd.substring(0,4)),
    phone:u.phone,
    address:u.address
}));
console.log(newUserList)