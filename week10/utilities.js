function getJSON ( 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02' ) {
    return fetch( 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02' )
    .then (function (response){
     if(!response.ok) {
      throw Error(response.statusText);
     } else {
        return response.json();
        }
    })
    .catch (function(error){
        console.log(error);
    });
}