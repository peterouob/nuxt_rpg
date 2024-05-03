const clueData = [
    {
        displace:process.client?JSON.parse(localStorage.getItem("clue")) : false,
        name:"線索一",
        img:"/images/clue/clue1.png",
    },
    {
        displace:process.client?JSON.parse(localStorage.getItem("clue")) : false,
        name:"線索二",
        img:"/images/clue/clue2.png",
    },
    {
        displace:process.client?JSON.parse(localStorage.getItem("clue")) : false,
        name:"線索三",
        img:"/images/clue/clue3.png",
    },
]

export default clueData