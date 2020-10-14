// Immediately Invoked Function Expression
(function() {
    const workshopsList = document.querySelector( '#workshops-list' );

    function addWorkshop() {
        workshopsList.innerHTML += `<li class="col">
            <div class="card my-3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/2000px-AngularJS_logo.svg.png" class="img-fluid" />
                <h2 class="text-center">Angular JS Bootcamp</h2>
                <div>
                    <small>
                        <span class="date">2019-01-01T04:00:00.000Z</span> - <span class="date">2019-01-03T08:00:00.000Z</span>
                    </small>
                </div>
                <div>
                    <small>9:30 am - 1:30 pm</small>    
                </div>
                <div class="my-3">
                    <span>Tata Elxsi, Prestige Shantiniketan</span>,
                    <span>Bangalore</span>,
                    <span>Karnataka</span>
                </div>
                <div>
                    <p><strong>AngularJS</strong> (also written as <strong>Angular.js</strong>) is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.</p><p>It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications. (This flexibility has led to the acronym MVW, which stands for \"model-view-whatever\" and may also encompass model–view–presenter and model–view–adapter.)</p>
                </div>
            </div>
        </li>`
    }

    for( let i = 0; i < 6; i++ ) {
        addWorkshop();
    }
}());