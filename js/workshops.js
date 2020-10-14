// Immediately Invoked Function Expression
(function() {
    const workshopsList = document.querySelector( '#workshops-list' );

    function fetchWorkshops() {
        return axios.get( `https://workshops-server.herokuapp.com/workshops` )
                    .then(response => {
                        console.log( response.data );
                        return response.data;
                    })
                    .catch(error => {
                        console.log( error.message );
                    });

    }

    function addWorkshop( workshop ) {
        workshopsList.innerHTML += `<li class="col">
            <div class="card my-3">
                <img src="${workshop.imageUrl}" class="img-fluid" />
                <h2 class="text-center">${workshop.name}</h2>
                <div>
                    <small>
                        <span class="date">${workshop.startDate}</span> - <span class="date">${workshop.endDate}</span>
                    </small>
                </div>
                <div>
                    <small>${workshop.time}</small>
                </div>
                <div class="my-3">
                    <span>${workshop.location.address}</span>,
                    <span>${workshop.location.city}</span>,
                    <span>${workshop.location.state}</span>
                </div>
                <div>
                    ${workshop.description}
                </div>
            </div>
        </li>`
    }

    function addWorkshops( workshops ) {
        workshops.forEach( workshop => addWorkshop( workshop ) );
    }

    function init() {
        fetchWorkshops() // Ajax request (asynchronous)
            .then( workshops => addWorkshops( workshops ) )
        
    }

    init();
}());