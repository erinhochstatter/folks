# Folks

Finding a practical reason for playing with SVGs. It is very VERY WIP, and is a repetitive hot mess. 

This is a react app running on Vite , and you can start it up, by running 
```
npm install -g vite
yarn install
vite dev
```

## TODOs:
### Design questions / decisions / work
  - import the 'focused' colors from the website & branding materials
  - test out more sophisticated gradients (eg. more points for a wavy hair gradient)  
  - choose color pairs for gradients 
  - are we running with the v1 style (forward, simplified hair, spooky eyes) or the 'realistic' style (3/4 view, smiling, recognizeable individual) 
  - Given 👆 what are the "rules" of the facial features, _i.e._: 
    - which elements are solid (eyebrows)
    - which elements have grainy filters & how much (should the clip path be the same as the whole shape)
    - which have outlines
    - defaults for 'neutrals' (e.g. teeth, eyewhites, shirts, orbs)
    - which facial features have should be pulled into a separate feature, and which should be grouped (e.g. )
  - export as many features for reuse from existing .ai files
  - create components, shape constants for each export</li>
  
  
  ### Code biz
  - Dry out the code
    - pull the types up a level
    - pull the instances of a feature into its own file
    - figure out how to manage the boilerplate in the Face file
  - If there is a way to generate the defs, given a particular path using a function, do that?
  - Add the background view
  - Scale down the giant view box, and make it not the same size as the face 🙈
  - [set up downloading](https://github.com/sharonchoong/svg-exportJS)
				