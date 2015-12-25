 <!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<script type="text/javascript" src="<?= base_url('assets/js/angular.min.js')?>"></script>
	<script type="text/javascript" src="<?= base_url('assets/js/angular-resource.min.js')?>"></script>
	<script type="text/javascript" src="<?= base_url('assets/js/angular-route.min.js')?>"></script>
	<script type="text/javascript" src="<?= base_url('assets/js/app/app.js')?>"></script>
	<link rel="stylesheet" type="text/css" href="<?= base_url('assets/css/bootstrap.css');?>">
	<link rel="stylesheet" type="text/css" href="<?= base_url('assets/css/login.css');?>">
    <script type="text/javascript" src="<?= base_url('assets/js/jquery-2.1.4.js');?>"></script>
    <script type="text/javascript" src="<?= base_url('assets/js/bootstrap.min.js');?>"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
    
</head>

<body>

   <div class="container">
       <div class="row">
           <div class="col-md-6 col-md-offset-3 login-container">
              <form>
                <h2 style="color: #337AB7">Administrador de propiedades</h2>
                  <span style="color: gray">Bienvenido, ingresa tus credenciales para comenzar</span>
                  <hr>
                    <div class="form-group">
                        <label for="username">Usuario:</label>
                        <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-user"></i></div>
                           <input type="text" id="username" class="form-control" placeholder="Escribe tu nombre de usuario..." required="" autofocus="" name="nombre">
                        </div>
                  </div>
                  <div class="form-group">
                      <label for="password">Contraseña:</label>
                      <div class="input-group">
                            <div class="input-group-addon"><i class="fa fa-lock"></i></div>
                           <input type="password" id="password" class="form-control" placeholder="Escribe tu contraseña..." required="" autofocus="" name="nombre">
                        </div>
                  </div>
                <div class="form-group">
                    <button class="btn btn-primary pull-right hover-effect" type="submit"><span class="fa fa-arrow-right"></span>Ingresar</button>
                </div>
              </form>
           </div>
       </div>

    </div>

</body>

</html>
