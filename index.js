let words = [
  "Hi i am Front-End..",
  "Hi i am Front-End-Developer..",
  "Hi i am Web-Developer..",
  "Hi i am React-Developer",
];

let part;
let i = 0;
let offset = 0;
let len = words.length;
let forwards = true;
let skip_count = 0;
let skip_delay = 15;
let speed = 50;

var wordflick = function () {
  let a=setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }

    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    $(".word").text(part);
  }, speed);
};




let words1 = [
    "Are you looking for place",
    "Buy your dreams House",
    "Contact-us",
    "8887646549",
  ];
let part1;
let i1 = 0;
let offset1 = 0;
let len1 = words1.length;
let forwards1 = true;
let skip_count1 = 0;
let skip_delay1 = 15;
let speed1 = 50;

var wordfun = function () {
  let b=setInterval(function () {
    if (forwards1) {
      if (offset1 >= words1[i1].length) {
        ++skip_count1;
        if (skip_count1 == skip_delay1) {
          forwards1 = false;
          skip_count1 = 0;
        }
      }
    } else {
      if (offset1 == 0) {
        forwards1 = true;
        i1++;
        offset1 = 0;
        if (i1 >= len1) {
          i1 = 0;
        }
      }
    }

    part1 = words1[i1].substr(0, offset1);
    if (skip_count1 == 0) {
      if (forwards1) {
        offset1++;
      } else {
        offset1--;
      }
    }
    $("h1.Heading").text(part1);
  }, speed1);
};

$(document).ready(function () {
  wordflick();
  wordfun();
});

