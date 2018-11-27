import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ******************************** Importar componentes principales. ********************************
//Rutas.
import { AppRoutingModule } from './app-routing.module';

//Componente principal.
import { AppComponent } from './app.component';

//Angular Material.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';

// ******************************** Importar componentes añadidos. ********************************
//Web principal.
import { IndexComponent } from './Components/index/index.component';

import { EncabezadoComponent } from './Components/index/encabezado/encabezado.component';
import { CuerpoComponent } from './Components/index/cuerpo/cuerpo.component';
import { PieComponent } from './Components/index/pie/pie.component';

//Home.
import { HomeComponent } from './Components/home/home.component';

//Productos.
  //Impresión.
  import { ImpresorasComponent } from './Components/productos/impresion/impresoras/impresoras.component';
  import { TecnologiaDeImpresionComponent } from './Components/productos/impresion/tecnologia-de-impresion/tecnologia-de-impresion.component';

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

  //Fichas de soluciones (ventajas que ofrecen los servicios).
  import { FichaSolucionUnoComponent } from './Components/soluciones/fichas_de_contratacion_de_servicios/ficha-solucion-uno/ficha-solucion-uno.component';
  import { FichaSolucionDosComponent } from './Components/soluciones/fichas_de_contratacion_de_servicios/ficha-solucion-dos/ficha-solucion-dos.component';

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

@NgModule({
  declarations: [
    // ******************************** Componente principal. ********************************
    //Componente principal.
    AppComponent,

    // ******************************** Componentes añadidos. ********************************
    //Web principal.
    IndexComponent,
    
    EncabezadoComponent,
    CuerpoComponent,
    PieComponent,

    //Home.
    HomeComponent,

    //Productos.

      //Impresión
      ImpresorasComponent,
      TecnologiaDeImpresionComponent,

    AplicacionesDeNegociosComponent,
    InteligenciaDeNegociosComponent,
    RrhhTecnologicoComponent,

    //Soluciones.
      //RRTAAS.
      PrtassComponent,

      //SAAS.
      PlantasSipComponent,
      SoftwareErpComponent,
      GestionDeArchivosDigitalizadosComponent,
      AutomatizacionDeMediosDigitalesComponent,
      SeguridadElectronicaComponent,
      AdministracionDeImpresorasComponent,

      //Smart Office.
      SmartOfficeComponent,

      //Digitalización de archivos históricos.
      DigitalizacionDeArchivosHistoricosComponent,

      //Mantenimiento de parque de los equipos electrónicos.
      MantenimientoDeParqueDeLosEquiposElectronicosComponent,

      //Outsorsing RRHH tecnológico.
      OutsourcingRrhhTecnologicoComponent,

      //Fichas de soluciones (ventajas que ofrecen los servicios).
      FichaSolucionUnoComponent,
      FichaSolucionDosComponent,

    //Desarrollo de mercados verticales.
    DesarrolloDeMercadosVerticalesComponent,

    //Blog.
    QuienesSomosComponent,
    ExperienciasComponent,
    ArticulosComponent,
    OpinionesComponent,

    //Investigación y desarrollo.
    InvestigacionYDesarrolloComponent,

    //Contacto.
    ContactoComponent,

    //Error.
    ErrorComponent
  ],
  imports: [
    BrowserModule,

    //Rutas.
    AppRoutingModule,
    
    HttpModule,
    FormsModule,
    ReactiveFormsModule,

    //Angular Material
    BrowserAnimationsModule,

    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
