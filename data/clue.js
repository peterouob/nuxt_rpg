const clueData = [
    {
        displace:process.client?JSON.parse(localStorage.getItem("clue")) : false,
        name:"線索一",
        img:"../public/send/clue1",
    },
    {
        displace:process.client?JSON.parse(localStorage.getItem("clue")) : false,
        name:"線索二",
        img:"../public/send/clue1",
    },
    {
        displace:process.client?JSON.parse(localStorage.getItem("clue")) : false,
        name:"線索三",
        img:"../public/send/clue1",
    },
]

export default clueData