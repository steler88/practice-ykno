// console.log("Hello World")

// let myVariable = "yope"
// console.log(myVariable)

// myVariable = 10
// console.log(myVariable)

// myVariable = true
// console.log(myVariable)

// let myEmpty
// console.log(myEmpty)

// function myFunction() {
//     console.log("Hello World")
// }

// myFunction()
// myFunction()
// myFunction()

// console.log(myFunction)

// const myFunction2 = () => {
//     console.log("Hello World")
// }

// myFunction2()


// let myVariable = true

// myVariable = false

// const myConst = true
// myCount = false
// console.log(myCount)

window.onload = () => {
    const btn = document.getElementById("btn")
    console.log(btn)
    btn.innerHTML = "World"


    let blue = false

    const handleClick = () => {
        if (blue) {
            console.log("Blue is true")
            btn.classList.add("btn-red") = "color: red"
            
        }
        else {
            console.log("Blue is false")
            btn.classList.remove("btn-red") = "color: red"
        }
        blue = !blue
    }

    btn.onclick = handleClick

    const  p = documnet.getElementById("id-example-1")
    console.log(p)

    console.log(p.classList)

    p.classList.remove("class-example-2")
    p.classList.add("class-example-2")
}
