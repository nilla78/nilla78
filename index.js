function moveToRepository() {
  var repositoryName = document.getElementById("repositoryInput").value;
  if (repositoryName.trim() !== "") {
    window.location.href = "https://github.com/{your-username}/" + repositoryName;
  } else {
    alert("Repositories 이름을 입력하세요.");
  }
}
