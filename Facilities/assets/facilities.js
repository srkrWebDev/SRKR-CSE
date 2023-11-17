  // Counting Numbers
  function animateCounterNumbers() {
    var counterElements = document.querySelectorAll('.counter-numbers');
    var duration = 1000; 
    var totalSteps = 100; 
  
    counterElements.forEach(function(element) {
      var targetNumber = parseInt(element.getAttribute('data-number'));
      var startNumber = 0;
      var step = targetNumber / totalSteps;
      var intervalDuration = duration / totalSteps;
  
      var interval = setInterval(function() {
        if (startNumber >= targetNumber) {
          clearInterval(interval);
          element.textContent = targetNumber + "+";
          return;
        }
        startNumber += step;
        element.textContent = Math.round(startNumber);
      }, intervalDuration);
    });
  }
  
  function handleIntersection(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        animateCounterNumbers();
        observer.unobserve(entry.target);
      }
    });
  }
  
  var counterSection = document.querySelector('.section-work-data');
  var observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 
  });
  
  observer.observe(counterSection);

$(".calling1").click(function(){ 
    $(".showing1").toggleClass("disdiv1");
    if($(".showing2").hasClass("disdiv1")){
        $(".showing2").removeClass("disdiv1");
    }
    if($(".showing3").hasClass("disdiv1")){
      $(".showing3").removeClass("disdiv1");
  }
});

