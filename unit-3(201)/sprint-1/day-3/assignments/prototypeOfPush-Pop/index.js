
    // for push & pop

    let arr=new Array(1,2,3,4,5,6);

    // ?? FOR PUSHING VALUE

    Array.prototype.Mypush=function(val){

        let index = this.length;

        this[index] = val;

    }

    arr.Mypush(93);

    console.log(arr);

    // ???  for removing the value of last index (pop())

    let arr2 =new Array(23,23,56,24,60);

    Array.prototype.Mypop=function(val){

        let index = this.length-1;

        this.splice(index,1);

    }

    arr2.Mypop(1);

    console.log(arr2);