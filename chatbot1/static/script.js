function askQuestion() {
    var userQuestion = document.getElementById('user-question').value;
    if (userQuestion.trim() === '') {
        alert('Mohon tuliskan pertanyaan Anda.');
        return;
    }

    var chatBody = document.getElementById('chat-body');
    var userMessageElement = document.createElement('div');
    userMessageElement.className = 'user-message';
    userMessageElement.innerText = userQuestion;
    chatBody.appendChild(userMessageElement);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/ask', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            var botMessageElement = document.createElement('div');
            botMessageElement.className = 'bot-message';
            botMessageElement.innerText = response.bot_answer;
            chatBody.appendChild(botMessageElement);
        }
    };
    xhr.send('user_question=' + userQuestion);
    document.getElementById('user-question').value = '';
}
