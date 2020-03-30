var mainGridContainer = document.querySelector('[name="row-container"]')


function init() {
    onRenderProjects()
}



function onRenderProjects() {
    var strHTML = ''
    newProjects.forEach(function (proj) {
        return strHTML += `<div class=" col-md-4 col-sm-6 portfolio-item  ">
            <a onclick = "onRenderModal(${proj.id})" class="portfolio-link" data-toggle="modal" href="#portfolioModal${proj.id}">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content ">
                  <i class="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img class="resize img-fluid" src="img/portfolio/${proj.image}" alt="">
            </a>
            <div class="portfolio-caption">
              <h4>${proj.name}</h4>
              <p class="text-muted">${proj.name}</p>
            </div>
          </div>`


    })
    mainGridContainer.innerHTML = strHTML

}




function onRenderModal(proId) {
    var idx = newProjects.find(project => project.id === proId)
    strHTML = `   <div class="portfolio-modal modal fade" id="portfolioModal${idx.id}" tabindex="-1" role="dialog" aria-hidden="false">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <!-- Project Details Go Here -->
                    <h2>${idx.name}</h2>
                    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                    <img class="img-fluid d-block mx-auto" src="img/portfolio/${idx.image}" alt="">
                    <p>${idx.description}</p>
                    <ul class="list-inline">
                      <li>Date: January 2017</li>
                      <li>Client: ${idx.name}</li>
                      <li>Category: ${idx.name}</li>
                    </ul>
                    <button class="btn btn-danger" data-dismiss="modal" type="button">
                      <i class="fa fa-times"></i>
                      Close Project</button>
   

                     <a href = "projects/${idx.id}/index.html" target="_blank"> <button class = "btn btn-primary">Show Project</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`

    document.querySelector('[name= "DynamicModal"]').innerHTML = strHTML

}




function sendMsg() {

    var mail = document.querySelector('[name="mail"]')
    var subject = document.querySelector('[name="subject"]')
    var msg = document.querySelector('[name="msg"]')
    console.log(mail.value);

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${mail.value}&su=${subject.value}&body=${msg.value}`)
}
