
function myfun(event){

    event.preventDefault();
  
    console.log('Check')
  
      setTimeout(function(){
        slide1()
  
      },0)
      setTimeout(function(){
        slide2()
  
      },3000)
      setTimeout(function(){
        slide3()
  
      },8000)
      setTimeout(function(){
        slide4()
  
      },10000)
      setTimeout(function(){
        slide5()
  
      },12000)
  
    }
  
     function slide1(){
      alert("Your order is accepted")
    
     }
  
     function slide2(){
      alert("Your order is being Prepared")
    
     }
  
     function slide3(){
      alert("Your order is being packed")
    
     }
  
     function slide4(){
      alert("Your order is out for delivery ")
    
     }
  
     function slide5(){
      alert("Order delivered")
    
     }