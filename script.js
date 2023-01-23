let findoutButton = document.querySelector("#findout")
let ageYears = function (birthdate) {
    let today = new Date()
    let birthDate = new Date(birthdate)
    let age = today.getFullYear() - birthDate.getFullYear()
    let months = today.getMonth() - birthDate.getMonth()
    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }
    return age
}
let getBirthday = function (birthdate) {
    let birthday = new Date();
    birthday.setFullYear(new Date().getFullYear())
    birthday.setMonth(birthdate.getMonth())
    birthday.setDate(birthdate.getDate())
    return birthday
}
let monthsToBirthday = function (birthdate) {
    let birthday = getBirthday(birthdate)
    let monthDiff = birthday.getMonth() - new Date().getMonth()
    if (monthDiff === 0) {

        if (birthday.getTime() < new Date().getTime()) {
            return 12
        } else {
            return 0
        }
    } else {
        return monthDiff
    }
}

findoutButton.addEventListener("click", () => {
    let regex = /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/
    let input = document.querySelector("#input-datetime").value
    if (regex.test(input)) {
        input = input.split(".")
        let birthdate = new Date(Date.parse(input[1] + " " + input[0] + " " + input[2]))
        let age = ageYears(birthdate)
        let months = monthsToBirthday(birthdate)

        if (getBirthday(birthdate).getTime() === new Date().getTime()) {
            alert("Dneska si se narodil, hurááá")
        } else if (age >= 0) {
            alert("Dneska ti je " + age + " let. Narozeniny máš za " + months + " měsíců")
        } else {
            alert("Ještě si se nenarodil, smůla")
        }
    } else {
        alert("Tohle přece není tvoje datum narození!!!!")
    }
})

