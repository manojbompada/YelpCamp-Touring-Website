var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comment");

var data = [
    {name: "Salmon Creek", 
    image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
    },
    { name: "Granite Hill", 
    image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    { name: "Mountain Goat's Rest", 
    image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)"
    }
]

function seedDB(){
  // Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds");
        
         //  add a few campgrounds
        data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
          if(err){
             console.log(err); 
          }else{
              console.log("added a campground");
              
              // create a comment
              Comment.create(
                  {text: "This place is great but I wish it had internet",
                   author: "Homer"
                  }, function(err, comment) {
                      if(err){
                          console.log(err);
                      }else{
                         campground.comments.push(comment);
                         campground.save(); 
                         console.log("Created new comments");
                      }
                     
                  });
          }
       });
    });
  }); 
}

module.exports = seedDB;



