const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouseFollowUp(){
  window.addEventListener("mousemove",function(dets){
    document.querySelector(".circle-follow-up").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  })
}

circleMouseFollowUp();