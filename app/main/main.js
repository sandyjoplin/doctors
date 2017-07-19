'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
    .config(function ($stateProvider, $urlRouterProvider) {

        // ROUTING with ui.router
        $urlRouterProvider.otherwise('/main/list');
        $stateProvider
        // this state is placed in the <ion-nav-view> in the index.html
            .state('main', {
                url: '/main',
                abstract: true,
                templateUrl: 'main/templates/menu.html',
                controller: 'MenuCtrl as menu'
            })
            .state('main.list', {
                url: '/list',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/list.html',
                        // controller: '<someCtrl> as ctrl'
                    }
                }
            })
            .state('main.listDetail', {
                url: '/list/detail',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/list-detail.html',
                        // controller: '<someCtrl> as ctrl'
                    }
                }
            })
            .state('main.debug', {
                url: '/debug',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/debug.html',
                        controller: 'DebugCtrl as ctrl'
                    }
                }
            })
            .state('main.login', {
                url: '/login',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/login.html',
                        controller: 'LoginCtrl as login'
                    }
                }
            })
            .state('main.iniciar', {
                url: '/iniciar',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/iniciar-sesion.html',
                        controller: 'IniciarSesionCtrl as iniciar'
                    }
                }
            })
            .state('main.registrate', {
                url: '/registrate',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/registrate.html',
                        controller: 'RegistrateCtrl as registrate'
                    }
                }
            })
            .state('main.conocenos', {
                url: '/conocenos',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/conocenos.html',
                        controller: 'ConocenosCtrl as conocenos'
                    }
                }
            })
            .state('main.invita', {
                url: '/invita',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/invita.html',
                        controller: 'InvitaCtrl as invita'
                    }
                }
            })
            .state('main.listo', {
                url: '/listo',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/listo.html',
                        controller: 'ListoCtrl as listo'
                    }
                }
            })
            .state('main.home', {
                url: '/home',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/home.html',
                        controller: 'HomeCtrl as home'
                    }
                }
            })
            .state('main.llenarPerfil', {
                url: '/llenarPerfil',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/llenar-perfil.html',
                        controller: 'LlenarPerfilCtrl as llenarPerfil'
                    }
                }
            })
            .state('main.bit', {
                url: '/bit',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/bit.html',
                        controller: 'BitCtrl as bit'
                    }
                }
            })
            .state('main.beats', {
                url: '/beats',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/beats.html',
                        controller: 'BeatsCtrl as beats'
                    }
                }
            })
            .state('main.emocional', {
                url: '/emocional',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/emocional.html',
                        controller: 'EmocionalCtrl as emocional'
                    }
                }
            })
            .state('main.agenda', {
                url: '/agenda',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/agenda.html',
                        controller: 'AgendaCtrl as agenda'
                    }
                }
            })
            .state('main.donaciones', {
                url: '/donaciones',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/donaciones.html',
                        controller: 'DonacionesCtrl as donaciones'
                    }
                }
            })
            .state('main.tarjeta', {
                url: '/tarjeta',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/tarjeta.html',
                        controller: 'TarjetaCtrl as tarjeta'
                    }
                }
            })
            .state('main.facturas', {
                url: '/facturas',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/facturas.html',
                        controller: 'FacturasCtrl as facturas'
                    }
                }
            })
            .state('main.configuracion', {
                url: '/configuracion',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/configuracion.html',
                        controller: 'ConfiguracionCtrl as configuracion'
                    }
                }
            })
            .state('main.ayuda', {
                url: '/ayuda',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/ayuda.html',
                        controller: 'AyudaCtrl as ayuda'
                    }
                }
            })
            .state('main.tuComunidad', {
                url: '/tuComunidad',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/tu-comunidad.html',
                        controller: 'TuComunidadCtrl as tuComunidad'
                    }
                }
            })
            .state('main.amigo', {
                url: '/amigo',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/amigo.html',
                        controller: 'AmigoCtrl as amigo'
                    }
                }
            })
            .state('main.comentarios', {
                url: '/comentarios',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/comentarios.html',
                        controller: 'ComentariosCtrl as comentarios'
                    }
                }
            })
            .state('main.expediente', {
                url: '/expediente',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/expediente.html',
                        controller: 'ExpedienteCtrl as expediente'
                    }
                }
            })
            .state('main.nuevaTarjeta', {
                url: '/nuevaTarjeta',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/nueva-tarjeta.html',
                        controller: 'NuevaTarjetaCtrl as nuevaTarjeta'
                    }
                }
            })
            .state('main.agregarRfc', {
                url: '/agregarRfc',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/agregar-rfc.html',
                        controller: 'AgregarRfcCtrl as agregarRfc'
                    }
                }
            })
            .state('main.preguntas', {
                url: '/preguntas',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/preguntas.html',
                        controller: 'PreguntasCtrl as preguntas'
                    }
                }
            })
            .state('main.historicoRecetas', {
                url: '/historicoRecetas',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/historico-recetas.html',
                        controller: 'HistoricoRecetasCtrl as historicoRecetas'
                    }
                }
            })
            .state('main.consultasPasadas', {
                url: '/consultasPasadas',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/consultas-pasadas.html',
                        controller: 'ConsultasPasadasCtrl as consultasPasadas'
                    }
                }
            })
            .state('main.receta', {
                url: '/receta',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/receta.html',
                        controller: 'RecetaCtrl as receta'
                    }
                }
            })
            .state('main.consulta', {
                url: '/consulta',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/consulta.html',
                        controller: 'ConsultaCtrl as consulta'
                    }
                }
            })
            .state('main.consultas', {
                url: '/consultas',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/consultas.html',
                        controller: 'ConsultasCtrl as consultas'
                    }
                }
            })
           
            .state('main.recomendar', {
                url: '/recomendar',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/recomendar.html',
                        controller: 'RecomendarCtrl as recomendar'
                    }
                }
            })
        
         .state('main.agendaUno', {
                url: '/agendaUno',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/agenda-uno.html',
                        controller: 'AgendaUnoCtrl as agendaUno'
                    }
                }
            })
         .state('main.agendaCita', {
                url: '/agendaCita',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/agenda-cita.html',
                        controller: 'AgendaCitaCtrl as agendaCita'
                    }
                }
            })
        .state('main.compartir', {
                url: '/compartir',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/compartir.html',
                        controller: 'CompartirCtrl as compartir'
                    }
                }
            })
          .state('main.compartirPrivacidad', {
                url: '/compartirPrivacidad',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/compartir-privacidad.html',
                        controller: 'CompartirPrivacidadCtrl as compartirPrivacidad'
                    }
                }
            })
        .state('main.nuevoDependiente', {
                url: '/nuevoDependiente',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/nuevo-dependiente.html',
                        controller: 'NuevoDependienteCtrl as nuevoDependiente'
                    }
                }
            })
         .state('main.grupos', {
                url: '/grupos',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/grupos.html',
                        controller: 'GruposCtrl as grupos'
                    }
                }
            })
           .state('main.nuevoGrupo', {
                url: '/nuevoGrupo',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/nuevo-grupo.html',
                        controller: 'NuevoGrupoCtrl as nuevoGrupo'
                    }
                }
            })
         .state('main.grupoUno', {
                url: '/grupoUno',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/grupo-uno.html',
                        controller: 'GrupoUnoCtrl as grupoUno'
                    }
                }
            })
         .state('main.miembrosGrupos', {
                url: '/miembrosGrupos',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/miembros-grupos.html',
                        controller: 'MiembrosGruposCtrl as miembrosGrupos'
                    }
                }
            })
          .state('main.chatGrupo', {
                url: '/chatGrupo',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/chat-grupo.html',
                        controller: 'ChatGrupoCtrl as chatGrupo'
                    }
                }
            })
         .state('main.servicios', {
                url: '/servicios',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/servicios.html',
                        controller: 'ServiciosCtrl as servicios'
                    }
                }
            })
         .state('main.notificaciones', {
                url: '/notificaciones',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/notificaciones.html',
                        controller: 'NotificacionesCtrl as notificaciones'
                    }
                }
            })
        .state('main.compartirPublicacion', {
                url: '/compartirPublicacion',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/compartir-publicacion.html',
                        controller: 'CompartirPublicacionCtrl as compartirPublicacion'
                    }
                }
            })
           .state('main.modales', {
                url: '/modales',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/modales.html',
                        controller: 'ModalesCtrl as modales'
                    }
                }
            })
          .state('main.cambioCelular', {
                url: '/cambioCelular',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/cambio-celular.html',
                        controller: 'CambioCelularCtrl as cambioCelular'
                    }
                }
            })
           .state('main.cambiocelularUno', {
                url: '/cambiocelularUno',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/cambiocelular-uno.html',
                        controller: 'CambiocelularUnoCtrl as cambiocelularUno'
                    }
                }
            })
          .state('main.cambiocelularDos', {
                url: '/cambiocelularDos',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/cambiocelular-dos.html',
                        controller: 'CambiocelularDosCtrl as cambiocelularDos'
                    }
                }
            })
           .state('main.cambiocelularTres', {
                url: '/cambiocelulaTress',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/cambiocelular-tres.html',
                        controller: 'CambiocelularTresCtrl as cambiocelularTres'
                    }
                }
            })
          .state('main.vistaPrevia', {
                url: '/vistaPrevia',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/vista-previa.html',
                        controller: 'VistaPreviaCtrl as vistaPrevia'
                    }
                }
            })
         .state('main.agregarCuenta', {
                url: '/agregarCuenta',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/agregar-cuenta.html',
                        controller: 'AgregarCuentaCtrl as agregarCuenta'
                    }
                }
            })
           .state('main.negocio', {
                url: '/negocio',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/negocio.html',
                        controller: 'NegocioCtrl as negocio'
                    }
                }
            })
         .state('main.videollamada', {
                url: '/videollamada',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/videollamada.html',
                        controller: 'VideollamadaCtrl as videollamada'
                    }
                }
            })
         .state('main.ingresos', {
                url: '/ingresos',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/ingresos.html',
                        controller: 'IngresosCtrl as ingresos'
                    }
                }
            })
         .state('main.egresos', {
                url: '/egresos',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/egresos.html',
                        controller: 'EgresosCtrl as egresos'
                    }
                }
            })
         .state('main.totalConsulta', {
                url: '/totalConsulta',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/total-consulta.html',
                        controller: 'Total-ConsultaCtrl as totalconsulta'
                    }
                }
            })
         .state('main.totalPacientes', {
                url: '/totalPacientes',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/total-pacientes.html',
                        controller: 'TotalPacientesCtrl as totalpacientes'
                    }
                }
            })
         .state('main.pacientesAbandonados', {
                url: '/pacientesAbandonados',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/pacientes-abandonados.html',
                        controller: 'PacientesAbandonadosCtrl as pacientesabandonados'
                    }
                }
            })
         .state('main.perfilNoBiturbia', {
                url: '/perfilNoBiturbia',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/perfil-no-biturbia.html',
                        controller: 'PerfilNoBiturbiaCtrl as perfilnobiturbia'
                    }
                }
            })
         .state('main.perfil', {
                url: '/perfil',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/perfil.html',
                        controller: 'PerfilCtrl as perfil'
                    }
                }
            })
         .state('main.agregarConsultorio', {
                url: '/agregarConsultorio',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/agregar-consultorio.html',
                        controller: 'AgregarConsultorioCtrl as agregarConsultorio'
                    }
                }
            })
         .state('main.carreraEducacion', {
                url: '/carreraEducacion',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/carrera-educacion.html',
                        controller: 'CarreraEducacionCtrl as carreraeducacion'
                    }
                }
            })
         .state('main.ecositemaAfiliacion', {
                url: '/ecosistemaAfiliacion',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/ecositema-afiliacion.html',
                        controller: 'EcositemaAfiliacionCtrl as ecositemaAfiliacion'
                    }
                }
            })
         .state('main.ecositemaEquipo', {
                url: '/ecosistemaequipo',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/ecositema-equipo.html',
                        controller: 'EcositemaEquipoCtrl as ecositemaEquipo'
                    }
                }
            })
         .state('main.expedientesNuevos', {
                url: '/expedientesNuevos',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/expedientes-nuevos.html',
                        controller: 'ExpedientesNuevosCtrl as expedientesNuevos'
                    }
                }
            })
         .state('main.accesoSeguro', {
                url: '/accesoSeguro',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/acceso-seguro.html',
                        controller: 'AccesoSeguroCtrl as accesoSeguro'
                    }
                }
            })
         .state('main.consultaAsistenciaremota', {
                url: '/AsistenciaRemota',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/consulta-asistenciaremota.html',
                        controller: 'ConsultaAsistenciaremotaCtrl as consultaAsistenciaremota'
                    }
                }
            })
         .state('main.consultaAsistenciaremota2', {
                url: '/AsistenciaRemota2',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/consulta-asistenciaremota2.html',
                        controller: 'ConsultaAsistenciaremota2Ctrl as consultaAsistenciaremota2'
                    }
                }
            })
         .state('main.consultaGuardar', {
                url: '/guardarConsulta',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/consulta-guardar.html',
                        controller: 'ConsultaGuardarCtrl as consultaGuardar'
                    }
                }
            })
         .state('main.consultaExitosa', {
                url: '/ConsultaExitosa',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/consulta-exitosa.html',
                        controller: 'ConsultaExitosaCtrl as ConsultaExitosa'
                    }
                }
            })
         .state('main.historialClinico', {
                url: '/historialClinico',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/historial-clinico.html',
                        controller: 'HistorialClinicoCtrl as historialClinico'
                    }
                }
            })
         .state('main.consulta12', {
                url: '/consulta12',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/consulta12.html',
                        controller: 'Consulta12Ctrl as consulta12'
                    }
                }
            })
         .state('main.consulta15', {
                url: '/consulta15',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/consulta15.html',
                        controller: 'Consulta15Ctrl as consulta15'
                    }
                }
            })
         .state('main.consulta13', {
                url: '/consulta13',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/consulta13.html',
                        controller: 'Consulta13Ctrl as consulta13'
                    }
                }
            })
         .state('main.consulta11', {
                url: '/consulta11',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/consulta11.html',
                        controller: 'Consulta11Ctrl as consulta11'
                    }
                }
            })
         .state('main.Agenda4', {
                url: '/agenda4',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/agenda4.html',
                        controller: 'Agenda4Ctrl as agenda4'
                    }
                }
            })
         .state('main.consulta1', {
                url: '/consulta1',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/consulta1.html',
                        controller: 'Consulta1Ctrl as consulta1'
                    }
                }
            })
         .state('main.consulta2', {
                url: '/consulta2',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/consulta2.html',
                        controller: 'Consulta2Ctrl as consulta2'
                    }
                }
            })
         .state('main.nuevaCita', {
                url: '/nuevaCita',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/nueva-cita.html',
                        controller: 'NuevaCitaCtrl as nuevaCita'
                    }
                }
            })
         .state('main.mensaje3', {
                url: '/mensaje3',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/mensaje3.html',
                        controller: 'Mensaje3Ctrl as mensaje3'
                    }
                }
            })
         .state('main.mensaje2', {
                url: '/mensaje2',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/mensaje2.html',
                        controller: 'Mensaje2Ctrl as mensaje2'
                    }
                }
            })
         .state('main.comentarios1', {
                url: '/comentarios1',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/comentarios1.html',
                        controller: 'Comentarios1Ctrl as comentarios1'
                    }
                }
            })
         .state('main.comunidad5', {
                url: '/comunidad5',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/comunidad5.html',
                        controller: 'Comunidad5Ctrl as comunidad5'
                    }
                }
            })
         .state('main.comunidad3', {
                url: '/comunidad3',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/comunidad3.html',
                        controller: 'Comunidad3Ctrl as comunidad3'
                    }
                }
            })
         .state('main.comunidad4', {
                url: '/comunidad4',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/comunidad4.html',
                        controller: 'Comunidad4Ctrl as comunidad4'
                    }
                }
            })
         .state('main.comunidad4c', {
                url: '/comunidad4c',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/comunidad4c.html',
                        controller: 'Comunidad4cCtrl as comunidad4c'
                    }
                }
            })
         .state('main.comunidad8', {
                url: '/comunidad8',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/comunidad8.html',
                        controller: 'Comunidad8Ctrl as comunidad8'
                    }
                }
            })
         .state('main.donaciones3', {
                url: '/donaciones3',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/donaciones3.html',
                        controller: 'Donaciones3Ctrl as donaciones3'
                    }
                }
            })
         .state('main.donaciones4', {
                url: '/donaciones4',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/donaciones4.html',
                        controller: 'Donaciones3Ctrl as donaciones4'
                    }
                }
            })
         .state('main.terminosCondiciones', {
                url: '/terminosCondiciones',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/terminos-condiciones.html',
                        controller: 'TerminosCondicionesCtrl as terminosCondiciones'
                    }
                }
            })
         .state('main.mensaje4', {
                url: '/mensaje4',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/mensaje4.html',
                        controller: 'Mensaje4Ctrl as mensaje4'
                    }
                }
            })
         .state('main.notas1', {
                url: '/notas1',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/notas1.html',
                        controller: 'Notas1Ctrl as Notas1'
                    }
                }
            })
         .state('main.opinion2', {
                url: '/opinion2',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/opinion2.html',
                        controller: 'Opinion2Ctrl as opinion2'
                    }
                }
            })
         .state('main.perfil3', {
                url: '/perfil3',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/perfil3.html',
                        controller: 'Perfil3Ctrl as perfil3'
                    }
                }
            })
         .state('main.perfil6', {
                url: '/perfil6',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/perfil6.html',
                        controller: 'Perfil6Ctrl as perfil6'
                    }
                }
            })
         .state('main.defuncion1', {
                url: '/defuncion1',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/defuncion1.html',
                        controller: 'Defuncion1Ctrl as defuncion1'
                    }
                }
            })
         .state('main.defuncion2', {
                url: '/defuncion2',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/defuncion2.html',
                        controller: 'Defuncion2Ctrl as defuncion2'
                    }
                }
            })
         .state('main.perfilPopup', {
                url: '/perfilPopup',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/perfil-popup.html',
                        controller: 'PerfilPopupCtrl as perfilPopup'
                    }
                }
            })
         .state('main.beatsPopup', {
                url: '/beatsPopup',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/beats-popup.html',
                        controller: 'BeatsPopupCtrl as beatsPopup'
                    }
                }
            })
         .state('main.popup1', {
                url: '/popup1',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/popup1.html',
                        controller: 'Popup1Ctrl as popup1'
                    }
                }
            })
         .state('main.seguimiento1', {
                url: '/seguimiento1',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/seguimiento1.html',
                        controller: 'Seguimiento1Ctrl as seguimiento1'
                    }
                }
            })
         .state('main.registro2', {
                url: '/registro2',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/registro2.html',
                        controller: 'Registro2Ctrl as registro2'
                    }
                }
            })
         .state('main.registro3a', {
                url: '/registro3a',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/registro3a.html',
                        controller: 'Registro3aCtrl as registro3a'
                    }
                }
            })
         .state('main.registro4', {
                url: '/registro4',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/registro4.html',
                        controller: 'Registro4Ctrl as registro4'
                    }
                }
            })
         .state('main.videoconsulta2', {
                url: '/videoconsulta2',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/videoconsulta2.html',
                        controller: 'Videoconsulta2Ctrl as videoconsulta2'
                    }
                }
            })
         .state('main.videoconsulta4', {
                url: '/videoconsulta4',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/videoconsulta4.html',
                        controller: 'Videoconsulta4Ctrl as videoconsulta4'
                    }
                }
            })
         .state('main.videoconsulta5', {
                url: '/videoconsulta5',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/videoconsulta5.html',
                        controller: 'Videoconsulta5Ctrl as videoconsulta5'
                    }
                }
            })
         .state('main.videoconsulta6', {
                url: '/videoconsulta6',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/videoconsulta6.html',
                        controller: 'Videoconsulta6Ctrl as videoconsulta6'
                    }
                }
            })
         .state('main.videoconsulta11', {
                url: '/videoconsulta11',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/videoconsulta11.html',
                        controller: 'Videoconsulta11Ctrl as videoconsulta11'
                    }
                }
            })
         .state('main.videoconsulta12', {
                url: '/videoconsulta12',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/videoconsulta12.html',
                        controller: 'Videoconsulta12Ctrl as videoconsulta12'
                    }
                }
            })
         .state('main.videoconsulta15', {
                url: '/videoconsulta15',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/videoconsulta15.html',
                        controller: 'Videoconsulta15Ctrl as videoconsulta15'
                    }
                }
            })
         .state('main.videoconsulta15a', {
                url: '/videoconsulta15a',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/videoconsulta15a.html',
                        controller: 'Videoconsulta15aCtrl as videoconsulta15a'
                    }
                }
            })
         .state('main.videoconsulta16', {
                url: '/videoconsulta16',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/videoconsulta16.html',
                        controller: 'Videoconsulta16Ctrl as videoconsulta16'
                    }
                }
            })
         .state('main.videoconsulta13', {
                url: '/videoconsulta13',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/videoconsulta13.html',
                        controller: 'Videoconsulta13Ctrl as videoconsulta13'
                    }
                }
            })
         .state('main.videoconsulta18', {
                url: '/videoconsulta18',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/videoconsulta18.html',
                        controller: 'Videoconsulta18Ctrl as videoconsulta18'
                    }
                }
            })
         .state('main.videoconsulta17', {
                url: '/videoconsulta17',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/videoconsulta17.html',
                        controller: 'Videoconsulta17Ctrl as videoconsulta17'
                    }
                }
            })
         .state('main.videoconsulta19', {
                url: '/videoconsulta19',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/videoconsulta19.html',
                        controller: 'Videoconsulta19Ctrl as videoconsulta19'
                    }
                }
            })
           .state('main.tusNuevos', {
                url: '/tusNuevos',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/tus-nuevos.html',
                        controller: 'TusNuevosCtrl as tusNuevos'
                    }
                }
            })
           .state('main.bloquear', {
                url: '/bloquear',
                views: {
                    'pageContent': {
                        templateUrl: 'main/templates/bloquear.html',
                        controller: 'BloquearCtrl as bloquear'
                    }
                }
            });

    
    }).config(function ($ionicConfigProvider) {
    $ionicConfigProvider.form.checkbox("circle");
    console.log('configurado');
    
});



