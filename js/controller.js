function aa()
{
 var x = document.getElementById("aa");
var y= document.getElementById("bb");
var z= document.getElementById("cc");
 y.style.display="none";
    x.style.display = "block";
    z.style.display="none";
	$('#bbView').hide();
}
function bb()
{
 var x = document.getElementById("bb");
var y = document.getElementById("aa");
var z= document.getElementById("cc");
y.style.display="none";
z.style.display="none";
x.style.display = "block";
$('#bbView').hide();
}
function cc()
{
 var x = document.getElementById("aa");
var y= document.getElementById("bb");
var z= document.getElementById("cc");
 y.style.display="none";
    x.style.display = "none";
    z.style.display="block";
	$('#bbView').hide();
}
  
  function alerts(){
   var input1 = document.getElementById('sid').value+"";
    var input2 = document.getElementById('psw').value;
	 var input3 = document.getElementById('fn').value+" ";
	 input3+= document.getElementById('ln').value;
	 var dob= document.getElementById('Date_Of_Birth').value;
		 var branch=document.getElementById('branch').value;
	   var input5 = document.getElementById('phn').value;
	    var address= document.getElementById('dn').value+", ";
	    address+= document.getElementById('sn').value+", ";
	    address+= document.getElementById('ct').value+", ";
	    address+= document.getElementById('st').value+", ";
	    address+= document.getElementById('pc').value+". ";
			alert(" Staff-Id:"+input1+"\n Password:"+input2+"\n branch:"+branch+"\n First Name:"+input3+"\n Phone Number:"+input5+"\n address:"+address);
  }
  function addActive(elem){
	  elem.addClass( "active" );
  }
  function removeActive(elem){
	  elem.removeClass( "active" );
  }
  function loadSales(event){
	  $('#sales').show();
	  hideStaff();
	  $('#packages').hide();
	  $('#invoice').hide();
	  addActive($('#salesTab'));
	  removeActive($('#staffTab'));
	  removeActive($('#packagesTab'));
	  removeActive($('#invoiceTab'));
  }
  function loadAdminPackage(event){
	  $('#sales').hide();
	  hideStaff();
	  $('#packages').show();
	  $('#invoice').hide();
	  addActive($('#packagesTab'));
	  removeActive($('#staffTab'));
	  removeActive($('#salesTab'));
	  removeActive($('#invoiceTab'));
	  loadEnquiryPkgs();
  }
  function loadStaff(event){
	  $('#sales').hide();
	  $('#packages').hide();
	  $('#staff').show();
	  $('#invoice').hide();
	  addActive($('#staffTab'));
	  removeActive($('#packagesTab'));
	  removeActive($('#salesTab'));
	  removeActive($('#invoiceTab'));
  }
  function loadInvoice(event){
	  $('#sales').hide();
	  $('#packages').hide();
	  hideStaff();
	  $('#invoice').show();
	  addActive($('#invoiceTab'));
	  removeActive($('#packagesTab'));
	  removeActive($('#salesTab'));
	  removeActive($('#staffTab'));
  }
  hideStaff();
  $('#packages').hide();
  $('#sales').hide();
  $('#invoice').hide();
  function hideStaff(){
	  $('#staff').hide();
	  $('#viewStaff').hide();
  }
  function showViewStaff(){
	$('#addStaff').hide();
	$('#viewStaff').show();
}
  function submitPackage(){
	  $('#cover-spin').show(0);
	  ApiService.post(document.packages, 'tour_package', 'http://dotapp-dotapp.apps.ca-central-1.starter.openshift-online.com/api/1/test', function(){
		$('#cover-spin').hide();
		alert("Package Created Successfully.");
	  }, function(){
		$('#cover-spin').hide();
	  });
	  Packages.addPackage(function(data, status){
		  $('#cover-spin').hide();
		  if('success' === status)
		    alert("Package Creation failed.");
	  });
  }
	$('#main').hide();
	function doLogin(elem){
		$('#cover-spin').show(0);
		var loginPanel = document.loginPanel;
		setTimeout(function(){ 
			$('#loginPanel').hide();
			$('#staff').show();
			$('#main').show();
			$('#cover-spin').hide();
		
		}, 2000);
	}
function loadEnquiryPkgs()
{
 var x = document.getElementById("bb");
var y = document.getElementById("aa");
var z= document.getElementById("cc");
y.style.display="none";
z.style.display="none";
x.style.display = "block";
}
function findPackage(){
 var x = document.getElementById("bb");
	var y = document.getElementById("aa");
	var z= document.getElementById("cc");
	y.style.display="none";
	z.style.display="none";
	x.style.display = "block";
	$('#bbView').show();
}