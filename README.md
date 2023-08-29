# Quiz-App
 A quiz app built with React JS


# Functionality
- Input Username
- Begin Quiz
- Answer questions
- Final stage

# Process
The guiding idea behind the approach to this project is to render a component based on the current state. The states involved included the landing stage, playing stage and finished stage. The landing stage which is the first pagen takes an input and a button to start the quiz, once the quiz is started the state is changed to playing and the appropriate component is rendered and at the end is the finished stage which renders the final component displaying the username and the score. 

A Javascript object containing the questions was created and imported into the quiz component. The correct answer was specified as one of the keys of the object properties. Whenever any of the buttons on the quiz component is clicked, a checked is carried out to see if the option clicked matches the correct answer and if that is the case, the "score" state is incremented by 1. The score will be displayed at the end. On clicking the 'Next question' button, the state of the current question is increased by 1, and that new state is parsed into the questions object to display details of the question from the index matching the new current question state. 

When the final question is reached, a 'finsih quiz' button is rendered instead of a next question, and when this button is clicked, the stage is set to finished and the finished component is render.


# What i learnt
- How to use global states by utilizing the "useContext" hook
- File management and separation of components
- More usage of states

# Built with
- React JS
- CSS custom properties