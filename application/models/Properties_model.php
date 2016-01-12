<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Properties_model extends CI_Model {
    function __construct(){
        parent::__construct();
    }
    public function AddPropertie($data){

        $property=array(   'id_kind_property'=>$data[0]->kindOfProperty,
                       'id_folder'=>$data[0]->id_folder,
                       'id_development'=>$data[0]->development,   
                       'name_inmueble'=>$data[0]->nameinmueble,  
                       'id_seller'=>$data[0]->seller,  
                       'price_sale'=>$data[0]->pricesale,  
                       'price_rent'=>$data[0]->pricerent,  
                       'price_trans'=>$data[0]->pricetrans,  
                       'num_rooms'=>$data[0]->numrooms,   
                       'num_badroms'=>$data[0]->badroms,  
                       'num_halfbadroms'=>$data[0]->halfbadroms,  
                       'num_age'=>$data[0]->age,  
                       'num_parking'=>$data[0]->parking,  
                       'num_levelsbuilld'=>$data[0]->levelsbuilld,    
                       'services'=>$data[0]->services,   
                       'num_levels'=>$data[0]->levels,  
                       'num_flors'=>$data[0]->flors,    
                       'areateritori'=>$data[0]->areateritori,   
                       'areaconstruct'=>$data[0]->areaconstruct, 
                       'areabode'=>$data[0]->areabode,  
                       'areaoficce'=>$data[0]->areaoficce,   
                       'areacros'=>$data[0]->areacros,   
                       'areadeep'=>$data[0]->areadeep,   
                       'capacity_areateritori'=>$data[0]->capacity->areateritori,  
                       'capacity_areaconstruct'=>$data[0]->capacity->areaconstruct,   
                       'capacity_areabode'=>$data[0]->capacity->areabode,   
                       'capacity_areacros'=>$data[0]->capacity->areacros,   
                       'capacity_areadeep'=>$data[0]->capacity->areadeep,  
                       'capacity_areaoficce'=>$data[0]->capacity->areaoficce,  
                       'furnished'=>$data[0]->furnished,   
                       'kindterren'=>$data[0]->kindterren,  
                       'coments_home'=>$data[0]->coments,   
                       'coments_hood'=>$data[0]->coments1,    
                       'postalcode'=>$data[0]->postalcode,  
                       'estate'=>$data[0]->estate, 
                       'city'=>$data[0]->city,  
                       'hood'=>$data[0]->hood,   
                       'street'=>$data[0]->street,  
                       'inside'=>$data[0]->inside, 
                       'outside'=>$data[0]->outside,  
                       'directions'=>$data[0]->directions,   
                       'publicc'=>$data[0]->publicc, 
                       'oficine'=>$data[0]->oficine,
                       'clavewords'=>$data[0]->clavewords,  
                       'update_at'=>date("Y-m-d H:i:s")); 
        
        if($insert=$this->db->insert('fd_properties',$property)){
            $id=$this->db->insert_id();
            if($this->AddExtrasProperty($data[0]->chekboxes,$id)){
                if($this->addFolderProperty($data[0]->id_folder,$id,$data[0]->mainHome,$data[0]->mainHood)){
                    return true;
                }else{
                    return false;
                }
            }
            else{
                return false;
            }
        }else{
            return false; 
        }       
    }
    public function addFolderProperty($id_folder,$id_properti,$m_home,$m_hood){
        $pathHome='./assets/img/properties/'.$id_folder.'/home';
        $pathHood='./assets/img/properties/'.$id_folder.'/hood';
        $home=true;
        $hood=true;  
            if(is_dir($pathHome)){ 
                foreach (new DirectoryIterator($pathHome) as $file) {
                    if(!$file->isDot()){
                        if($file->getFilename() == $m_home){
                          $folder=['id_folder'=>$id_folder, 
                                   'id_property'=>$id_properti,
                                   'principal' =>1,
                                   'name'=>$file->getFilename(),    
                                   'kind'=>'home',   
                                   'update_at'=>date("Y-m-d H:i:s")
                                   ];
                        }else{
                          $folder=['id_folder'=>$id_folder, 
                                   'id_property'=>$id_properti, 
                                   'name'=>$file->getFilename(),    
                                   'kind'=>'home',   
                                   'update_at'=>date("Y-m-d H:i:s")
                                   ];
                        }
                        if(!$this->db->insert('fd_folder',$folder)){
                             $home=false;
                             break;
                        }
                    }
                }
            }
            if(is_dir($pathHood)){
                foreach (new DirectoryIterator($pathHood) as $file) {
                    if(!$file->isDot()){
                       if($file->getFilename() == $m_hood){
                          $folder=['id_folder'=>$id_folder, 
                                   'id_property'=>$id_properti,
                                   'principal' =>1,
                                   'name'=>$file->getFilename(),    
                                   'kind'=>'hood',   
                                   'update_at'=>date("Y-m-d H:i:s")
                                   ];
                        }else{
                          $folder=['id_folder'=>$id_folder, 
                                   'id_property'=>$id_properti, 
                                   'name'=>$file->getFilename(),    
                                   'kind'=>'hood',   
                                   'update_at'=>date("Y-m-d H:i:s")
                                   ];
                        }
                        if(!$this->db->insert('fd_folder',$folder)){
                            $hood=false;
                             break;
                        } 
                    }
                }  
            }
        if(!$home || !$hood){
           return false; 
        }else{return true; }
    }
    public function AddExtrasProperty($extras,$id_properti){
           $extras = json_decode(json_encode($extras), true);
            for($x=0;$x < count($extras);$x++){        
                if(!empty($extras['value'.$x])){
                   $extrasP=['name'=>$extras['value'.$x],
                             'id_property'=>$id_properti,
                             'update_at'=>date("Y-m-d H:i:s")
                            ];
                    if(!$this->db->insert('fd_extraproperty',$extrasP)){
                         return false;
                    }
                }
            }
            return true;
    }  
    public function getProperties(){
        return $this->db->select('p.*,s.name,s.lastname,f.id_folder,f.name as fname,f.kind')
                        ->from('fd_properties as p')
                        ->join('fd_sellers as s','s.id = p.id_seller')
                        ->join('fd_folder as f','p.id=f.id_property ')
                        ->where('f.kind=','home')
                        ->where('f.principal=',1)
                        ->group_by("p.id") 
                        ->get()
                        ->result();
    }
    public function deletePropertie($id,$id_folder){
      $this->deletFolder($id_folder);
      if($this->db->delete('fd_properties', array('id' => $id))){
        if($this->db->delete('fd_folder', array('id_property' => $id))){
          if($this->db->delete('fd_extraproperty', array('id_property' => $id))){
            return true;
          }else{
            return false;
          }
        }else{
          return false;
        }
      }
      return false;
    }
    public function deletFolder($id_folder){
      $folderPath=(is_dir($id_folder))?$id_folder:$folderPath='./assets/img/properties/'.$id_folder;

        foreach(glob($folderPath . "/*") as $archivos_carpeta)
        {
          if (is_dir($archivos_carpeta)){
            $this->deletFolder($archivos_carpeta);
          }
          else{
            unlink($archivos_carpeta);
          }
        }
        rmdir($folderPath);
    }
    public function getSellers(){
        return $this->db->get('fd_sellers')->result();
    } 
    public function getDevelops(){
        return $this->db->get('fd_developments')->result();
    }   
    public function getKindProperties(){
        return $this->db->get('fd_kindproperties')->result();
    }
}
