<?php
    class Sellers_model extends CI_Model {
        function __construct(){
            parent::__construct();
        }

        function getSellers(){
            return $this->db->get('fd_sellers')->result();
        }
        
        function addSeller($seller){
            return $this->db->insert('fd_sellers',$seller);
        }
    }
?>