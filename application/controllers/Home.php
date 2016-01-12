<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {
   function __construct(){
   	  parent::__construct();
   	 
   }
	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{   
		$this->load->view('home');
	}
    
    public function admin(){
        $this->load->view('admin');
    }
    
    public function getProperties(){
        $array = array(
            array("id"=>1, "name"=>"Loma Bonita", "vendor"=>"Doe","created_at"=>date("Y-M-D")), 
            array ("id"=>2, "name"=>"Campo Real", "vendor"=>"Smith","created_at"=>date("Y-M-D")), 
            array("id"=>3, "name"=>"Centinela", "vendor"=>"Jones","created_at"=>date("Y-M-D")),
            array("id"=>3, "name"=>"Centinela", "vendor"=>"Jones","created_at"=>date("Y-M-D")),
            array("id"=>3, "name"=>"Centinela", "vendor"=>"Jones","created_at"=>date("Y-M-D")),
            array("id"=>3, "name"=>"Centinela", "vendor"=>"Jones","created_at"=>date("Y-M-D")),
            array("id"=>3, "name"=>"Centinela", "vendor"=>"Jones","created_at"=>date("Y-M-D")),
            array("id"=>3, "name"=>"Centinela", "vendor"=>"Jones","created_at"=>date("Y-M-D")),
            array("id"=>3, "name"=>"Centinela", "vendor"=>"Jones","created_at"=>date("Y-M-D")),
            array("id"=>3, "name"=>"Centinela", "vendor"=>"Jones","created_at"=>date("Y-M-D")),
            array("id"=>3, "name"=>"Centinela", "vendor"=>"Jones","created_at"=>date("Y-M-D")),
            array("id"=>3, "name"=>"Centinela", "vendor"=>"Jones","created_at"=>date("Y-M-D")),
        );
        echo json_encode($array);
    }
    
    public function uploadImages(){
        if (is_uploaded_file($_FILES["file"]["tmp_name"])){ 
            if(!file_exists('./assets/img/properties/1')){
                mkdir('./assets/img/properties/1', 0777);
            }
            if($_POST['folder'] == 'home'){
                if(!file_exists('./assets/img/properties/1/home'))
                    mkdir('./assets/img/properties/1/home', 0777);
                    move_uploaded_file($_FILES["file"]["tmp_name"],'./assets/img/properties/1/home/'.$_FILES["file"]["name"]);  
            }else{
                if(!file_exists('./assets/img/properties/1/hood'))
                    mkdir('./assets/img/properties/1/hood', 0777);
            }
            move_uploaded_file($_FILES["file"]["tmp_name"],'./assets/img/properties/1/hood/'.$_FILES["file"]["name"]); 
        } 
        echo "hola";
    }
}
