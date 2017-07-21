document.ready(function (){
  $(/*Element Name*/).on('change', function() {
    dataLayer.push({
      event:/*Event Name*/,
      filterValue: this.value
    })
  })
})
