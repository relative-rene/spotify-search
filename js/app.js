function jsonResponse(response){
    console.log(reponse);
}
function errorMessage(jqXHR, textStatus, errorThrown){
    console.log('Error!', errorThrown);
}
  function submit(){
    $('#search-form').on('submit',function submitHandler(event){
//upon clicking button or pressing enter the event is triggered
    console.log('form submitted!');
//this prevents the page from reloading
  event.preventDefault();
    console.log('search term input value when submitted', $('#search-term').val());
    console.log('serialized form when submitted', $('#search-term').serialize());

    $.ajax({
      method: "GET",
      url:"https://api.spotify.com/V1/search",
      data:$('#search-term').serialize(),
      success: jsonResponse,
      error: errorMessage
    });
  });
}

    // wait for DOM to load before running JS
    $(document).on('ready', function() {
      submit();
    // check to make sure JS is loaded
        console.log('JS is loaded!');
    });
/*
<meta charset="UTF-8">
​
 <!-- set viewport to device width to help make site responsive -->
 <meta name="viewport" content="width=device-width, initial-scale=1">
​
 <title>Spotify Search</title>
​
 <!-- bootstrap css -->
 <link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
​
 <!-- custom styles -->
 <link rel="stylesheet" type="text/css" href="css/style.css">
​
 <!-- jquery -->
 <!-- Note: using subresource integrity; see: https://en.wikipedia.org/wiki/Subresource_Integrity -->
 <script type="text/javascript" src="http://code.jquery.com/jquery-2.2.2.min.js" integrity="sha256-36cp2Co+/62rEAAYHLmRCPIych47CvdM+uTBJwSzWjI=" crossorigin="anonymous"></script>
​
 <!-- handlebars -->
 <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min.js"></script>
​
 <!-- custom script -->
 <script type="text/javascript" src="js/app.js"></script>
​
</head>
<body>
 <div class="container">
   <div class="row">
     <div class="col-md-6 col-md-offset-3">
       <h1 class="text-center">Spotify Search</h1>
       <!-- insert form here! -->
       <!-- new style, AJAX form without method and action... -->
       <!-- ...remember to listen for submit event in JS -->
       <form id="search-form">
         <div class="form-group">
           <label for="search-term">Enter Spotify search term</label>
           <input type="text" id="search-term" name="q">
         </div>
         <div class="form-group">
           <input type="text" id="search-type" name="type" value="track" hidden>
         </div>
         <div class="form-group">
           <button type="submit" class="btn btn-success">Submit</button>
         </div>
       </form>
       <div id="results"></div>
     </div>
   </div>
 </div>
</body>

Brianna Veenstra [11:16 AM]
var resultsHTML = '<li class="list-group-item">' + trackName + ' by ' +
        artistName +
       '<img src="' + albumImageURL + '" width="200">' + '</li>';

[11:20]
console.log('track name', element.name);
       var trackName = element.name;
       console.log('track album image', element.album.images[0].url);
       var albumImageURL = element.album.images[0].url;
       console.log('track artist', element.artists[0].name);
       var artistName = element.artists[0].name;

[11:25]
<script type="text/x-handlebars-template" id="track-result-item">
           <li class="list-group-item">{{ trackName }} by  {{artistName}}
             <img src="{{albumImageURL}}" width="200">
           </li>
         </script>
</html>*\
