<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Scripts -->
    <script src="/js/app.js" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <!-- Styles -->
    <link href="/css/sb.css" rel="stylesheet">
    <link href="/css/app.css" rel="stylesheet">
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">

    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">


    <title>SESUR | Admin</title>
</head>
<body>
<div id="wrapper">
    <!-- Sidebar -->
    <ul class="navbar-nav bg-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
            <div class="sidebar-brand-icon rotate-n-15">
            </div>
            <div class="sidebar-brand-text mx-3">
                <router-link :to="{name: 'Home'}" tag="li">
                    SESUR <sup>1.0 </sup>

                </router-link>


            </div>
        </a>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">

        <!-- Nav Item - Dashboard -->
        <li class="nav-item active">
            <a href="#" class="nav-link" @click="component='Home'">
                <i class="fa fa-tachometer" aria-hidden="true"></i>
                <span>Dashboard</span>
            </a>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider">
        <!-- Nav Item - payments -->
        <!-- Heading -->
        <div class="sidebar-heading">
            Payments
        </div>
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
               aria-expanded="true" aria-controls="collapseTwo">
                <i class="fa fa-dollar"></i>
                <span>Payements</span>
            </a>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Choisir:</h6>
                    <a class="collapse-item" href="#received" @click="component='Received'">Tous</a>
                    <a class="collapse-item" href="#Pay" @click="component='NewPayment'">En Cours</a>
                </div>
            </div>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider">
        <!--Users-->
        <div class="sidebar-heading">
            Utilisateurs
        </div>
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
               aria-expanded="true" aria-controls="collapsPages">
                <i class="fa fa-user"></i>
                <span>Utilisateurs</span>
            </a>
            <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Choisir:</h6>
                    <a class="collapse-item" href="#teachers" @click="component='Teachers'">Tous</a>
                    <a class="collapse-item" href="#students" @click="component='Students'">Non verifiés</a>
                    <a class="collapse-item" href="#admins" @click="component='Admins'">Blockés</a>

                </div>
            </div>
        </li>

        <hr class="sidebar-divider">
        <div class="sidebar-heading">
            Véhicules
        </div>
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseOne"
               aria-expanded="true" aria-controls="collapseOne">
                <i class="fa fa-archive"></i>
                <span>Vehicules</span>
            </a>
            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" aria-controls="collapseOne"
                 data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Choisir:</h6>

                    <a class="collapse-item" href="/superuser/impoter" @click="component='Categories'">Importer</a>
                    <a class="collapse-item" href="#newCategory" @click="component='NewCategory'">Tous</a>
                    <a class="collapse-item" href="#newCategory" @click="component='NewCategory'">Non payés</a>
                    <a class="collapse-item" href="#newCategory" @click="component='NewCategory'">Sortie</a>

                </div>
            </div>
        </li>
        <!-- Divider -->
        <hr class="sidebar-divider">
        <!-- Heading -->
        <div class="sidebar-heading">
            Transactions
        </div>

        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseCourses"
               aria-expanded="true" aria-controls="collapseCourses">
                <i class="fa fa-book"></i>
                <span>Transactions</span>
            </a>
            <div id="collapseCourses" class="collapse" aria-labelledby="headingOne" aria-controls="collapseOne"
                 data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Choisir:</h6>
                    <a class="collapse-item" href="#courses" @click="component='Courses'">Non validés</a>
                    <a class="collapse-item" href="#demandes" @click="component='CourseDemands'">Tous</a>
                </div>
            </div>
        </li>

        <hr class="sidebar-divider">
        <!-- Heading -->
        <div class="sidebar-heading">
            Contacts
        </div>

        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseMessages"
               aria-expanded="true" aria-controls="collapseMessages">
                <i class="fa fa-envelope"></i>
                <span>Contacts</span>
            </a>
            <div id="collapseMessages" class="collapse" aria-labelledby="headingOne" aria-controls="collapseOne"
                 data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Choisir:</h6>
                    <a class="collapse-item" href="#messages" @click="component='Messages'">Messages</a>
                    <a class="collapse-item" href="#infoletters"
                       @click="component='NewsletterEmails'">Infoletters</a>

                </div>
            </div>
        </li>


    </ul>
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

        <!-- Main Content -->
        <div id="content">
            <!-- Topbar -->
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <!-- Topbar Search -->
                <div class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <h2>
                        Sesur Administration
                    </h2>
                </div>

                <!-- Topbar Navbar -->
                <ul class="navbar-nav ml-auto">
                    <!-- Nav Item - Search Dropdown (Visible Only XS) -->
                    <!-- Nav Item - Messages -->

                    <div class="topbar-divider d-none d-sm-block">

                    </div>
                    <button class="btn btn-danger" @click="logout">
                        Déconnecter
                    </button>
                </ul>

            </nav>
            <!-- End of Topbar -->

            <!-- Begin Page Content -->
            <div class="container-fluid">
                @yield('content')
            </div>
            <!-- /.container-fluid -->

        </div>
        <!-- End of Main Content -->

    </div>
    <!-- End of Content Wrapper -->

</div>

</body>
</html>
