export const questions = fetch('https://the-trivia-api.com/v2/questions').
then((response)=> response.json()).
then((data) =>{
    // console.log(data);
});


//    [
//     {
//         prompt: "What is your Name",
//         optionA: "Tyrese",
//         optionB:"Kevin",
//         optionC: "Mel",
//         optionD: "Gwen",
//         answer: "optionD"
//     },

//     {
//         prompt: "How old are you",
//         optionA: 15,
//         optionB: 20,
//         optionC: 25,
//         optionD: 30,
//         answer: "optionD"
//     }
// ];