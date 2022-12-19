document.addEventListener("DOMContentLoaded", function() {
    let teamsContainer = document.querySelector("#teams_container")
    getUsers("https://jsonplaceholder.typicode.com/users").then(res=>{
        displayUsers(res.slice(0,4))
    }).catch(e=>{
        alert(e)
        console.log(e)
    })

    async function getUsers(url) {
        try {
            let fetchUsers = await fetch(url);
            return fetchUsers.json()
        } catch(e) {
            throw new Error("error while fetching users: ", e)
        }
    }

    const displayUsers = (users) => {
        const avators = [
            "https://demo.phlox.pro/hotel/wp-content/uploads/sites/239/2020/11/sadfgv.jpg",
            "https://demo.phlox.pro/hotel/wp-content/uploads/sites/239/2020/11/12918.jpg",
            "https://demo.phlox.pro/hotel/wp-content/uploads/sites/239/2020/11/657.jpg",
            "https://demo.phlox.pro/hotel/wp-content/uploads/sites/239/2020/11/12628.jpg"
        ]
        avators.map((avator, index)=>{
            users[index].image = avator
        })
        
        teamsContainer.innerHTML = '';

        users.map((user)=>{
            let divElement = document.createElement('div');
            const whatsapp = `https://wa.me/${"911015526".replace(/\s/g, "")}`;
            const telegram = `https://t.me/${"boazdeju".replace("@","")}`;

            divElement.innerHTML = `
                <img class="team_img" src=${user.image} alt="" srcset="">
                <div class="team_content">
                    <h4>${user.name}</h4>
                    <span>${user.email}</span>
                    <p>When, while lovely valley teems with vapour around meand eridian strikes the upper impenetrable</p>
                    <div class="horizontal_wrapper">
                        <a href='${whatsapp}'>
                            <ion-icon name="logo-whatsapp" style="margin-right: 20px; width: 20px; height: 20px;"></ion-icon>
                        </a>
                        <a href='${telegram}'>
                            <ion-icon name="paper-plane-outline" style="margin-right: 20px; width: 20px; height: 20px;"></ion-icon>
                        </a>
                        <a href='https://www.instagram.com'>
                            <ion-icon name="logo-instagram" style="margin-right: 20px; width: 20px; height: 20px;"></ion-icon>
                        </a>
                    </div>
                </div>
            `
            divElement.classList.add("team_wrapper")
            teamsContainer.appendChild(divElement);
        })
    }
})