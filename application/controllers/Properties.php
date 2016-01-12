<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Properties extends CI_Controller {
    function __construct(){
   	  parent::__construct();
   	  $this->load->model("properties_model");
    } 
    public function AddPropertie(){
        $array = array(json_decode(file_get_contents('php://input')));
        $result=$this->properties_model->AddPropertie($array);
        if ($result) {
          echo json_encode(array("status"=>1,"message"=>"Propiedad agregado exitosamente"));
        }
        else{
           echo json_encode(array("status"=>0,"message"=>"Error al agregar la propiedad"));
        }

    }
    public function getSellers(){
        $result= $this->properties_model->getSellers();
        echo json_encode($result);
    } 
    public function getDevelops(){
      $result= $this->properties_model->getDevelops();
      echo json_encode($result);
    }
    public function getKindProperties(){
      $result= $this->properties_model->getKindProperties();
      echo json_encode($result);
    }
    public function getProperties(){
        $array=$this->properties_model->getProperties();
        echo json_encode($array);
    }
    public function deletePropertie(){
      $id =json_decode(file_get_contents('php://input'));
      $result=$this->properties_model->deletePropertie($id->id,$id->id_folder);
      if ($result) {
        echo json_encode(array("status"=>1,"message"=>"Propiedad eliminada exitosamente"));
      }
      else{
        echo json_encode(array("status"=>0,"message"=>"Error al eliminar la propiedad"));
      }
    }
    public function uploadImages(){
      $result=true;
      $tn=$_FILES['archivo']['tmp_name'];
      $fname=$_FILES['archivo']['name'];
      $extends=array('jpg','png','jpeg');
      $extencion=explode('.',$fname);
      if($_POST['carpeta']['id_carpeta'] == 'vacio'){
         $id_carpeta='FDP'.date('Y').date('m').date('d').date('H').date('i').date('s').rand(0,100000);
      }else{
         $id_carpeta=$_POST['carpeta']['id_carpeta'];
      }
      $FDP='./assets/img/properties/'.$id_carpeta;
      $FDPHOME='./assets/img/properties/'.$id_carpeta.'/home';
      $FDPHOOD='./assets/img/properties/'.$id_carpeta.'/hood';
     
      if (in_array($extencion[1],$extends)) {
        if (is_uploaded_file($tn)){ 
              if(!file_exists($FDP)){
                  mkdir($FDP, 0777);
                  if($_POST['carpeta']['carpeta'] == 'home'){

                    mkdir($FDPHOME, 0777);
                    move_uploaded_file($tn,$FDPHOME.'/'.$fname);  
                  }
                  else{
                    mkdir($FDPHOOD, 0777);
                    move_uploaded_file($tn,$FDPHOOD.'/'.$fname);
                  }
              }else{
                 if($_POST['carpeta']['carpeta'] == 'home'){
                    if(!file_exists($FDPHOME)){
                      mkdir($FDPHOME, 0777);
                    }
                    if(file_exists($FDPHOME.'/'.$fname)){
                        $result=false;
                    }
                    move_uploaded_file($tn,$FDPHOME.'/'.$fname); 
                  }
                  else{
                    if(!file_exists($FDPHOOD)){
                      mkdir($FDPHOOD, 0777);
                    }
                    if(file_exists($FDPHOOD.'/'.$fname)){
                       $result=false;
                    }
                    move_uploaded_file($tn,$FDPHOOD.'/'.$fname);
                  }
              }
        }
        if(!$result){
            echo json_encode(array('result'=>2,'id'=>$id_carpeta,'name'=>$fname,'kindfolder'=>$_POST['carpeta']['carpeta'])); 
        }else{
          echo json_encode(array('result'=>1,'id'=>$id_carpeta,'name'=>$fname,'kindfolder'=>$_POST['carpeta']['carpeta']));   
        }
      }else{
        echo json_encode(array('result'=>0,'id'=>$id_carpeta,'message'=>'El archivo '.$extencion[1].' no es valido'));  
      }
    }
    public function removeFile(){
        $route = json_decode(file_get_contents('php://input'));
        $route = json_decode(json_encode($route), true);
        list($p,$a,$i,$p,$f,$k,$name) = explode("/",$route['ruta']);
        if(is_file($route['ruta'])){
          if(unlink($route['ruta'])){
            echo json_encode(array("status"=>1,"message"=>"Imagen eliminada exitosamente","id"=>$route['id'],'name'=>$name,'kind'=>$k));
          }else{
            echo json_encode(array("status"=>1,"message"=>"Error al tratar de eliminar la imagen","id"=>$route['id'],'name'=>$name,'kind'=>$k));
          }
        }else{
          echo json_encode(array("status"=>1,"message"=>"Error al tratar de eliminar la imagen","id"=>$route['id'],'name'=>$name,'kind'=>$k));
        } 
    }
}