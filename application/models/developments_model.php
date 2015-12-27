<?php
    class Developments_model extends CI_Model {
        function __construct(){
            parent::__construct();
        }

        function getDevelopments(){
            return $this->db->get('fd_developments')->result();
        }

        function addDevelopments($array){
            return $this->db->insert('fd_developments', $array);
        }

        function deleteDevelopments($developmentToDelete){
            return $this->db->delete('fd_developments', $developmentToDelete);
        }

        function updateDevelopment($developmentToUpdate){
            $id = $developmentToUpdate["id"];
            $array = array("name"=>$developmentToUpdate["name"]);
            return $this->db->where("id",$id)->update("fd_developments",$array);
        }
    }
?>