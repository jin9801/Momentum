let query = document.querySelector(".keyword");
let imgBtu = document.querySelector(".img-btn");

imgBtu.addEventListener("click", function() {
    let url = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=" + query.value;
    window.open(url);
})

query.addEventListener('keydown', function(e) {    
    if (e.keyCode === 13 ) {
    let url = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=" + query.value;
    window.open(url);
    }
})