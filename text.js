let instructions = [];

let videoFiles = [];

function AddPage( instructionText , videoFile )
{
	instructions.push(instructionText);
	videoFiles.push(videoFile);
}

AddPage(
`In this tutorial we will go over how to make a simple game using Unity where you play as an x-wing starfighter and shoot at attacking tie fighters.<br><br>
Insert completed game video here
<br><br>
Specifically, you will learn how to:
<ul>
  <li>Create, move, rotate, and scale objects in the Unity scene editor to build a game scene.</li>
  <li>Add materials to change the color and texture of objects in the scene.</li>
  <li>Run and play your game.</li>
  <li>Add behavior components to game objects.</li>
  <li>Edit behavior component scripts.</li>
  <li>Add editor slots to component scripts.</li>
  <li>Script player controls.</li>
  <li>Instantiate new game objects from scripts (make the player shoot lasers!).</li>
  <li>Manipulate different components of game objects from scripts.</li>
  <li>Script AI behavior.</li>
  <li>Add a "Game Over" screen to your game.</li>
  <li>Add colliders to game objects.</li>
  <li>Check for collisions between game objects using scripts.</li>
  <li>Restart the game when the player presses the "Restart Game" button.</li>
  <li>Add a score label to show the player's current score.</li>
  <li>Add a background to your game scene.</li>
  <li>Export your game as an executable so that you can share it with other players or publish it online!</li>
</ul>
<br>
The final game project will look something like this:
`
,
'Step 0 Final Game Preview.mp4'
)

let unityDownloadLink = 'https://unity3d.com/get-unity/download?thank-you=update&download_nid=57864&os=Win';//'https://unity3d.com/get-unity/download/archive';

AddPage(`First, you will need to install Unity. For this tutorial, we will be using Unity 2018.2.2f1, which you can download here: <a target="_blank" href="${unityDownloadLink}">Unity Download Archive</a>`,``)


AddPage(`Now that you have Unity Installed, go ahead and open it, and create a new project. You can call it "MyFirstGame", then click "Create Project".`,`Step1.mp4`);

AddPage(`Congratulations, you have created your first blank Unity project!
This is the Unity Editor, where you will be able to do a lot of your game's development, such as
importing artwork, sound effects, code, and other game asset files, as well as position game
objects in the virtual world, design your user interfaces, attach behavior components and scripts
to game objects, and an indefinitely long list of other awesome things which will allow you to
create the game of your dreams.
Right now we just have an empty game world, which is pretty exciting, because it's like a blank
canvas for us to start creating our dream game on. The possibilities are limitless!<br><br>Let's try
adding something to the scene. Right click in the area under the "Hierarchy" tab and under the
3D Object submenu click "Cube". Watch the video below to learn how to move, rotate, and scale game objects in Unity.
`,'Step2 Move Rotate Scale.mp4');


AddPage(`Great! Now you know how to move, rotate and scale objects, let's look at how to navigate the scene view. <br><br>

Scene View Controls: <br><br>

ROTATE: Click and hold the right mouse button and then move the mouse the direction you want to  rotate<br><br>

ZOOM: Scroll up and down on your mouse 
wheel or touch pad<br><br>

MOVE:<br>
- Using a mouse: Press and hold the middle mouse button and move the mouse the direction you want to move<br>
- Windows Touchpad: CTRL + ALT + Click and move the mouse the direction you want to move<br>
- Mac Touchpad: Option + Command + Click and move the mouse the direction you want to move<br>
- You can also use the arrow keys to pan and zoom <br><br>

To focus the view on an object, select the 
object and then press F on your keyboard
`,
'Step3 Scene View Controls.mp4'
);

AddPage(`Awesome! Now that you know how to navigate the scene view and create, move, rotate, and scale objects, you know almost everything you need to know in order to create a player space ship! Let's go ahead and create a place holder 3d model of a x-wing fighter out of some cubes. Here's a picture of one for reference:<br><img src="xwing.png" height="300"><br><br>
Here's some useful shortcut keys:<br>
W - Toggle Move Gizmo<br>
E - Toggle Rotate Gizmo<br>
R - Toggle Scale Gizmo<br>
CTRL+D - Duplicate selected object on Windows<br>
Command+D - Duplicate selected object on Mac<br>`,

"Step4 Make a Xwing.mp4")

AddPage(`
Now that we have created the model for our xwing, we want all of the objects that are part of the model to be attached to one single object, that way we can easily control that object as one single object.
`,"Step5 Put all models under one game object.mp4");


AddPage(`
So now we have an xwing, however it is not very colorful. Let's add some colors to it, by creating some materials and adding them to our xwing components.
`,"Step6 color xwing.mp4");

AddPage(`Great, now our xwing is colorful! Now what if we want to see what it will look like in game? First, we will have to setup our game camera to be in the correct position, as well as put our xwing in a good starting position in the game world. Let's move our camera to position (0,50,0) and rotation (90,0,0) and our xwing to position (0,0,-20) and rotation (0,180,0).`,"Step9 positioning camera and xwing v2.mp4");

AddPage(`Now that our game camera is setup, let's see what the game will look like.<br>To play the game, press the play button <img src="playButton.png"> at the top center of the editor.`,"Step 10 Playing the game.mp4");

AddPage(`Great, now we know how to run the game and test it in the Unity editor. It's not very fun though, because you can't do anything yet. To fix this, let's start programming some player controls!`,"Step 11 create controls script.mp4");

AddPage(`Congratulations! You've reached the last page of the tutorial app.<br><br><img src="construction.jpg" height="300"><br><br> This tutorial app is still under construction, so if you wish to continue it, for now you can continue from where you left off from the PDF, which you can <a href="Unity Tutorial.pdf">download here</a>.`,"");
