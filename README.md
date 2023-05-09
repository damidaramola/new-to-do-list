# TODO App

This simple TODO app allows the user to plan out their tasks for the day. It is feasible and easy to use for people such as students, teachers and those who really enjoy organised productivity.

![todo list main screenshot](https://github.com/damidaramola/Memory-Card-Game/assets/110638513/23187a76-7d2f-4c70-8ec5-8d750f38a955)

## User Stories 
* As a user I can input my username on the landing page so that I see my name on the todo list page
* As a user I can input my tasks on the todo list page so that I see my tasks for the day
* As a user I can edit each task so that I can change my mind when I desire
* As a user I can delete tasks so that I can clear my to-do list and start from scratch
* As a user I can check off my tasks so that I see when each one is completed

##  Design
### colour scheme
* The design is very simple with a solid light pink background and contrasting purple buttons which the user can clearly see. The delete buttons are red to signify that the task inserted will be removed.

### Typography
* The Fira sans font was used throughout the project and sans serif was used as the fallback font. This is used in case the fira sans font doesn't load to the site properly.

## Features

* This TODO list application features a landing page where the user can insert their name 
* If the user inserts an empty field, an alert will display asking for a correct value
* On the main TODO list page , the user can input their desired tasks which will show up on the list section
* There is an edit button where users can edit tasks
* There is a delete button where users can remove each task from the page
* Once the user clicks the radio button, this will cross the task off with a strikethrough line
* The user can also click the 'go back' button which will lead them back to the username page

## Form and Validation
* This is the initial form displayed before the main TODO page is loaded.
![insert name page](https://github.com/damidaramola/Memory-Card-Game/assets/110638513/be1a0fc9-539c-4fbd-9d4b-3be16c10d4d5)

* validation for the form
![error validation](https://github.com/damidaramola/Memory-Card-Game/assets/110638513/68a5f9a8-d1e9-4ae0-80ca-33d3694797a1)


## List section
* This screenshot shows the section where users can add tasks to their lists. The inserted name is also displayed here
![todo-list](https://github.com/damidaramola/Memory-Card-Game/assets/110638513/40879032-8f46-413b-94d1-67fda7f40e78)

## Button area
* The edit button will allow the user to change the text of their desired task


 ![edit list](https://github.com/damidaramola/Memory-Card-Game/assets/110638513/5909df19-4e9c-4e2d-b607-51cdf8fd2526)
 
 * The delete button will allow the user to remove the task on their list
 
![delete task](https://github.com/damidaramola/Memory-Card-Game/assets/110638513/13159277-5628-4e93-8560-fdd1f8137959)

## Crossing out tasks
* When the user has completed their tasks, they can click the radio button and it will cross out the task with a strikethrough line
 
 ![check list](https://github.com/damidaramola/Memory-Card-Game/assets/110638513/5a3d5b61-d05a-464b-984f-c53e42036666)

 
## Go back button
 
* The user can decide to go back to the landing page where they can input a new username

![go back](https://github.com/damidaramola/Memory-Card-Game/assets/110638513/5d355935-428c-410c-85ba-f81ef61e0c0b)

## Technologies used 
* HTML 5
* CSS3
* JavaScript

## Frameworks, Libraries & Programs Used

* GitHub was used to store my code after being pushed from Git.
* [Sweet alert](https://sweetalert.js.org/guides/) was used to replace default alerts used during validation
* Visual Studio Code was the IDE I used for this project


## Testing
 
* I have tested and can confirm that this page works in various browsers such as Firefox, Chrome, Microsoft Edge and Safari
 
* My HTML code passed the  W3C validator test with no errors
* 
![html-validator](https://user-images.githubusercontent.com/110638513/201006122-2bd3dd21-b693-41e3-88f7-bbb884d9dcfd.PNG)
 
*  My CSS code passed the  Jigsaw validator test with no issues
*  
![css jigsaw validator](https://github.com/damidaramola/Memory-Card-Game/assets/110638513/a5f82f85-1ff2-4a8f-b593-f5e1793f59b6)
 
* I used the beautify tools javascript validator to check my javascript code and there were no significant issues

![js hint](https://github.com/damidaramola/Memory-Card-Game/assets/110638513/96fe4608-b67c-4edc-a323-f512454ea853)
 
### Lighthouse Testing
* My accessibility is really good in terms of accessibility, performance, best practices and SEO. 

![lighthouse results](https://github.com/damidaramola/new-to-do-list/assets/110638513/d3b4d6d9-88e4-4c0e-a0f0-a92608d431d8)

## Manual Testing
* Ensured landing page loaded correctly
* Ensured all links were working correctly
* Ensured username validation was working when blank spaces are entered
* Ensured task validation was working when the user inserts blank spaces where they can add new to do
* Ensured the edit button was functioning
* Ensured the delete button was working
* Ensured responsiveness through [Am I responsive website](https://ui.dev/amiresponsive?url=https://damidaramola.github.io/new-to-do-list/) 
* Ensured the 'go back' button went back to the landing page 
* Ensured javascript links were working after initial deployment to Github pages



## Deployment
This website was deployed to Git Hub pages.
Steps to deploy:
 
1. In the Git Hub repository, navigate to the settings tab.
2. Click the pages section on the left-hand side of the screen, and you will see the source section.
3. From the source section drop, choose 'deploy from a branch'.
4. From the branch section drop, choose 'main'.
5. Refresh the page if the link is not instantly generated.
6. The page should now provide the link to the completed website.

## How to clone a repository
1. Log in to GitHub and locate the GitHub Repository
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type git clone, and then paste the URL you copied in Step 3.
7. Press Enter. Your local clone will be created.
 
# credits
 
 
* The format used to make this README file was taken from the CI sample project README.md [README.MD example](https://github.com/Code-Institute-Solutions/SampleREADME)
* The code that inspired this todolist was observed from [Blog](https://javascript.plainenglish.io/how-to-create-a-todo-list-using-javascript-5e126a93483),
* learning how to use local stoarge was inspired by [stackoverflow post ](https://javascript.plainenglish.io/how-to-create-a-todo-list-using-javascript-5e126a93483)

##Acknowledgements
* Big thank you to my mentor Jubril for his amazing guidance and support
                                               

 
