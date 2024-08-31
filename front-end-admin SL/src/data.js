export const menu = [
    {
        id: 1,
        title: "main",
        listItems: [
            {
                id: 1,
                title: "Homepage",
                url: "/",
                icon: "fas fa-home"
            },
            {
                id: 2,
                title: "Profile",
                url: "/users/1",
                icon: "fas fa-user-tie"
            }
        ]
    },
    {
        id: 2,
        title: "Compte",
        listItems: [
            {
                id: 0,
                title: "Utilisateurs",
                url: "/users",
                icon: "fas fa-user-tie"
            },
            {
                id: 1,
                title: "Prof",
                url: "/profs",
                icon: "fas fa-user-tie"
            }
        ]
    },
    {
        id: 3,
        title: "general",
        listItems: [
            {
                id: 1,
                title: "Cours",
                url: "/cours",
                icon: "fas fa-shopping-cart"
            },
            {
                id: 2,
                title: "Classes",
                url: "/classes",
                icon: "fas fa-file-alt"
            },
            {
                id: 3,
                title: "Matieres",
                url: "/matieres",
                icon: "fas fa-paper-plane"
            },
            {
                id: 4,
                title: "Annonces",
                url: "/annonces",
                icon: "fas fa-paper-plane"
            }
        ]
    },
    {
        id: 4,
        title: "analytics",
        listItems: [
            {
                id: 1,
                title: "Notes",
                url: "/note",
                icon: "fas fa-chart-bar"
            },
            {
                id: 2,
                title: "Disciplines",
                url: "/discipline",
                icon: "fas fa-sign-out-alt"
            },
            {
                id: 3,
                title: "Programmes",
                url: "/programme",
                icon: "fas fa-sign-out-alt"
            },
            {
                id: 4,
                title: "Scolarité",
                url: "/scolarite",
                icon: "fas fa-sign-out-alt"
            }
        ]
    },
    {
        id: 5,
        title: "maintenance",
        listItems: [
            {
                id: 1,
                title: "Settings",
                url: "/",
                icon: "fas fa-cogs"
            }
        ]
    }
]

export const topDealsUsers = [
    {
        id: 1,
        img: "avatar2.jpg",
        username: "Elva Mcdonald",
        email: "elva@gmail.com",
        amount: "16.668"
    },
    {
        id: 2,
        img: "avatar1.jpg",
        username: "Linnie Nelson",
        email: "linnie@gmail.com",
        amount: "16.256"
    },
    {
        id: 3,
        img: "avatar2.jpg",
        username: "Brend Reeves",
        email: "brend@gmail.com",
        amount: "15.998"
    },
    {
        id: 4,
        img: "avatar1.jpg",
        username: "Adeline Watson",
        email: "adeline@gmail.com",
        amount: "15.512"
    },
    {
        id: 5,
        img: "avatar2.jpg",
        username: "Juan Harrington",
        email: "juan@gmail.com",
        amount: "15.134"
    }
    ,
    {
        id: 6,
        img: "avatar1.jpg",
        username: "Augusta McGee",
        email: "augusta@gmail.com",
        amount: "14.932"
    }
    // ,
    // {
    //     id: 7,
    //     img: "avatar2.jpg",
    //     username: "Angel Thomas",
    //     email: "angel@gmail.com",
    //     amount: "1.560"
    // }

]

export const chartBoxUser = {
    color: "#7777f6",
    icon: "fas fa-object-ungroup",
    title: "Total Users",
    dataKey: "users",
    number: "11.238",
    percentage: 45,
    chartData: [
        { name: "Sun", users: 400 },
        { name: "Mon", users: 600 },
        { name: "Tue", users: 500 },
        { name: "Wed", users: 700 },
        { name: "Thu", users: 400 },
        { name: "Fri", users: 500 },
        { name: "Sat", users: 450 },
    ],
}

export const chartBoxProduct = {
    color: "#7777f6",
    icon: "fas fa-object-ungroup",
    title: "Specialités",
    dataKey: "products",
    number: "238",
    percentage: 21,
    chartData: [
        { name: "Sun", products: 400 },
        { name: "Mon", products: 600 },
        { name: "Tue", products: 500 },
        { name: "Wed", products: 700 },
        { name: "Thu", products: 400 },
        { name: "Fri", products: 500 },
        { name: "Sat", products: 450 },
    ],
}

export const chartBoxRevenue = {
    color: "#7777f6",
    icon: "fas fa-object-ungroup",
    title: "Total matieres",
    dataKey: "revenue",
    number: "56.432",
    percentage: -12,
    chartData: [
        { name: "Sun", revenue: 400 },
        { name: "Mon", revenue: 600 },
        { name: "Tue", revenue: 500 },
        { name: "Wed", revenue: 700 },
        { name: "Thu", revenue: 400 },
        { name: "Fri", revenue: 500 },
        { name: "Sat", revenue: 450 },
    ],
}

