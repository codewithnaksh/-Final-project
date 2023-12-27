function timeLineOne() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#home",
      start: "top top",
      scrub: 1,
      markers: false,
      pin: true,
      end: "bottom -250%",
      // this property is used to slow down the animations throughout the timeline
    },
  });

  tl.to(
    "#circle #btm img",
    {
      scale: 1,
      rotate: "-180deg",
      duration: 1,
      stagger: 0.1,
      ease: Power1,
    },
    "same-flag"
  )
    .to(
      "#circle #top img",
      {
        scale: 1,

        duration: 1,
        stagger: 0.1,
        ease: Power1,
      },
      "same-flag"
    )
    .to(
      "#cimage  img",
      {
        scale: "0",
        duration: 1,
        stagger: 0.1,
        ease: Power1,
      },
      "same-flag"
    )
    .to(
      "#center-img h5",
      {
        opacity: 0,
        stagger: 0.1,
        ease: Power1,
      },
      "same-flag"
    )
    .to(
      "#circle",
      {
        scale: 0.5,
        duration: 2,
        ease: Power1,
      },
      "same-flag"
    )
    .to(
      "#overlay>h1",
      {
        bottom: "-50%",
        ease: Power1,
      },
      "same-flag"
    )
    .to(
      "#gola",
      {
        top: "50%",
        scale: 2,
        ease: Power1,
      },
      "same-flag"
    )
    .to(
      "#gola",
      {
        opacity: 0,
        ease: Power1,
        duration: 2.2,
      },
      "flag2"
    )
    .to(
      "#smCircle",
      {
        scale: 0,
        duration: 2,
        ease: Power1,
      },
      "flag2"
    )
    .to(
      "#circle",
      {
        scale: 0,
        ease: Power1,
      },
      "flag2"
    )
    .to(
      "#overlay>h1#pf",
      {
        rotate: 0,
        bottom: "10%",
        duration:5,
        ease: Power1,
      },
      "flag2"
    )
    .to(
      "#pink-div",
      {
        duration: 5,
        top: 0,
        ease: Power1,
      },
      "flag2"
    )
    .to("#pink-div", {
      delay: 2,
      opacity: 0,
      duration: 4,
      top: "-30%",
      ease: Power1,
    });
}

timeLineOne();

function timeLineTwo() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#second",
      start: "top top",
      // means jab #second ka top page ke top pr aajaye tab ye timeline start krdo
      scrub: 1,
      markers: false,
      pin: true,
      end: "bottom -250%",
      // this property is used to slow down the animations throughout the timeline
    },
  });

  tl.to(".balls", {
    top: "50%",
    stagger: 0.2,
    ease: Power1,
  })
    .to(".balls", {
      left: "50%",
      stagger: 0.2,
      ease: Power1,
    })
    .to(
      " .pink",
      {
        scale: 10,
        ease: Power1,
      },
      "merge"
    )
    .to(
      " .purple",
      {
        opacity: 0,
        ease: Power1,
      },
      "merge"
    )
    .to(" .pink", {
      background: "linear-gradient(to right, #d5a7b4, #b4aad5)",
      ease: Power1,
    })
    .to(
      "#second-top h1",
      {
        duration: 5,
        left: "-200%",
        ease: Power1,
      },
      "text-boltey"
    )
    .to(
      "#second-btm p:nth-child(1)",
      {
        opacity: 0,

        ease: Power1,
      },
      "text-boltey"
    )
    .to(
      "#second-btm p:nth-child(2)",
      {
        delay: 0.5,
        opacity: 1,
        duration: 2,
        ease: Power1,
      },
      "text-boltey"
    );
}

timeLineTwo();
