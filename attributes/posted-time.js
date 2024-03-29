/**
<!-- START [Attributes] Update Year -->
<script src="https://cdn.jsdelivr.net/gh/REVREBEL/revrebel.io/attributes/posted-time.js"></script>
<!-- END [Attributes] Update Year -->
*/

/**
* 	Posted Time Ago
* 	Add posted time ago to your blog articles date like posted 1 min ago, 1 month ago, I year ago etc
* 	
* 	I want this Text or Text Span to be posted datetime
* 	
* 	name: ct-post-time-update
* 	Value: blank
* 	
* 	
* 	You can add a date field in your CMS and connec it
* 	
* 	name: ct-post-time
* 	Value: ct-post-time
* 	
*/

document.addEventListener("DOMContentLoaded", function () {
  var timeElements = document.querySelectorAll("[ct-post-time-update]");

  timeElements.forEach(function (element) {
    var postedTime = element.getAttribute("ct-post-time");
    var postedDate = new Date(postedTime.replace(/-/g, "/")); // Convert '-' to '/' for wider date format support
    var currentDate = new Date();

    var timeDifference = Math.floor((currentDate - postedDate) / 1000); // in seconds

    var timeAgo = "";

    if (timeDifference < 60) {
      timeAgo = "just now";
    } else if (timeDifference < 3600) {
      var minutes = Math.floor(timeDifference / 60);
      timeAgo = minutes + (minutes === 1 ? " minute ago" : " minutes ago");
    } else if (timeDifference < 86400) {
      var hours = Math.floor(timeDifference / 3600);
      timeAgo = hours + (hours === 1 ? " hour ago" : " hours ago");
    } else if (timeDifference < 604800) {
      var days = Math.floor(timeDifference / 86400);
      timeAgo = days + (days === 1 ? " day ago" : " days ago");
    } else if (timeDifference < 2592000) {
      var weeks = Math.floor(timeDifference / 604800);
      timeAgo = weeks + (weeks === 1 ? " week ago" : " weeks ago");
    } else if (timeDifference < 31536000) {
      var months = Math.floor(timeDifference / 2592000);
      timeAgo = months + (months === 1 ? " month ago" : " months ago");
    } else {
      var years = Math.floor(timeDifference / 31536000);
      timeAgo = years + (years === 1 ? " year ago" : " years ago");
    }

    element.innerText = timeAgo;
  });
});
