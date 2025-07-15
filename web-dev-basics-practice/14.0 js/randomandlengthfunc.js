function whosPaying(names) {
    
    var numberofpeople=names.length;
    var randomnumber=Math.floor(Math.random()*numberofpeople);
    var randomperson=names[randomnumber];
    return randomperson+" is going to buy lunch today!" ;
    }
    var names=["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    whosPaying(names);