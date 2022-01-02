const main_container= document.querySelector("#main-container");


main_container.innerHTML=
`<div id="input-container">
<input type="text" id="output" placeholder="0" onkeypress="return isNumber(event)" >
</div>
<div>
<table id="tables">
    <tr>
        <td><button onclick="out()" id="clear">C</button></td>
        <td><button onclick="dele()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg></button>
        </td>
         <td><button onclick="input('.')">.</button></td> 
         <td><button onclick="input('%')">%</button></td>
    </tr>
    <tr>
        <td><button onclick="input('7')">7</button></td>
        <td><button onclick="input('8')">8</button></td>
        <td><button onclick="input('9')">9</button></td>
        <td><button onclick="input('/')">/</button></td>
    </tr>
    <tr>
        <td><button onclick="input('4')">4</button></td>
        <td><button onclick="input('5')">5</button></td>
        <td><button onclick="input('6')">6</button></td>
        <td><button onclick="input('*')">*</button></td>
    </tr>
    <tr>
        <td><button onclick="input('1')">1</button></td>
        <td><button onclick="input('2')">2</button></td>
        <td><button onclick="input('3')">3</button></td>
        <td><button onclick="input('-')">-</button></td>
    </tr>
    <tr>
        <td><button onclick="input('0')">0</button></td>
        <td colspan="2"><button onclick="cal()" id="btn">=</button></td>
        <td><button onclick="input('+')">+</button></td>
    </tr>
</table> 
</div>`;

const input_field = document.getElementById("output");

function input(num){
    input_field.value +=num;
}

function cal(){
    if(input_field.value.length>=1){
        try{
            input_field.value=eval(input_field.value);
        }
        catch(err){
            alert("invalid");
        }
    }
   
}

function out(){
    console.log("clear");
    input_field.value="";
    
}

function dele(){
    input_field.value = input_field.value.slice(0,-1);
}

function isNumber(evt) {
    const chacode= evt.keyCode;
    if (chacode>=48 && chacode <=57) {
        return true;
    }
    else{
        alert("Only Numbers!!")
        return false;  
    }
    
}