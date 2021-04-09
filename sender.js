$(function() {
    chrome.storage.sync.get(['content'], (res) => {
        $("#content").val(res.content);
    })

    $('#personal').submit((e) => {
        e.preventDefault();
        chrome.storage.sync.get(['gitUser', 'token', 'pwd'], (result) => {
            const token = result.token;
            const user = result.gitUser;
            const name = $("#name").val()
            const commit = $("#commit").val()
            const pwd = result.pwd;
            const content = $("#content").val()
            const repo = $("#repo").val()
            var gh = new GitHub({
                username: user,
                password: pwd,
                token: token,
            });
            var repository = gh.getRepo(user, repo);
            repository.writeFile(
                'main',
                name, 
                content, 
                commit,
               function(err) {
                  if (err) {
                     console.log(err);
                  }
                  else{
                      window.close()
                  }
               }
            );
        })
    })
})