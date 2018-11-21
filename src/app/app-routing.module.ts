import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// ******************************** Importar componentes añadidos. ********************************
//Home.
import { HomeComponent } from './Components/home/home.component';

//Productos.
import { ImpresionComponent } from './Components/productos/impresion/impresion.component';
import { AplicacionesDeNegociosComponent } from './Components/productos/aplicaciones-de-negocios/aplicaciones-de-negocios.component';
import { InteligenciaDeNegociosComponent } from './Components/productos/inteligencia-de-negocios/inteligencia-de-negocios.component';
import { RrhhTecnologicoComponent } from './Components/productos/rrhh-tecnologico/rrhh-tecnologico.component';

//Desarrollo de mercados verticales.
import { DesarrolloDeMercadosVerticalesComponent } from './Components/desarrollo-de-mercados-verticales/desarrollo-de-mercados-verticales.component';

//Soluciones.
  //RRTAAS.
  import { PrtassComponent } from './Components/soluciones/prtass/prtass.component';

  //SASS.
  import { PlantasSipComponent } from './Components/soluciones/saas/plantas-sip/plantas-sip.component';
  import { SoftwareErpComponent } from './Components/soluciones/saas/software-erp/software-erp.component';
  import { GestionDeArchivosDigitalizadosComponent } from './Components/soluciones/saas/gestion-de-archivos-digitalizados/gestion-de-archivos-digitalizados.component';
  import { AutomatizacionDeMediosDigitalesComponent } from './Components/soluciones/saas/automatizacion-de-medios-digitales/automatizacion-de-medios-digitales.component';
  import { SeguridadElectronicaComponent } from './Components/soluciones/saas/seguridad-electronica/seguridad-electronica.component';
  import { AdministracionDeImpresorasComponent } from './Components/soluciones/saas/administracion-de-impresoras/administracion-de-impresoras.component';

  //Smart Office.
  import { SmartOfficeComponent } from './Components/soluciones/smart-office/smart-office.component';

  //Digitalización de archivos históricos.
  import { DigitalizacionDeArchivosHistoricosComponent } from './Components/soluciones/digitalizacion-de-archivos-historicos/digitalizacion-de-archivos-historicos.component';

  //Mantenimiento de parque de los equipos electrónicos.
  import { MantenimientoDeParqueDeLosEquiposElectronicosComponent } from './Components/soluciones/mantenimiento-de-parque-de-los-equipos-electronicos/mantenimiento-de-parque-de-los-equipos-electronicos.component';

  //Outsorsing RRHH tecnológico.
  import { OutsourcingRrhhTecnologicoComponent } from './Components/soluciones/outsourcing-rrhh-tecnologico/outsourcing-rrhh-tecnologico.component';

//Blog.
import { QuienesSomosComponent } from './Components/blog/quienes-somos/quienes-somos.component';
import { ExperienciasComponent } from './Components/blog/experiencias/experiencias.component';
import { ArticulosComponent } from './Components/blog/articulos/articulos.component';
import { OpinionesComponent } from './Components/blog/opiniones/opiniones.component';

//Investigación y desarrollo.
import { InvestigacionYDesarrolloComponent } from './Components/investigacion-y-desarrollo/investigacion-y-desarrollo.component';

//Contacto.
import { ContactoComponent } from './Components/contacto/contacto.component';

//Error.
import { ErrorComponent } from './Components/error/error.component';

const routes: Routes = [
  //Blanco.
  {path: '', redirectTo: '/home', pathMatch: 'full'},

  //Home.
  {path: 'home', component: HomeComponent},

  //Productos.
  {path: 'productos/impresion', component: ImpresionComponent},
  {path: 'productos/aplicaciones-de-negocios', component: AplicacionesDeNegociosComponent},
  {path: 'productos/inteligencia-de-negocios', component: InteligenciaDeNegociosComponent},
  {path: 'productos/rrhh-tecnologico', component: RrhhTecnologicoComponent},

  //Desarrollo de mercados verticales.
  {path: 'desarrollo-de-mercados-verticales', component: DesarrolloDeMercadosVerticalesComponent},

  //Soluciones.
    //RRTAAS.
    {path: 'soluciones/prtaas', component: PrtassComponent},

    //SASS.
    {path: 'soluciones/saas/plantas-telefonicas-sip', component: PlantasSipComponent},
    {path: 'soluciones/saas/software-erp', component: SoftwareErpComponent},
    {path: 'soluciones/saas/gestion-de-archivos-digitalizados', component: GestionDeArchivosDigitalizadosComponent},
    {path: 'soluciones/saas/automatizacion-de-medios-digitales', component: AutomatizacionDeMediosDigitalesComponent},
    {path: 'soluciones/saas/seguridad-electronica', component: SeguridadElectronicaComponent},
    {path: 'soluciones/saas/administracion-de-impresoras', component: AdministracionDeImpresorasComponent},
    
    //Smart Office.
    {path: 'soluciones/smart-office', component: SmartOfficeComponent},
    
    //Digitalización de archivos históricos.
    {path: 'soluciones/digitalizacion-de-archivos-historicos', component: DigitalizacionDeArchivosHistoricosComponent},
    
    //Mantenimiento de parque de los equipos electrónicos.
    {path: 'soluciones/mantenimiento-de-parque-de-los-equipos-electronicos', component: MantenimientoDeParqueDeLosEquiposElectronicosComponent},
    
    //Outsorsing RRHH tecnológico.
    {path: 'soluciones/outsourcing-rrhh-tecnologico', component: OutsourcingRrhhTecnologicoComponent},

  //Blog.
  {path: 'blog/quienes-somos', component: QuienesSomosComponent},
  {path: 'blog/experiencias', component: ExperienciasComponent},
  {path: 'blog/articulos', component: ArticulosComponent},
  {path: 'blog/opiniones', component: OpinionesComponent},

  //Contacto.
  {path: 'contacto', component: ContactoComponent},

  //Investigación y desarrollo.
  {path: 'investigacion-y-desarrollo', component: InvestigacionYDesarrolloComponent},

  //Error.
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
