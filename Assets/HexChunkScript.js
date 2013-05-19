#pragma strict

var clicked : boolean = false;
var hit : RaycastHit;
 
static var ClickedOn : boolean = false;

function Start () {

}

function Update () {
	if(Input.GetMouseButtonDown(0) &&
		collider.Raycast(Camera.main.ScreenPointToRay(Input.mousePosition), hit, Mathf.Infinity)) {
		clicked = !clicked;
	
	}
	
	ClickedOn = clicked;
	
	if(ClickedOn){
		renderer.material.color = Color.red;
	}
	else{
		renderer.material.color = Color.green;
	}
}
