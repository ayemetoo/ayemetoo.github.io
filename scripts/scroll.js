window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  console.log(document.body.scrollTop + ', ' + document.documentElement.scrollTop);
  if ((document.body.scrollTop > 500) || (document.documentElement.scrollTop > 500)) {
    document.getElementById("navbar").style.opacity = "1";
  } else if ((document.body.scrollTop > 400) || (document.documentElement.scrollTop > 400)) {
    document.getElementById("navbar").style.opacity = "0.9";
  } else if ((document.body.scrollTop > 300) || (document.documentElement.scrollTop > 300)) {
    document.getElementById("navbar").style.opacity = "0.8";
  } else if ((document.body.scrollTop > 200) || (document.documentElement.scrollTop > 200)) {
    document.getElementById("navbar").style.opacity = "0.7";
  } else if ((document.body.scrollTop > 100) || (document.documentElement.scrollTop > 100)) {
    document.getElementById("navbar").style.opacity = "0.6";
  }  else {
    document.getElementById("navbar").style.opacity = "0.5";
  }
}
