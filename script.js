jQuery('#frm').validate({
	rules:{
		name:"required",
		email:{
			required:true,
			email:true
		},
		phonenumber:{
			required:true,
			minlength:10
		},
		zipcode:{
			required:true,
			minlength:6,
			maxlength:10,
		},
	},messages:{
		name:"Please enter your name",
		email:{
			required:"Please Enter Email",
			email:"Please enter valid email",
		},
		phonenumber:{
			required:"Please enter Phone Number",
			minlength:"Phone number must be 10 char long",
		},
		zipcode:{
			required:"Please enter your zipcode",
			minlength:"Zip Code must be 6 char long",
		},
	},
	submitHandler:function(form){
		form.submit();
	}
});