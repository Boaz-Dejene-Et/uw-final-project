document.addEventListener("DOMContentLoaded", function() {
    function quickBooking() {
        footerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            e.target.email.setCustomValidity("")
            footerListener(e.target.email)
        });
    }
    // console.log(window.location.pathname)
    // console.log(window.location.search)
    // var url_string = "http://www.example.com/t.html?a=1&b=3&c=m2-m3-m4-m5"; 
    // var url = new URL(url_string);
    // var c = url.searchParams.get("c");
    // console.log(c);
})