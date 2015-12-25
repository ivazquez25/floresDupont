<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Developments extends CI_Controller {
   function __construct(){
   	  parent::__construct();
   	  $this->load->model("developments_model");
   }
    
    public function getDevelopments(){
        $array = $this->developments_model->getDevelopments();
        echo json_encode($array);
    }
    
    public function addDevelopment(){
        $array = array("name"=>file_get_contents('php://input'));
        $this->developments_model->addDevelopments($array);
        echo json_encode(array("status"=>1,"message"=>"Desarrollo agregado exitosamente"));
    }
    
    public function deleteDevelopment(){
        $developmentToDelete = array("id"=>file_get_contents('php://input'));
        $this->developments_model->deleteDevelopments($developmentToDelete);
        echo json_encode(array("status"=>1,"message"=>"Desarrollo eliminado exitosamente"));
    }
    
    public function updateDevelopment(){
        $developmentToUpdate = json_decode(file_get_contents('php://input'),true);
        $this->developments_model->updateDevelopment($developmentToUpdate);
        echo json_encode(array("status"=>1,"message"=>"Desarrollo editado exitosamente"));
    }
}