export const chartBoxConversion = {
    color: "#7777f6",
    icon: "fas fa-object-ungroup",
    title: "Total Cours",
    dataKey: "ratio",
    number: "2.6",
    percentage: 12,
    chartData: [
        { name: "Sun", ratio: 400 },
        { name: "Mon", ratio: 600 },
        { name: "Tue", ratio: 500 },
        { name: "Wed", ratio: 700 },
        { name: "Thu", ratio: 400 },
        { name: "Fri", ratio: 500 },
        { name: "Sat", ratio: 450 },
    ],
}

export const barChartBoxRevenue = {
    title: "Scolarité",
    color: "#7777f6",
    dataKey: "profit",
    chartData: [
        { name: "Sun", profit: 4000 },
        { name: "Mon", profit: 3000 },
        { name: "Tue", profit: 2000 },
        { name: "Wed", profit: 2780 },
        { name: "Thu", profit: 1890 },
        { name: "Fri", profit: 2390 },
        { name: "Sat", profit: 3490 },
    ]
}

export const barChartBoxVisit = {
    title: "Visits",
    color: "#7777f6",
    dataKey: "visit",
    chartData: [
        { name: "Sun", visit: 4000 },
        { name: "Mon", visit: 3000 },
        { name: "Tue", visit: 2000 },
        { name: "Wed", visit: 2780 },
        { name: "Thu", visit: 1890 },
        { name: "Fri", visit: 2390 },
        { name: "Sat", visit: 3490 },
    ]
}

export const userRows = [
    {
        id: 1,
        img: "avatar1.jpg",
        firstName: "Hubbard",
        lastName: "Eula",
        email: "hubbard@gamil.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true
    },
    {
        id: 2,
        img: "avatar2.jpg",
        firstName: "Manning",
        lastName: "Stella",
        email: "manning@gamil.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true
    },
    {
        id: 3,
        img: "avatar1.jpg",
        firstName: "Greer",
        lastName: "Mary",
        email: "greer@gamil.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true
    },
    {
        id: 4,
        img: "avatar2.jpg",
        firstName: "williamson",
        lastName: "Mild",
        email: "williamson@gamil.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true
    },
    {
        id: 5,
        img: "avatar1.jpg",
        firstName: "Gross",
        lastName: "Rose",
        email: "Groos@gamil.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true
    },
    {
        id: 6,
        img: "avatar2.jpg",
        firstName: "Sharp",
        lastName: "Jeremy",
        email: "sharp@gamil.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true
    },
    {
        id: 7,
        img: "avatar1.jpg",
        firstName: "Lowe",
        lastName: "Christina",
        email: "lowe@gamil.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true
    },
    {
        id: 8,
        img: "avatar2.jpg",
        firstName: "Dean",
        lastName: "Garrett",
        email: "Dean@gamil.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true
    },
    {
        id: 9,
        img: "avatar1.jpg",
        firstName: "parson",
        lastName: "henri",
        email: "parson@gamil.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true
    },
    {
        id: 10,
        img: "avatar2.jpg",
        firstName: "Reid",
        lastName: "Elnora",
        email: "reid@gamil.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true
    },
    {
        id: 11,
        img: "avatar1.jpg",
        firstName: "Dunn",
        lastName: "Gertrude",
        email: "Dunn@gamil.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true
    },
    {
        id: 12,
        img: "avatar2.jpg",
        firstName: "willam",
        lastName: "Mark",
        email: "william@gamil.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true
    },
    {
        id: 13,
        img: "avatar1.jpg",
        firstName: "Cruz",
        lastName: "Charlotte",
        email: "cruz@gamil.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true
    },
    {
        id: 14,
        img: "avatar2.jpg",
        firstName: "Harper",
        lastName: "Sara",
        email: "harper@gamil.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true
    },
    {
        id: 15,
        img: "avatar1.jpg",
        firstName: "Griffin",
        lastName: "Eric",
        email: "griffin@gamil.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true
    }
]

