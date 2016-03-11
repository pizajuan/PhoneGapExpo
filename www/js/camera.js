$(function(){

	function camSuccess(imgData){
		$("#img_camPH").attr("src",imgData);
	}

	function camError(error){
		alert(error);
	}

	function accessCam(){
		var options = (
				destinationType:Camera.DestinationType.FILE_URI,
				sourceType: Camera.PictureSourceType.CAMERA
		);

		navigator.camera.getPicture(camSuccess, camError, options);

	}

	$("#btn_camera").on("click",accessCam);
});