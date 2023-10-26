
function Login() {
    player_name = document.getElementbyId("playername").value;
    localStorage.setItem("player_name", player_name);


    window.location = "gamepaage.html"
}
