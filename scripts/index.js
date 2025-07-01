document.getElementById('header-btn').addEventListener('click',function(){
    document.getElementById('side-bar').classList.add('active');
});

document.getElementById('close').addEventListener('click',function(){
    document.getElementById('side-bar').classList.remove('active');
});

document.addEventListener('click',function(e){
    const sideBar = document.getElementById('side-bar');
    if (!sideBar.contains(e.target)&&!document.getElementById('header-btn').contains(e.target)){
        sideBar.classList.remove('active');
    }
});

function ToggleCategory(id) {
    const Categories = document.querySelectorAll('.category1');
    Categories.forEach(cat =>{
        if (cat.id === id) {
            cat.classList.toggle('active');
        }
        else {
            cat.classList.remove('active');
        }
    });
}