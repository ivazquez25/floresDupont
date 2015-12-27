<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Sellers extends CI_Controller {
   function __construct(){
   	  parent::__construct();
   }
    
    public function getSellers(){
        $array = $this->sellers_model->getSellers();
        echo json_encode($array);
    }
    
    public function addSeller(){
        $array = json_decode(file_get_contents('php://input'));
        $this->sellers_model->addSeller($array);
        echo json_encode(array("status"=>1,"message"=>"Vendedor agregado exitosamente!"));
    }
}
