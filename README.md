# Password-Generator-
This homework assignment is to be able to modify the given Javascript file in order to get a functioning password generator 

<h2>Work Criteria</h2>
This work criteria was taken from the homeowork assignment's Reade.me file ,GIVEN I need a new, secure password      
<br> <br/>

![Screenshot (1712)](https://user-images.githubusercontent.com/82692900/120146273-ad80f980-c199-11eb-8ad6-26f712cc8113.png)

  1. WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
  2. WHEN prompted for password criteria
THEN I select which criteria to include in the password
  3. WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
  4. WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
  5. WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
  6. WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
  7. WHEN the password is generated
THEN the password is either displayed in an alert or written to the page


 <h2>Functionality of the Program</h2> 
 The program functions with the given HTML,CSS, and Javascript with modification being made to the broken/uncompleted javascript file to make it a properly working password
 generator. This one done with implementing variables with arrays of the avaialble criteria that would be used to create the password. Such variables are 
 letters of the alphabet both lowercase and uppercase as well as numbers and special characters.
 
<h4>Javascript Sample</h4>

```Javascript
var lowercase ="abcdedefghijklmnopqrstuvWxyz"
var uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
var numeric = "1234567890"
var special = "!@#$%^&*()"
```


![Screenshot (1714)](https://user-images.githubusercontent.com/82692900/120146348-cab5c800-c199-11eb-8e05-442f92153314.png)

The Javascript has been writting to handle the variables shown in the above block of code.

It also has been written so that if it detects a number lower than 8 or higher than 128, or a non numeric value the script
will present an alert to the user and will not continue.

Other measures that were taken are that a variable such as lowercase,uppercase,numeric, or special must be chosen and if none
of the aforemetioned variables are chosen then the script alerts the user.

Once the script has been given the proper input by the user then it will give out a password with the number of characters the user has
chosen as well as the matching criteria that has been chosen. 

![Screenshot (1716)](https://user-images.githubusercontent.com/82692900/120146739-6810fc00-c19a-11eb-9a86-8ad3a8bb0292.png)

[Link to the password generator page](https://miguell0706.github.io/Password-Generator-/)

https://miguell0706.github.io/JavascriptQuiz/ Link to the program here!
