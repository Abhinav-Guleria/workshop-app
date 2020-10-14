function formatDate( isoDate ) {
    const date = new Date( isoDate );
    return date.toDateString();
}

const dateEls = document.querySelectorAll( '.date' );
for( let i = 0; i < dateEls.length; i++ ) {
    dateEls[i].innerText = formatDate( dateEls[i].innerText );
}