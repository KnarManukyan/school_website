Bugs 

*The message for time overlapping appears 1.5 milliseconds after clicking on the button. It's a bug in the controller of courses. With shorter time it doesn't manage to check for time overlapping and adds by mistake. I have tried multiple times to use async/await instead of setTimeout but unfortunately, it didn't work.