$(".calling2").click(function(){ 
    $(".showing2").toggleClass("disdiv1");
    if($(".showing1").hasClass("disdiv1")){
        $(".showing1").removeClass("disdiv1");
    }
    if($(".showing3").hasClass("disdiv1")){
      $(".showing3").removeClass("disdiv1");
  }
});
$(".calling3").click(function(){ 
    $(".showing3").toggleClass("disdiv1");
    if($(".showing2").hasClass("disdiv1")){
        $(".showing2").removeClass("disdiv1");
    }
    if($(".showing1").hasClass("disdiv1")){
      $(".showing1").removeClass("disdiv1");
  }
});
$(".calling4").click(function(){ 
    $(".showing4").toggleClass("disdiv1");
    if($(".showing5").hasClass("disdiv1")){
        $(".showing5").removeClass("disdiv1");
    }
    if($(".showing6").hasClass("disdiv1")){
      $(".showing6").removeClass("disdiv1");
  }
  if($(".showing7").hasClass("disdiv1")){
    $(".showing7").removeClass("disdiv1");
}
if($(".showing8").hasClass("disdiv1")){
    $(".showing8").removeClass("disdiv1");
}
if($(".showing9").hasClass("disdiv1")){
    $(".showing9").removeClass("disdiv1");
}
if($(".showing10").hasClass("disdiv1")){
    $(".showing10").removeClass("disdiv1");
}
if($(".showing11").hasClass("disdiv1")){
    $(".showing11").removeClass("disdiv1");
}
if($(".showing12").hasClass("disdiv1")){
    $(".showing12").removeClass("disdiv1");
}
if($(".showing13").hasClass("disdiv1")){
    $(".showing13").removeClass("disdiv1");
}
if($(".showing14").hasClass("disdiv1")){
    $(".showing14").removeClass("disdiv1");
}
if($(".showing15").hasClass("disdiv1")){
    $(".showing15").removeClass("disdiv1");
}
if($(".showing16").hasClass("disdiv1")){
    $(".showing16").removeClass("disdiv1");
}
if($(".showing17").hasClass("disdiv1")){
    $(".showing17").removeClass("disdiv1");
}
if($(".showing18").hasClass("disdiv1")){
    $(".showing18").removeClass("disdiv1");
}
});
$(".calling5").click(function(){ 
    $(".showing5").toggleClass("disdiv1");
    if($(".showing4").hasClass("disdiv1")){
        $(".showing4").removeClass("disdiv1");
    }
    if($(".showing6").hasClass("disdiv1")){
      $(".showing6").removeClass("disdiv1");
  }
  if($(".showing7").hasClass("disdiv1")){
    $(".showing7").removeClass("disdiv1");
}
if($(".showing8").hasClass("disdiv1")){
    $(".showing8").removeClass("disdiv1");
}
if($(".showing9").hasClass("disdiv1")){
    $(".showing9").removeClass("disdiv1");
}
if($(".showing10").hasClass("disdiv1")){
    $(".showing10").removeClass("disdiv1");
}
if($(".showing11").hasClass("disdiv1")){
    $(".showing11").removeClass("disdiv1");
}
if($(".showing12").hasClass("disdiv1")){
    $(".showing12").removeClass("disdiv1");
}
if($(".showing13").hasClass("disdiv1")){
    $(".showing13").removeClass("disdiv1");
}
if($(".showing14").hasClass("disdiv1")){
    $(".showing14").removeClass("disdiv1");
}
if($(".showing15").hasClass("disdiv1")){
    $(".showing15").removeClass("disdiv1");
}
if($(".showing16").hasClass("disdiv1")){
    $(".showing16").removeClass("disdiv1");
}
if($(".showing17").hasClass("disdiv1")){
    $(".showing17").removeClass("disdiv1");
}
if($(".showing18").hasClass("disdiv1")){
    $(".showing18").removeClass("disdiv1");
}
});
$(".calling6").click(function(){ 
    $(".showing6").toggleClass("disdiv1");
    if($(".showing5").hasClass("disdiv1")){
        $(".showing5").removeClass("disdiv1");
    }
    if($(".showing4").hasClass("disdiv1")){
      $(".showing4").removeClass("disdiv1");
  }
  if($(".showing7").hasClass("disdiv1")){
    $(".showing7").removeClass("disdiv1");
}
if($(".showing8").hasClass("disdiv1")){
    $(".showing8").removeClass("disdiv1");
}
if($(".showing9").hasClass("disdiv1")){
    $(".showing9").removeClass("disdiv1");
}
if($(".showing10").hasClass("disdiv1")){
    $(".showing10").removeClass("disdiv1");
}
if($(".showing11").hasClass("disdiv1")){
    $(".showing11").removeClass("disdiv1");
}
if($(".showing12").hasClass("disdiv1")){
    $(".showing12").removeClass("disdiv1");
}
if($(".showing13").hasClass("disdiv1")){
    $(".showing13").removeClass("disdiv1");
}
if($(".showing14").hasClass("disdiv1")){
    $(".showing14").removeClass("disdiv1");
}
if($(".showing15").hasClass("disdiv1")){
    $(".showing15").removeClass("disdiv1");
}
if($(".showing16").hasClass("disdiv1")){
    $(".showing16").removeClass("disdiv1");
}
if($(".showing17").hasClass("disdiv1")){
    $(".showing17").removeClass("disdiv1");
}
if($(".showing18").hasClass("disdiv1")){
    $(".showing18").removeClass("disdiv1");
}
});
$(".calling7").click(function(){ 
    $(".showing7").toggleClass("disdiv1");
    if($(".showing5").hasClass("disdiv1")){
        $(".showing5").removeClass("disdiv1");
    }
    if($(".showing6").hasClass("disdiv1")){
      $(".showing6").removeClass("disdiv1");
  }
  if($(".showing4").hasClass("disdiv1")){
    $(".showing4").removeClass("disdiv1");
}
if($(".showing8").hasClass("disdiv1")){
    $(".showing8").removeClass("disdiv1");
}
if($(".showing9").hasClass("disdiv1")){
    $(".showing9").removeClass("disdiv1");
}
if($(".showing10").hasClass("disdiv1")){
    $(".showing10").removeClass("disdiv1");
}
if($(".showing11").hasClass("disdiv1")){
    $(".showing11").removeClass("disdiv1");
}
if($(".showing12").hasClass("disdiv1")){
    $(".showing12").removeClass("disdiv1");
}
if($(".showing13").hasClass("disdiv1")){
    $(".showing13").removeClass("disdiv1");
}
if($(".showing14").hasClass("disdiv1")){
    $(".showing14").removeClass("disdiv1");
}
if($(".showing15").hasClass("disdiv1")){
    $(".showing15").removeClass("disdiv1");
}
if($(".showing16").hasClass("disdiv1")){
    $(".showing16").removeClass("disdiv1");
}
if($(".showing17").hasClass("disdiv1")){
    $(".showing17").removeClass("disdiv1");
}
if($(".showing18").hasClass("disdiv1")){
    $(".showing18").removeClass("disdiv1");
}
});
$(".calling8").click(function(){ 
    $(".showing8").toggleClass("disdiv1");
    if($(".showing5").hasClass("disdiv1")){
        $(".showing5").removeClass("disdiv1");
    }
    if($(".showing6").hasClass("disdiv1")){
      $(".showing6").removeClass("disdiv1");
  }
  if($(".showing7").hasClass("disdiv1")){
    $(".showing7").removeClass("disdiv1");
}
if($(".showing4").hasClass("disdiv1")){
    $(".showing4").removeClass("disdiv1");
}
if($(".showing9").hasClass("disdiv1")){
    $(".showing9").removeClass("disdiv1");
}
if($(".showing10").hasClass("disdiv1")){
    $(".showing10").removeClass("disdiv1");
}
if($(".showing11").hasClass("disdiv1")){
    $(".showing11").removeClass("disdiv1");
}
if($(".showing12").hasClass("disdiv1")){
    $(".showing12").removeClass("disdiv1");
}
if($(".showing13").hasClass("disdiv1")){
    $(".showing13").removeClass("disdiv1");
}
if($(".showing14").hasClass("disdiv1")){
    $(".showing14").removeClass("disdiv1");
}
if($(".showing15").hasClass("disdiv1")){
    $(".showing15").removeClass("disdiv1");
}
if($(".showing16").hasClass("disdiv1")){
    $(".showing16").removeClass("disdiv1");
}
if($(".showing17").hasClass("disdiv1")){
    $(".showing17").removeClass("disdiv1");
}
if($(".showing18").hasClass("disdiv1")){
    $(".showing18").removeClass("disdiv1");
}
});
$(".calling9").click(function(){ 
    $(".showing9").toggleClass("disdiv1");
    if($(".showing5").hasClass("disdiv1")){
        $(".showing5").removeClass("disdiv1");
    }
    if($(".showing6").hasClass("disdiv1")){
      $(".showing6").removeClass("disdiv1");
  }
  if($(".showing7").hasClass("disdiv1")){
    $(".showing7").removeClass("disdiv1");
}
if($(".showing4").hasClass("disdiv1")){
    $(".showing4").removeClass("disdiv1");
}
if($(".showing8").hasClass("disdiv1")){
    $(".showing8").removeClass("disdiv1");
}
if($(".showing10").hasClass("disdiv1")){
    $(".showing10").removeClass("disdiv1");
}
if($(".showing11").hasClass("disdiv1")){
    $(".showing11").removeClass("disdiv1");
}
if($(".showing12").hasClass("disdiv1")){
    $(".showing12").removeClass("disdiv1");
}
if($(".showing13").hasClass("disdiv1")){
    $(".showing13").removeClass("disdiv1");
}
if($(".showing14").hasClass("disdiv1")){
    $(".showing14").removeClass("disdiv1");
}
if($(".showing15").hasClass("disdiv1")){
    $(".showing15").removeClass("disdiv1");
}
if($(".showing16").hasClass("disdiv1")){
    $(".showing16").removeClass("disdiv1");
}
if($(".showing17").hasClass("disdiv1")){
    $(".showing17").removeClass("disdiv1");
}
if($(".showing18").hasClass("disdiv1")){
    $(".showing18").removeClass("disdiv1");
}
});
$(".calling10").click(function(){ 
    $(".showing10").toggleClass("disdiv1");
    if($(".showing5").hasClass("disdiv1")){
        $(".showing5").removeClass("disdiv1");
    }
    if($(".showing6").hasClass("disdiv1")){
      $(".showing6").removeClass("disdiv1");
  }
  if($(".showing7").hasClass("disdiv1")){
    $(".showing7").removeClass("disdiv1");
}
if($(".showing4").hasClass("disdiv1")){
    $(".showing4").removeClass("disdiv1");
}
if($(".showing9").hasClass("disdiv1")){
    $(".showing9").removeClass("disdiv1");
}
if($(".showing8").hasClass("disdiv1")){
    $(".showing8").removeClass("disdiv1");
}
if($(".showing11").hasClass("disdiv1")){
    $(".showing11").removeClass("disdiv1");
}
if($(".showing12").hasClass("disdiv1")){
    $(".showing12").removeClass("disdiv1");
}
if($(".showing13").hasClass("disdiv1")){
    $(".showing13").removeClass("disdiv1");
}
if($(".showing14").hasClass("disdiv1")){
    $(".showing14").removeClass("disdiv1");
}
if($(".showing15").hasClass("disdiv1")){
    $(".showing15").removeClass("disdiv1");
}
if($(".showing16").hasClass("disdiv1")){
    $(".showing16").removeClass("disdiv1");
}
if($(".showing17").hasClass("disdiv1")){
    $(".showing17").removeClass("disdiv1");
}
if($(".showing18").hasClass("disdiv1")){
    $(".showing18").removeClass("disdiv1");
}
});
$(".calling11").click(function(){ 
    $(".showing11").toggleClass("disdiv1");
    if($(".showing5").hasClass("disdiv1")){
        $(".showing5").removeClass("disdiv1");
    }
    if($(".showing6").hasClass("disdiv1")){
      $(".showing6").removeClass("disdiv1");
  }
  if($(".showing7").hasClass("disdiv1")){
    $(".showing7").removeClass("disdiv1");
}
if($(".showing4").hasClass("disdiv1")){
    $(".showing4").removeClass("disdiv1");
}
if($(".showing9").hasClass("disdiv1")){
    $(".showing9").removeClass("disdiv1");
}
if($(".showing10").hasClass("disdiv1")){
    $(".showing10").removeClass("disdiv1");
}
if($(".showing8").hasClass("disdiv1")){
    $(".showing8").removeClass("disdiv1");
}
if($(".showing12").hasClass("disdiv1")){
    $(".showing12").removeClass("disdiv1");
}
if($(".showing13").hasClass("disdiv1")){
    $(".showing13").removeClass("disdiv1");
}
if($(".showing14").hasClass("disdiv1")){
    $(".showing14").removeClass("disdiv1");
}
if($(".showing15").hasClass("disdiv1")){
    $(".showing15").removeClass("disdiv1");
}
if($(".showing16").hasClass("disdiv1")){
    $(".showing16").removeClass("disdiv1");
}
if($(".showing17").hasClass("disdiv1")){
    $(".showing17").removeClass("disdiv1");
}
if($(".showing18").hasClass("disdiv1")){
    $(".showing18").removeClass("disdiv1");
}
});
$(".calling12").click(function(){ 
    $(".showing12").toggleClass("disdiv1");
    if($(".showing5").hasClass("disdiv1")){
        $(".showing5").removeClass("disdiv1");
    }
    if($(".showing6").hasClass("disdiv1")){
      $(".showing6").removeClass("disdiv1");
  }
  if($(".showing7").hasClass("disdiv1")){
    $(".showing7").removeClass("disdiv1");
}
if($(".showing4").hasClass("disdiv1")){
    $(".showing4").removeClass("disdiv1");
}
if($(".showing9").hasClass("disdiv1")){
    $(".showing9").removeClass("disdiv1");
}
if($(".showing10").hasClass("disdiv1")){
    $(".showing10").removeClass("disdiv1");
}
if($(".showing11").hasClass("disdiv1")){
    $(".showing11").removeClass("disdiv1");
}
if($(".showing8").hasClass("disdiv1")){
    $(".showing8").removeClass("disdiv1");
}
if($(".showing13").hasClass("disdiv1")){
    $(".showing13").removeClass("disdiv1");
}
if($(".showing14").hasClass("disdiv1")){
    $(".showing14").removeClass("disdiv1");
}
if($(".showing15").hasClass("disdiv1")){
    $(".showing15").removeClass("disdiv1");
}
if($(".showing16").hasClass("disdiv1")){
    $(".showing16").removeClass("disdiv1");
}
if($(".showing17").hasClass("disdiv1")){
    $(".showing17").removeClass("disdiv1");
}
if($(".showing18").hasClass("disdiv1")){
    $(".showing18").removeClass("disdiv1");
}
});
$(".calling13").click(function(){ 
    $(".showing13").toggleClass("disdiv1");
    if($(".showing5").hasClass("disdiv1")){
        $(".showing5").removeClass("disdiv1");
    }
    if($(".showing6").hasClass("disdiv1")){
      $(".showing6").removeClass("disdiv1");
  }
  if($(".showing7").hasClass("disdiv1")){
    $(".showing7").removeClass("disdiv1");
}
if($(".showing4").hasClass("disdiv1")){
    $(".showing4").removeClass("disdiv1");
}
if($(".showing9").hasClass("disdiv1")){
    $(".showing9").removeClass("disdiv1");
}
if($(".showing10").hasClass("disdiv1")){
    $(".showing10").removeClass("disdiv1");
}
if($(".showing11").hasClass("disdiv1")){
    $(".showing11").removeClass("disdiv1");
}
if($(".showing12").hasClass("disdiv1")){
    $(".showing12").removeClass("disdiv1");
}
if($(".showing8").hasClass("disdiv1")){
    $(".showing8").removeClass("disdiv1");
}
if($(".showing14").hasClass("disdiv1")){
    $(".showing14").removeClass("disdiv1");
}
if($(".showing15").hasClass("disdiv1")){
    $(".showing15").removeClass("disdiv1");
}
if($(".showing16").hasClass("disdiv1")){
    $(".showing16").removeClass("disdiv1");
}
if($(".showing17").hasClass("disdiv1")){
    $(".showing17").removeClass("disdiv1");
}
if($(".showing18").hasClass("disdiv1")){
    $(".showing18").removeClass("disdiv1");
}
});
$(".calling14").click(function(){ 
    $(".showing14").toggleClass("disdiv1");
    if($(".showing4").hasClass("disdiv1")){
        $(".showing4").removeClass("disdiv1");
    }
    if($(".showing5").hasClass("disdiv1")){
      $(".showing5").removeClass("disdiv1");
  }
  if($(".showing6").hasClass("disdiv1")){
    $(".showing6").removeClass("disdiv1");
}
if($(".showing7").hasClass("disdiv1")){
    $(".showing7").removeClass("disdiv1");
}
if($(".showing9").hasClass("disdiv1")){
    $(".showing9").removeClass("disdiv1");
}
if($(".showing10").hasClass("disdiv1")){
    $(".showing10").removeClass("disdiv1");
}
if($(".showing11").hasClass("disdiv1")){
    $(".showing11").removeClass("disdiv1");
}
if($(".showing12").hasClass("disdiv1")){
    $(".showing12").removeClass("disdiv1");
}
if($(".showing13").hasClass("disdiv1")){
    $(".showing13").removeClass("disdiv1");
}
if($(".showing8").hasClass("disdiv1")){
    $(".showing8").removeClass("disdiv1");
}
});
$(".calling15").click(function(){ 
    $(".showing15").toggleClass("disdiv1");
    if($(".showing5").hasClass("disdiv1")){
        $(".showing5").removeClass("disdiv1");
    }
    if($(".showing6").hasClass("disdiv1")){
      $(".showing6").removeClass("disdiv1");
  }
  if($(".showing7").hasClass("disdiv1")){
    $(".showing7").removeClass("disdiv1");
}
if($(".showing4").hasClass("disdiv1")){
    $(".showing4").removeClass("disdiv1");
}
if($(".showing9").hasClass("disdiv1")){
    $(".showing9").removeClass("disdiv1");
}
if($(".showing10").hasClass("disdiv1")){
    $(".showing10").removeClass("disdiv1");
}
if($(".showing11").hasClass("disdiv1")){
    $(".showing11").removeClass("disdiv1");
}
if($(".showing12").hasClass("disdiv1")){
    $(".showing12").removeClass("disdiv1");
}
if($(".showing13").hasClass("disdiv1")){
    $(".showing13").removeClass("disdiv1");
}
if($(".showing14").hasClass("disdiv1")){
    $(".showing14").removeClass("disdiv1");
}
if($(".showing8").hasClass("disdiv1")){
    $(".showing8").removeClass("disdiv1");
}
if($(".showing16").hasClass("disdiv1")){
    $(".showing16").removeClass("disdiv1");
}
if($(".showing17").hasClass("disdiv1")){
    $(".showing17").removeClass("disdiv1");
}
if($(".showing18").hasClass("disdiv1")){
    $(".showing18").removeClass("disdiv1");
}
});
$(".calling16").click(function(){ 
    $(".showing16").toggleClass("disdiv1");
    if($(".showing5").hasClass("disdiv1")){
        $(".showing5").removeClass("disdiv1");
    }
    if($(".showing6").hasClass("disdiv1")){
      $(".showing6").removeClass("disdiv1");
  }
  if($(".showing7").hasClass("disdiv1")){
    $(".showing7").removeClass("disdiv1");
}
if($(".showing4").hasClass("disdiv1")){
    $(".showing4").removeClass("disdiv1");
}
if($(".showing9").hasClass("disdiv1")){
    $(".showing9").removeClass("disdiv1");
}
if($(".showing10").hasClass("disdiv1")){
    $(".showing10").removeClass("disdiv1");
}
if($(".showing11").hasClass("disdiv1")){
    $(".showing11").removeClass("disdiv1");
}
if($(".showing12").hasClass("disdiv1")){
    $(".showing12").removeClass("disdiv1");
}
if($(".showing13").hasClass("disdiv1")){
    $(".showing13").removeClass("disdiv1");
}
if($(".showing14").hasClass("disdiv1")){
    $(".showing14").removeClass("disdiv1");
}
if($(".showing15").hasClass("disdiv1")){
    $(".showing15").removeClass("disdiv1");
}
if($(".showing8").hasClass("disdiv1")){
    $(".showing8").removeClass("disdiv1");
}
if($(".showing17").hasClass("disdiv1")){
    $(".showing17").removeClass("disdiv1");
}
if($(".showing18").hasClass("disdiv1")){
    $(".showing18").removeClass("disdiv1");
}
});
$(".calling17").click(function(){ 
    $(".showing17").toggleClass("disdiv1");
    if($(".showing5").hasClass("disdiv1")){
        $(".showing5").removeClass("disdiv1");
    }
    if($(".showing6").hasClass("disdiv1")){
      $(".showing6").removeClass("disdiv1");
  }
  if($(".showing7").hasClass("disdiv1")){
    $(".showing7").removeClass("disdiv1");
}
if($(".showing4").hasClass("disdiv1")){
    $(".showing4").removeClass("disdiv1");
}
if($(".showing9").hasClass("disdiv1")){
    $(".showing9").removeClass("disdiv1");
}
if($(".showing10").hasClass("disdiv1")){
    $(".showing10").removeClass("disdiv1");
}
if($(".showing11").hasClass("disdiv1")){
    $(".showing11").removeClass("disdiv1");
}
if($(".showing12").hasClass("disdiv1")){
    $(".showing12").removeClass("disdiv1");
}
if($(".showing13").hasClass("disdiv1")){
    $(".showing13").removeClass("disdiv1");
}
if($(".showing14").hasClass("disdiv1")){
    $(".showing14").removeClass("disdiv1");
}
if($(".showing15").hasClass("disdiv1")){
    $(".showing15").removeClass("disdiv1");
}
if($(".showing16").hasClass("disdiv1")){
    $(".showing16").removeClass("disdiv1");
}
if($(".showing8").hasClass("disdiv1")){
    $(".showing8").removeClass("disdiv1");
}
if($(".showing18").hasClass("disdiv1")){
    $(".showing18").removeClass("disdiv1");
}
});
$(".calling18").click(function(){ 
    $(".showing18").toggleClass("disdiv1");
    if($(".showing5").hasClass("disdiv1")){
        $(".showing5").removeClass("disdiv1");
    }
    if($(".showing6").hasClass("disdiv1")){
      $(".showing6").removeClass("disdiv1");
  }
  if($(".showing7").hasClass("disdiv1")){
    $(".showing7").removeClass("disdiv1");
}
if($(".showing4").hasClass("disdiv1")){
    $(".showing4").removeClass("disdiv1");
}
if($(".showing9").hasClass("disdiv1")){
    $(".showing9").removeClass("disdiv1");
}
if($(".showing10").hasClass("disdiv1")){
    $(".showing10").removeClass("disdiv1");
}
if($(".showing11").hasClass("disdiv1")){
    $(".showing11").removeClass("disdiv1");
}
if($(".showing12").hasClass("disdiv1")){
    $(".showing12").removeClass("disdiv1");
}
if($(".showing13").hasClass("disdiv1")){
    $(".showing13").removeClass("disdiv1");
}
if($(".showing14").hasClass("disdiv1")){
    $(".showing14").removeClass("disdiv1");
}
if($(".showing15").hasClass("disdiv1")){
    $(".showing15").removeClass("disdiv1");
}
if($(".showing16").hasClass("disdiv1")){
    $(".showing16").removeClass("disdiv1");
}
if($(".showing17").hasClass("disdiv1")){
    $(".showing17").removeClass("disdiv1");
}
if($(".showing8").hasClass("disdiv1")){
    $(".showing8").removeClass("disdiv1");
}
});