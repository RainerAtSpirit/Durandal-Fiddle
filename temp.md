# Brief introduction to dFiddle


### What is it good for?

JSFiddle et al. are all great when there's a need to fiddling with CSS/JavaScript/HTML snippets or
sharing code during discussions on stackoverflow or newsgroups.

Unfortunately, due to the nature of Durandal that encourage you to break down apps in many smaller modules and then use
 [composition] to stitch them back together, those apps are no longer at their sweet spot. because there's no easy
 way to deal with multiple smaller external files.

**dFiddle** to the rescue.

### What is it?

A cut down version of [Durandal], hosted as Github repo with only one gh-pages branch. By cutting down to the bare
minium, it allows bringing up live Durandal _fiddles_ in minutes.


### Basic usage

+ Step 1: Fork the repo (hint there's a fork button in the upper right) and optionally clone it to your local machine
+ Step 2: For each example in the Durandal starter kit you'll find a _fiddle_ version that can be used as a starting
point for your own code.
+ Step 3: In the mood to reate more examples? Create sub-folders in a samples sub-category folders e.g.
`samples/viewCompostion` and add it to `sampleGroups` in `index.js`. Take a look at
[https://github.com/dFiddle/dFiddle-1.2/blob/gh-pages/App/samples/viewComposition/index.js#L9] for an example.



### Advanced usage

+ Step 1: see above
+ Step 2: Go free style by replacing every bit in the solution with your own code.

**Note**: If your are trying to get a breeze application up and running you are might be better off by
hosting your solution on Microsoft Azure, as this would allow you to work with the ASP.NET Web API,
which you would have to mock up on GitHub otherwise.


### Sharing the _fiddle_

Once you make your first commit the live version will become available at an URL like
`http://Your_User_Name.github.io/dFiddle-1.2` (You'll find the exact Url under Settings|GitHub Pages). According
 to GitHub it might take up to **ten minutes** for changes to be visible.

You can now share links to the live version of your _fiddle_ and in addition point to specific files or even line of
code when asking questions at [stackoverflow] or in the [Durandal newsgroup].

+ share links to the the live version e.g. [http://dfiddle.github.io/dFiddle-1.2/#/view-composition/wizard]
+ share links right down to a specific code line e.g.
[https://github.com/dFiddle/dFiddle-1.2/blob/gh-pages/App/samples/viewComposition/wizard/index.js#L3]


Totally optionally, but highly appreciated. Whenever you find a solution for a specific issue send a pull request,
so that it can be integrated.


Based on Durandal v1.2

[Durandal]: http://durandaljs.com/
[composition]: http://durandaljs.com/documentation/Using-Composition/
[stackoverflow]: http://stackoverflow.com/questions/tagged/durandal
[Durandal newsgroup]: https://groups.google.com/forum/#!forum/durandaljs
[http://dfiddle.github.io/dFiddle-1.2/#/view-composition/wizard]:
http://dfiddle.github.io/dFiddle-1.2/#/view-composition/wizard
[https://github.com/dFiddle/dFiddle-1.2/blob/gh-pages/App/samples/viewComposition/wizard/index.js#L3]:
https://github.com/dFiddle/dFiddle-1.2/blob/gh-pages/App/samples/viewComposition/wizard/index.js#L3
[https://github.com/dFiddle/dFiddle-1.2/blob/gh-pages/App/samples/viewComposition/index.js#L9]:
https://github.com/dFiddle/dFiddle-1.2/blob/gh-pages/App/samples/viewComposition/index.js#L9
