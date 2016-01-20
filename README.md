## Website Performance Optimization portfolio project

This is an optimized version of the porfolio project


### Getting started

You need gulp installed

1. Check out the repository
  ``` bash
  $> cd /path/to/your-project-folder
  $> gulp
  ```
2. Now use the files located in the dist folder located in your project folder.


### Optimization done to main.js

1. At line 447, I simplified the changePizzaSizes function so we do not have any calulation to do.
2. At line 463 to 467, I saved the nodes in a varialble that we can now iterate over so we do not have to make dom request.
3. At line 482, I remove the var pizzasDiv from within the loop.
