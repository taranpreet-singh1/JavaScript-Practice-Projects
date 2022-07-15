//set inital count
let count =0;

//Select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn"); //Node List - Array Like

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList
        if(styles.contains("decrease")){
            count--;
            console.log(count);
        }else if(styles.contains("increase")){
            count++;
        }else{
            count=0;
        }
        if(count >0){
            value.style.color="green";
        }
        if(count<0){
            value.style.color="red";
        }
        if(count ===0){
            value.style.color="#222";
        }
        value.textContent = count;
    });
});