export const productsRows = [
    {
        id: 1,
        img: "logoReact1.png",
        title: "Playstation 5 Digital Edition",
        color: "white",
        producer: "Sony",
        price: "$250.99",
        createdAt: "01.02.2023",
        instock: true
    },
    {
        id: 2,
        img: "logoReact1.png",
        title: "Dell Laptop KR211822",
        color: "black",
        producer: "Dell",
        price: "$499.99",
        createdAt: "01.02.2023",
        instock: true
    },
    {
        id: 3,
        img: "logoReact1.png",
        title: "Smasung TV 4K SmartTV",
        color: "white",
        producer: "Sony",
        price: "$250.99",
        createdAt: "01.02.2023",
        instock: true
    },
    {
        id: 4,
        img: "logoReact1.png",
        title: "Philips 5 Digital Edition",
        color: "rainbow",
        producer: "Philips",
        price: "$39.99",
        createdAt: "01.02.2023",
        instock: true
    },
    {
        id: 5,
        img: "logoReact1.png",
        title: "Logitech Mx Master 3",
        color: "black",
        producer: "Logitech",
        price: "$59.99",
        createdAt: "01.02.2023",
        instock: true
    },
    {
        id: 6,
        img: "logoReact1.png",
        title: "Playstation 5 Digital Edition",
        color: "white",
        producer: "Sony",
        price: "$250.99",
        createdAt: "01.02.2023",
        instock: true
    },
    {
        id: 7,
        img: "logoReact1.png",
        title: "Rode Podcast Microphone",
        color: "gray",
        producer: "Rode",
        price: "$199.99",
        createdAt: "01.02.2023",
        instock: true
    },
    {
        id: 8,
        img: "logoReact1.png",
        title: "Toshiba Split AC 2",
        color: "White",
        producer: "Toshiba",
        price: "$899.99",
        createdAt: "01.02.2023",
        instock: true
    },
    {
        id: 9,
        img: "logoReact1.png",
        title: "Sony Bravia KDL-47W8054",
        color: "black",
        producer: "Sony",
        price: "$970.99",
        createdAt: "01.02.2023",
        instock: true
    },
    {
        id: 10,
        img: "logoReact1.png",
        title: "Acer Laptop 16 KL-4804",
        color: "black",
        producer: "Acer",
        price: "$599.99",
        createdAt: "01.02.2023",
        instock: true
    }
]

export const singleUser = {
    id: 1,
    title: "John Doe",
    img: "../avatar2.jpg",
    info: {
        username: "Johndoe99",
        fullname: "John Doe",
        eamil: "Johndoe@gmail.com",
        phone: "123 456 789",
        status: "verified",
    },
    chart: {
        datakeys: [
            { name: "visits", color: "#82ca9d" },
            { name: "clicks", color: "#8884d8" },
        ],
        data: [
            {
                name: "Sun",
                visits: 4000,
                clicks: 2400,
            },
            {
                name: "Mon",
                visits: 3000,
                clicks: 1398,
            },
            {
                name: "Tus",
                visits: 2000,
                clicks: 3800,
            },
            {
                name: "Wed",
                visits: 2780,
                clicks: 3908,
            },
            {
                name: "Thu",
                visits: 1890,
                clicks: 4800,
            },
            {
                name: "Fri",
                visits: 2390,
                clicks: 3800,
            },
            {
                name: "Sat",
                visits: 3490,
                clicks: 4300,
            },
        ],
    },
    activities: [
        {
            text: "Privilège de consultation des informations",
            time: "all",
        },
        {
            text: "Privilège de suppression de n'importe quel informations",
            time: "all",
        },
        {
            text: "Privilège de mise a jour des données",
            time: "all",
        },
        {
            text: "Privilège d'ajout d'informatons",
            time: "all",
        },
        {
            text: "accès aux logs ou aux journaux",
            time: "all",
        }
    ]
}

export const singleProduct = {
    id: 1,
    title: "Playstation 5 Digital Edition",
    img: "../logoReact2.png",
    info: {
        productId: "Ps55DF1156d",
        color: "white",
        price: "$250.99",
        producer: "Sony",
        export: "Japon",
    },
    chart: {
        datakeys: [
            { name: "visits", color: "#82ca9d" },
            { name: "orders", color: "#8884d8" },
        ],
        data: [
            {
                name: "Sun",
                visits: 4000,
                orders: 2400,
            },
            {
                name: "Mon",
                visits: 3000,
                orders: 1398,
            },
            {
                name: "Tus",
                visits: 2000,
                orders: 3800,
            },
            {
                name: "Wed",
                visits: 2780,
                orders: 3908,
            },
            {
                name: "Thu",
                visits: 1890,
                orders: 4800,
            },
            {
                name: "Fri",
                visits: 2390,
                orders: 3800,
            },
            {
                name: "Sat",
                visits: 3490,
                orders: 4300,
            }
        ],
    },
    activities: [
        {
            text: "John Doe Purchased Playstation 5 Digital Edition",
            time: "3 day ago",
        },
        {
            text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
            time: "1 week ago",
        },
        {
            text: "Mike Doe Purchased Playstation 5 Digital Edition",
            time: "2 week ago",
        },
        {
            text: "Anna Doe reviewed the product",
            time: "1 month ago",
        },
        {
            text: "Micheal Doe Purchased Playstation 5 Digital Edition into their wishlist",
            time: "1 month ago",
        },
        {
            text: "Helen Doe reviewed the product",
            time: "2 months ago",
        }
    ]
}