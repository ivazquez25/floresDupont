<!DOCTYPE html>
<html ng-app="FloresDupontApp">
<head>
	<title>Flores Dupont Admin</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<link rel="stylesheet" type="text/css" href="<?= base_url('assets/css/bootstrap.css');?>">
	<link rel="stylesheet" type="text/css" href="<?= base_url('assets/css/main_layout.css');?>">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
    <link data-require="angular-block-ui@*" data-semver="0.1.1" rel="stylesheet" href="https://cdn.rawgit.com/McNull/angular-block-ui/v0.1.1/dist/angular-block-ui.min.css" />
    <style>
      
    </style>
    
</head>
<body style="overflow-y:scroll">
    <div id="wrap">
        <header>
            <nav class="navbar navbar-default" style="background: #003580;">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Flores Dupont</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a href="#/dashboard" class="main-menu-option hover-effect"><i class="fa fa-tachometer"></i>Dashboard</a></li>
            <li><a href="#/propiedades"><i class="fa fa-key"></i>Propiedades</a></li>
            <li class="dropdown">
                <a href="" class="main-menu-option hover-effect" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-bar-chart"></i>Catalogos<span class="caret"></span></a>
                <ul class="dropdown-menu">
                <li><a href="#/desarrollos">Desarrollos</a></li>
                <li><a href="">Tipos de Inmuebles</a></li>
                <li><a href="#/vendedores">Vendedores</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-map-o"></i>Secciones Sitio <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Landing</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Inmuebles</a></li>
                <li><a href="#">Vende</a></li>
                <li><a href="#">Contacto</a></li>
              </ul>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user"></i>Darbo Escalante <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="">Cerrar sesi&oacute;n</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    </header>
        
    <div class="main-content">
        <div ng-view></div>
    </div>
        
    <footer>
        <div class="container">
                <strong>SAP (Sistema Administrativo de Propiedades)</strong>
                 © 2015 Flores Dupont
        </div>
    </footer>
    </div>
    <script type="text/javascript" src="<?= base_url('assets/js/angular.min.js')?>"></script>
	<script type="text/javascript" src="<?= base_url('assets/js/angular-resource.min.js')?>"></script>
	<script type="text/javascript" src="<?= base_url('assets/js/angular-route.min.js')?>"></script>
	<script type="text/javascript" src="<?= base_url('assets/js/app/app.js')?>"></script>
    <script type="text/javascript" src="<?= base_url('assets/js/jquery-2.1.4.js');?>"></script>
	<script type="text/javascript" src="<?= base_url('assets/js/bootstrap.min.js');?>">
    <script type="text/javascript" src="<?= base_url('assets/js/ui-bootstrap-tpls-0.14.3.min.js');?>"></script>
    <script type="text/javascript" src="<?= base_url('assets/js/si-table.min.js');?>"></script>
    <script type="text/javascript" src="<?= base_url('assets/js/angular-block-ui.min.js');?>"></script>
    <script type="text/javascript" src="<?= base_url('assets/js/angular-animate.min.js');?>"></script>
    <script type="text/javascript" src="<?= base_url('assets/js/ng-file-upload-shim.min.js');?>"></script>
    <script type="text/javascript" src="<?= base_url('assets/js/ng-file-upload.min.js');?>"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.js"></script>
    <script src="http://rawgit.com/angular-ui/angular-google-maps/2.0.X/dist/angular-google-maps.js"></script>
    
    <!--toastr-->
    <script type="text/javascript" src="<?= base_url('assets/js/toastr.js');?>"></script>
    <link rel="stylesheet" type="text/css" href="<?= base_url('assets/css/toastr.css');?>"></link>
    
    <!--Properties-->
    <script type="text/javascript" src="<?= base_url('assets/js/app/controllers/PropertiesController.js');?>"></script>
    <script type="text/javascript" src="<?= base_url('assets/js/app/services/PropertiesDataService.js');?>"></script>
    
    <!--Developments-->
    <script type="text/javascript" src="<?= base_url('assets/js/app/controllers/DevelopmentsController.js');?>"></script>
    <script type="text/javascript" src="<?= base_url('assets/js/app/services/DevelopmentsDataService.js');?>"></script>
    
    <!--Sellers-->
    <script type="text/javascript" src="<?= base_url('assets/js/app/controllers/SellersController.js');?>"></script>
    <script type="text/javascript" src="<?= base_url('assets/js/app/services/SellersDataService.js');?>"></script>
  </body>
</html>
