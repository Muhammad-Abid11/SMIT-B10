const logged_In = JSON.parse(localStorage.getItem('logged_In'))
if (logged_In) {
    function logout() {
        alert('Logging out...');
        window.location.replace('../../login.html')
        localStorage.removeItem("logged_In");
    }

} else {
    window.location.replace('../../login.html')
}

