const show = document.querySelector(".show");
const menu = document.querySelector(".menu");
const cancel = document.querySelector( ".cancel" );
cancel.style.display='none'

window.addEventListener( 'load', () =>
{
    show.addEventListener( 'click', showMenu );
    cancel.addEventListener( 'click', cancelMenu );
})

function showMenu()
{
    menu.style.display = 'block';
    show.style.display = 'none';
    cancel.style.display = "block";
}

function cancelMenu()
{
    if ( cancel )
    {
        menu.style.display = 'none';
        cancel.style.display = "none";
        show.style.display = "block";
    }
}
