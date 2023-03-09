import { createServer, Model } from "miragejs"


createServer({
    models: {
        vans: Model,
    },

    seeds(server) {
        server.create("van", {
            id: "1",
            name: "Modest Explorer",
            price: 200,
            description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
            imageUrl: "https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/322114161_5486630194792520_7696150991329448144_n.jpg?stp=c0.124.904.904a_dst-jpg_s552x414&_nc_cat=107&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeEvxCZKS_EAHTvSHi17YvrHhXcGHdhWhF6FdwYd2FaEXtwSJCqa5ZPlzYba3WTJ4Lt1wBtoBErf6dOa9KjCoaDl&_nc_ohc=8oIwL0pBv4oAX9PFce5&_nc_zt=23&_nc_ht=scontent-cdg2-1.xx&oh=00_AfB9GEiYr_YKYthGeLUsDD-qzP1sR92sXoNE8XAmGz8F3Q&oe=64020961",
            type: "pineapple"
        })
        server.create("van", {
            id: "2",
            name: "Beach Bum",
            price: 200,
            description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
            imageUrl: "https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/333323447_934194731071213_2200006951464272105_n.jpg?stp=c0.132.1200.1200a_dst-jpg_s552x414&_nc_cat=107&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeHLTpX9bwuZJWzFo3V54nQqQ1C8tRP9jb9DULy1E_2Nv6j3kMyDvaxyo7_XJfMfI1AyYuPXG4cQ4zt9EvGJBjVv&_nc_ohc=464N72Mh7YoAX8yvJUL&tn=-OIJCrVOcqsTM37N&_nc_zt=23&_nc_ht=scontent-cdg2-1.xx&oh=00_AfChheG-cicoJQIV5SxoMZvtMGoJJJMFOvl40DX-FU3_Pg&oe=64031903",
            type: "grape"
        })
        server.create("van", {
            id: "3",
            name: "Reliable Red",
            price: 200,
            description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
            imageUrl: "https://scontent-cdt1-1.xx.fbcdn.net/v/t39.30808-6/325376646_3352812584969508_5027279594285344079_n.jpg?stp=c69.0.414.414a_dst-jpg_p552x414&_nc_cat=103&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeEw2uG71VfBB0kgvPUv1nHQ-11W7FcsEHb7XVbsVywQds94dyAoowHT5NYn2nbQ1s2YwSOoDu1Ovno-JdP0VFw5&_nc_ohc=gdf9fzq-qY0AX_hVGWJ&_nc_zt=23&_nc_ht=scontent-cdt1-1.xx&oh=00_AfBd2G9Y8fNK-l1ILcugK_yFKiM-EMDQ9KPYEi9VpxIknw&oe=6402F96C",
            type: "luxury"
        })
        server.create("van", {
            id: "4",
            name: "Dreamfinder",
            price: 200,
            description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
            imageUrl: "https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/320954769_3330275607228738_6807008758425751883_n.jpg?stp=c0.46.1910.1910a_cp6_dst-jpg_s552x414&_nc_cat=110&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeHWYkRz5H7NWPR3fT6lOY09a9qeHWWEe5xr2p4dZYR7nJreZ4OmiG-JubNJYEoCqfZ9CtwJnpP_9BrZEDn-42Tl&_nc_ohc=Ke13fI83VNMAX-EDBxN&_nc_zt=23&_nc_ht=scontent-cdg2-1.xx&oh=00_AfDhbXgP-6WpmAJykFoqhPjShfM646BBykhmaRPOJqwRTw&oe=6402F62F",
            type: "Cup"
        })
        server.create("van", {
            id: "5",
            name: "The Cruiser",
            price: 200,
            description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
            imageUrl: "https://scontent-cdg2-1.xx.fbcdn.net/v/t39.30808-6/321043787_542733547494268_8252107839531828100_n.jpg?stp=c0.79.720.720a_cp6_dst-jpg_s552x414&_nc_cat=110&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeE0l4cWHco8qSoF6YUAdEcIaYROn6CQRN5phE6foJBE3iZ4SRlacx5LKuNBqSpvgpA7TC0iuD7KT4kj20T444bb&_nc_ohc=WK7_btFylOUAX-yYrY2&_nc_zt=23&_nc_ht=scontent-cdg2-1.xx&oh=00_AfDzghaOKFXhI4FT3ogydZ86ymfbPcEbd0uKCi8TJ8zPKg&oe=6402B1B7",
            type: "Cup"
        })
        server.create("van", {
            id: "6",
            name: "Coconut wine",
            price: 750,
            description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
            imageUrl: "https://scontent-cdt1-1.xx.fbcdn.net/v/t39.30808-6/325770016_1244603476124402_312114014062444278_n.jpg?stp=c0.132.1200.1200a_dst-jpg_s552x414&_nc_cat=103&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeFq0tdMY0d6TV-e5Lln9cOsliJyhXSqOeWWInKFdKo55bfa11nNF2gWEhntozjSnoZjfDJRcvACqbcIrEVyjJut&_nc_ohc=3P_Zmq3IJBkAX9ibwVl&_nc_zt=23&_nc_ht=scontent-cdt1-1.xx&oh=00_AfAvHO5k7haS7PNlk-AX15rOMiqn3JOk0m8LLHa7RZax9w&oe=6403E7CB",
            type: "Bottle"
        })
    },

    routes() {
        this.namespace = "api"

        this.get("/vans", (schema, request) => {
            return schema.vans.all()
        })

        this.get("/vans/:id", (schema, request) => {
            const id = request.params.id
            return schema.vans.find(id)
        })
    }
})