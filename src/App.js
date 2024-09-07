import { useState } from "react";

function App(){

    const questions = [
        {
            questionText: 'Qual é a capital do Brasil?',
            answerOptions: [
                { answerText: 'Rio de Janeiro', isCorrect: false },
                { answerText: 'São Paulo', isCorrect: false },
                { answerText: 'Brasília', isCorrect: true },
                { answerText: 'Salvador', isCorrect: false },
            ],
        },
        {
            questionText: 'Qual é o animal terrestre mais rápido do mundo?',
            answerOptions: [
                { answerText: 'Leão', isCorrect: false },
                { answerText: 'Cavalo', isCorrect: false },
                { answerText: 'Guepardo', isCorrect: true },
                { answerText: 'Tigre', isCorrect: false },
            ],
        },
        {
            questionText: 'Qual é o maior oceano do mundo?',
            answerOptions: [
                { answerText: 'Oceano Atlântico', isCorrect: false },
                { answerText: 'Oceano Índico', isCorrect: false },
                { answerText: 'Oceano Ártico', isCorrect: false },
                { answerText: 'Oceano Pacífico', isCorrect: true },
            ],
        },
        {
            questionText: 'Quem dirigiu o filme "O Poderoso Chefão"?',
            answerOptions: [
                { answerText: 'Steven Spielberg', isCorrect: false },
                { answerText: 'Francis Ford Coppola', isCorrect: true },
                { answerText: 'Martin Scorsese', isCorrect: false },
                { answerText: 'Quentin Tarantino', isCorrect: false },
            ],
        },
        {
            questionText: 'Qual país é conhecido como a terra do sol nascente?',
            answerOptions: [
                { answerText: 'China', isCorrect: false },
                { answerText: 'Japão', isCorrect: true },
                { answerText: 'Coreia do Sul', isCorrect: false },
                { answerText: 'Índia', isCorrect: false },
            ],
        },
        {
            questionText: 'Qual planeta é conhecido como o planeta vermelho?',
            answerOptions: [
                { answerText: 'Vênus', isCorrect: false },
                { answerText: 'Marte', isCorrect: true },
                { answerText: 'Júpiter', isCorrect: false },
                { answerText: 'Saturno', isCorrect: false },
            ],
        },
        {
            questionText: 'Quem escreveu o livro "Dom Quixote"?',
            answerOptions: [
                { answerText: 'William Shakespeare', isCorrect: false },
                { answerText: 'Gabriel García Márquez', isCorrect: false },
                { answerText: 'Miguel de Cervantes', isCorrect: true },
                { answerText: 'Jorge Luis Borges', isCorrect: false },
            ],
        },
    ];    

    const [question, setQuestion] = useState(0)
    const [userScore, setUserScore] = useState(0)
    const [showScore, setShowScore] = useState(false)

    function handleButtonClick(isCorrect){
        const nextQuestion = question + 1

        isCorrect && setUserScore(userScore + 1)

        if(nextQuestion < questions.length){
            setQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }
    }

    function restartGame(){
        setQuestion(0)
        setUserScore(0)
        setShowScore(false)
    }

    return (
        <div className="h-screen bg-purple-900 flex justify-center items-center">
            {
                showScore ? (
                    <main className="bg-purple-400 h-auto p-5 rounded-2xl flex justify-center items-center flex-col gap-14 text-center w-4/6 lg:w-5/12">
                        <h2 className="text-white font-bold text-4xl">Você acertou {userScore} de {questions.length} questões</h2>
                        <button onClick={restartGame} className="w-11/12 bg-purple-700 rounded-lg text-white py-2 hover:opacity-80">Reiniciar</button>
                    </main>
                ) : (
                    <main className="bg-purple-400 h-auto p-5 rounded-2xl flex flex-col gap-5 lg:w-5/12 lg:flex-row">
                    <div className="question-section flex flex-col gap-5 text-white font-bold w-full">
                        <p className="text-3xl">Questão {question + 1}<span className="text-sm">/{questions.length}</span></p>
                        <p className="text-2xl max-w-72">{questions[question].questionText}</p>
                    </div>

                    <div className="answer-section flex flex-col justify-around items-center lg:items-end w-full gap-5">
                        {
                            questions[question].answerOptions.map(option => <button onClick={() => handleButtonClick(option.isCorrect)} className="w-11/12 bg-purple-700 rounded-lg text-white py-2 hover:opacity-80">{option.answerText}</button>)
                        }
                    </div>

                    </main>
                )
            }
        </div>
    )
}

export default App