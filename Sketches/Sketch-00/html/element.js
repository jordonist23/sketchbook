
window.onload = e => {

    
    // console.log(e.target);  // to get the element
    // console.log(e.target.tagName);  // to get the element tag name alone
    document.querySelectorAll('.cell-mini').forEach(element => {
        element.addEventListener('click',()=>{
            var i = 0;
           let bigcell =  document.getElementById('cell-big').children


            // console.log(bigcell)
            element.childNodes.forEach(element=>{
               bigcell[i].innerText = element.innerText;
               console.log(element)
               
                // console.log(element.textContent);
                // console.log("bigg cell " + bigcell[i]);
                // // console.log(document.querySelector('#cell-big').children[i]);
                // document.getElementById('cell-big').children[i].innerText = element.textContent;

                i++;
            });
            document.getElementById('cell-big').style.backgroundColor = element.style.backgroundColor;
            document.querySelector('.title').style.backgroundColor = element.style.backgroundColor;
        })
    })




} 