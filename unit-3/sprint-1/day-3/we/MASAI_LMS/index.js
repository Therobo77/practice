// step2 constructor function

function students(n,c,u,i,b){
    this.name = n;
    this.course = c;
    this.unit = u;
    this.image = i;
    this.batch = b;
}

// step 1 make a submit function
function storeData(e) {
    e.preventDefault();
    let form=document.getElementById("students_data");
    let name=form.name.value;
    let course=form.course.value;
    let unit=form.unit.value;
    let image=form.image.value;
    let batch=form.batch.value;

    // step 3 pass the data to the in constructor function
    let s1=new students(name,course,unit,image,batch);
    // console.log(s1);

    // step 4 localStorage
    let data= JSON.parse(localStorage.getItem("student")) || [];
    data.push(s1);
    localStorage.setItem("student", JSON.stringify(data));
   // console.log(data);
}
// step 5  calculate the number of students in the batch

function calculate(){

    let data= JSON.parse(localStorage.getItem("student")) || [];

    let obj={};

    for(let i=0; i<data.length; i++){
        if(!obj[data[i].batch]){
            obj[data[i].batch]=0;
        }
    }

    for (let i=0; i<data.length; i++){
    obj[data[i].batch]++;
    }
    console.log(obj);
}

calculate()
