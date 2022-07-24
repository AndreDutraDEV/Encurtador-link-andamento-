let menutoggle = document.querySelector('.toggle-mob')
let navmob = document.querySelector('.nav-mobile')

menutoggle.addEventListener('click', () => {

    navmob.classList.toggle('active-mobile')
    menutoggle.classList.toggle('closed-toggle')
})


//  ------------------- ENCURTADOR --------------


// OBJECTS E ARRAYS --------

let array = { linknorm: [], linkshorten: [] }



let btn_short = document.getElementById('btn-short')

// EVENT CLICK SHORTER ----------
btn_short.addEventListener('click', () => {

    let url = document.getElementById('input-url').value

    if (!url) {

        alert("kjahgkjdfsghakjg")
        return

    } else if (url != '') {

        document.getElementById('input-url').value = ""

        const crate_boxlink = (i) => {

            // for(i=0; i<filaDeEspera.length ;i++){
            //     let  =  filaDeEspera[i];


            let container_link = document.getElementById('container-shorter')
      
            let boxlink = document.createElement('div')
            let nrm_link = document.createElement('p')
            let shorten_link = document.createElement('div')
            let shrtlink_hed = document.createElement('a')
            let copy_button = document.createElement('button')

            boxlink.classList.add('item-link-shorted')
            nrm_link.classList.add('link-insert')
            shorten_link.classList.add('acess-link-shorted')
            shrtlink_hed.classList.add('link-shorted')
            copy_button.classList.add('copy-link')

            copy_button.textContent = 'Copy'

            container_link.appendChild(boxlink)
            boxlink.appendChild(nrm_link)
            boxlink.appendChild(shorten_link)
            shorten_link.appendChild(shrtlink_hed)
            shorten_link.appendChild(copy_button)

            array.linknorm.push(url)

            // document.querySelector('.link-insert').innerHTML = url



            copy_button.addEventListener('click', (e) => {


                let textoCopiado = document.querySelector(".link-shorted");

                navigator.clipboard.writeText(textoCopiado.innerHTML)


                copy_button.classList.add('btn-copied')

                copy_button.textContent = 'Copied!'
            })
        }

        crate_boxlink()


    }

    // crate_boxlink()

    // const crate_boxlink = () => {



    // }


    // API-KEY: 1bcd582f59a54f77bca0d204efaea451


    // -------------Encurtar o link-----------


    //headers

    let headers = {
        "Content-Type": "application/json",
        "apiKey": "1bcd582f59a54f77bca0d204efaea451"
    }

    //dados ------------------------

    let linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly" }
    }

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    })
        .then(response => response.json())
        .then(json => {

            console.log(json);

            let link_red = document.querySelector('.link-shorted')

            link_red.innerHTML = json.shortUrl

            link_red.href = `https://${json.shortUrl}`


            array.linkshorten.push(json.shortUrl)


        })
})


console.log(array)
