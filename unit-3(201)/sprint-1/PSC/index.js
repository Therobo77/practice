
  function mycf(n,c,u,i,b){

    this.name = n;

    this.course = c;

    this.units = u;

    this.image = i;

    this.batch = `FT_WEB-${b}`;

  }

  let AllStdntArr = JSON.parse(localStorage.getItem('students')) || [];

  function Data(event){

    event.preventDefault();

    let form = document.getElementById('form');

    let name = form.name.value;

    let course = form.course.value;

    let Unit = form.unit.value;

    let image = form.image.value;

    let Batch = form.batch.value;

    // console.log('Batch: ' + Batch);

    let stdnts = new mycf(name,course,Unit,image,Batch);

    AllStdntArr.push(stdnts);

    // console.log(AllStdntArr);

    localStorage.setItem('students',JSON.stringify(AllStdntArr));

    alert('Now Student is available on your server');

    window.location.reload();

  }

  function calculate(){

    let obj={};
    let objarr=[];

    let count = document.getElementById('batch_count');
    count.style.color = 'blue';

    for(let i=0;i<AllStdntArr.length;i++) {

        if(!obj[AllStdntArr[i].batch]) {

            obj[AllStdntArr[i].batch] = 0;
        }
    }

    for(let i=0;i<AllStdntArr.length;i++) {

            obj[AllStdntArr[i].batch]++;
        
    }
    console.log(obj);

    for(let key in obj) {

        objarr.push(`${key}:- ${obj[key]} ||`);

        count.innerText = objarr;
    }

    


  }

  calculate()
