from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Data pertanyaan dan jawaban (contoh)
questions_answers = {
    "Apa warna langit?": "Langit berwarna biru.",
    "Berapa jumlah hari dalam seminggu?": "Ada 7 hari dalam seminggu.",
    "Apa ibukota Indonesia?": "Ibukota Indonesia adalah Jakarta."
}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/ask', methods=['POST'])
def ask():
    user_question = request.form['user_question']
    answer = get_answer(user_question)
    return jsonify({'bot_answer': answer})

def get_answer(question):
    # Gantilah logika ini dengan metode yang sesuai untuk menemukan jawaban
    if question in questions_answers:
        return questions_answers[question]
    else:
        return "Maaf, saya tidak tahu jawabannya."

if __name__ == '__main__':
    app.run(debug=True)
