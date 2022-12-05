const cards = document.getElementsByClassName("card");



for (let indexCard = 0; indexCard < cards.length; indexCard++) {
    const card = cards[indexCard];
    card.addEventListener("click", (ev) => {
        for (let i = 0; i < cards.length; i++) {
            const c = cards[i];
            if (ev.currentTarget === c) {
                ev.currentTarget.classList.toggle("active")

            } else {
                if (c.classList.contains("active")) {
                    c.classList.remove("active")
                }

            }
        }
    })
}





