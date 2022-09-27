const app = document.getElementById('root');

function Header(properties) {
        const{text,level} = properties;
        const header = document.createElement(`h${level}`);
        header.textContent = text;
        return header;
}


function Button(properties){
        const {text,Func1} = properties;
        const button = document.createElement('button');
        button.textContent = text;
        button.onClick = () =>{
            Func1();
            console.log('onClick');
        };
        return button;
}

let h1 = Header({text:"Header1",level:1});
let b1 = Button({text:"Button1",Func1:clicked });

function clicked(){
    alert('Button clicked');
}

app.append(h1,b1);

// Header1 button
// Header2 button
/*
{
    {
        text,
        level
    }{
        
    }
}
*/

/*
bate wo sari jhijhak ke jo kahdi !
wo aankhe jhuki ki jhuki reh gai !!
jo aanke mili , to ishara hua kuch !
sarma ke yanha se wo rukshat hui fir !!
*/