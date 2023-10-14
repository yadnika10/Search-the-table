function myFunction(){
    const input = document.getElementById("myInput");
    const filter = input.value.toLowerCase();
    const table = document.getElementById("myTable");
    const rows = table.getElementsByTagName("tr");
    

    for(let i = 1; i < rows.length; i++){
        const td = rows[i].getElementsByTagName("td")[0];
        
        if(td){
            const textValue = td.textContent || td.innerText;
            
            if(textValue.toLowerCase().indexOf(filter) > -1){
                rows[i].style.display = '';
            }else{
                rows[i].style.display = 'none';
            }
        }
    }
}

const myInput = document.getElementById("myInput");
myInput.addEventListener('keyup',myFunction);




