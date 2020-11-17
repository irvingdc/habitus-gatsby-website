import React from "react";
import "src/main.module.less";
import Nav from "components/Nav/Nav";
import { Helmet } from "react-helmet";
import classes from "styles/privacidad.module.less";
import Footer from "components/Footer/Footer";
import SectionHeader from "components/SectionHeader/SectionHeader";

export default () => (
  <div className={classes.container}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Habitus | Politica de Privacidad</title>
      <link rel="canonical" href="https://habitus.com.mx/privacidad" />
      <meta name="description" content="Politica de privacidad de Habitus" />
      <link rel="shortcut icon" href="https://habitus.com.mx/logo.png" />
    </Helmet>
    <Nav />
    <SectionHeader type="C" title="AVISO DE PRIVACIDAD" />
    <div className={classes.text}>
      <p>
        En cumplimiento a la Ley Federal de Protección de Datos Personales en
        Posesión de Particulares y su Reglamento, THEA THECHNOLOGY SOLUTION, S.
        DE R.L. DE C.V. ("THEA"), con domicilio en De Los Palos 60 A, Zona Sin
        Asignación de Nombre de Col 1, C.P. 72014, Puebla, Pue, correo
        electrónico de contacto direccion@theatechsolution.com y teléfono +52
        (222) 122 8857, emite el presente Aviso de Privacidad, quien es
        responsable de recabar sus datos personales, del uso que se le dé a los
        mismos, así como de su protección, establece a través del presente Aviso
        de Privacidad los siguientes:
      </p>
      <h3>Términos y Condiciones</h3>
      <p>
        El presente Aviso de Privacidad tiene por objeto la protección de los
        datos personales de los clientes, proveedores y demás personas que
        proporcionan información a THEA, así como a todos los terceros con
        quienes sostiene cualquier tipo de relación, mediante su tratamiento
        legítimo, controlado e informado, a efecto de garantizar su privacidad,
        así como su derecho a la autodeterminación informativa.
      </p>
      <p>
        Los datos personales recabados por THEA, tienen como finalidad que los
        datos personales y/o sensibles, en su caso, puedan ser utilizados para
        la debida operación de THEA, incluyendo su transmisión a terceros
        colaboradores, empleados y autoridades competentes que tengan necesidad
        de conocerlos para el debido cumplimiento de los fines de THEA.
      </p>

      <p>
        Al proporcionar sus Datos Personales a THEA por cualquier vía o formato,
        ya sea impreso o digital, autoriza a THEA a utilizar y tratar de forma
        automatizada sus datos personales e información suministrada, los cuales
        formarán parte de nuestra base de datos con la finalidad de usarlos, en
        forma enunciativa, más no limitativa, para: identificarlo, ubicarlo,
        informarlo, darle avisos, invitarlo, contactarlo y hacerle llegar
        información diversa y/o bienes, así como para enviarlos y/o
        transferirlos a terceros, dentro y fuera del territorio nacional, por
        cualquier medio que permita la ley para cumplir con nuestros fines.
      </p>
      <p>
        Mediante la aceptación y autorización para el tratamiento de sus datos
        personales en los términos antes señalados, THEA estará facultada para
        transferir libremente sus datos personales y datos sensibles a
        autoridades federales, estatales, municipales, organismos públicos y
        privados, sean nacionales o extranjeras, clientes, proveedores, socios,
        empresas y demás terceros, con el propósito de cumplir los fines
        relacionados con su objeto social y su giro de negocios.
      </p>
      <p>
        THEA cumple los principios de protección de datos personales
        establecidos por la Ley Federal de Protección de Datos Personales en
        Posesión de los Particulares y adopta las medidas necesarias para su
        aplicación. Lo anterior aún y cuando estos datos fueren tratados por un
        tercero.{" "}
      </p>
      <p>
        Asimismo, THEA toma las medidas necesarias y suficientes para procurar
        que esta Política de Privacidad sea respetada, por THEA, sus empleados,
        colaboradores, directivos y por los terceros con los que guarde alguna
        relación, para otorgar los servicios o productos establecidos con el
        titular de la misma. Los terceros que reciban datos personales para su
        tratamiento o a quienes se les transfieran datos personales, sólo
        recibirán aquellos datos personales que requieran para realizar sus
        labores.
      </p>
      <p>
        Para proteger los datos personales que reciba THEA, hemos establecido
        medidas de seguridad tanto administrativas y técnicas, como físicas,
        según sea más apropiado de acuerdo al tipo de datos personales en
        cuestión y el tratamiento al que están sujetos.
      </p>
      <p>
        Al proporcionar información a THEA por cualquier medio, Usted confirma
        que está de acuerdo con los términos de este Aviso de Privacidad y la
        Política de Protección de Datos Personales.{" "}
      </p>
      <p>
        La temporalidad de la administración, uso y almacenamiento de sus datos
        personales y datos sensibles será indefinida a partir de la fecha en que
        nos los proporcione.
      </p>
      <p>
        Si usted no estuviera de acuerdo con cualquier término del Aviso o
        Política de Protección de Datos Personales, por favor no proporcione
        dato personal alguno. Si decide no proporcionar ciertos datos
        personales, acepta la posibilidad de no tener acceso a ciertos servicios
        o productos que THEA presta.
      </p>
      <p>
        Cualquier titular o representante legal podrá ejercer los derechos de
        acceso, rectificación, cancelación y oposición en términos de la Ley
        Federal de Protección de Datos Personales en Posesión de los
        Particulares, y THEA los medios que le permitan un oportuno ejercicio de
        sus derechos. El ejercicio de los derechos de acceso, rectificación,
        cancelación, oposición, limitación de uso o la revocación del
        consentimiento, podrá solicitarse por escrito al responsable de nuestro
        Departamento de Protección de Datos Personales, el cual se encuentra
        ubicado en De Los Palos 60 A, Zona Sin Asignación de Nombre de Col 1,
        C.P. 72014, Puebla, Pue, o bien, al teléfono +52 (222) 122 8857, o vía
        correo electrónico a direccion@theatechsolution.com
      </p>
      <p>
        En caso de que desee rectificar, cancelar u oponerse a ciertos datos
        personales que conforman la base de datos de THEA, deberá enviar su
        solicitud por escrito y deberá acompañar los siguientes requisitos:
      </p>
      <ol>
        <li>
          El nombre del titular de los datos personales y domicilio para
          comunicarle la respuesta a su solicitud;
        </li>
        <li>
          Los documentos que acrediten la identidad, o en su caso, la
          representación legal del titular;
        </li>
        <li>
          La descripción clara y precisa de los datos personales respecto de los
          que se busca ejercer alguno de los derechos antes mencionados;
        </li>
        <li>
          Cualquier otro elemento o documento que facilite la localización de
          los datos personales; y
        </li>
        <li>
          Para el caso de solicitudes de rectificación, el titular deberá
          indicar las modificaciones a realizarse y aportar la documentación que
          sustente su petición.
        </li>
      </ol>

      <p>
        De conformidad con la Ley Federal de Protección de Datos Personales en
        Posesión de Particulares, THEA comunicará al titular de los datos
        personales en un plazo máximo 20 (veinte) días hábiles contados desde la
        fecha en que se recibió la solicitud, la determinación adoptada a efecto
        de que, si resulta procedente, se haga efectiva la misma dentro de los
        15 (quince) días siguientes a la fecha en que se comunica la respuesta.
      </p>

      <p>
        La obligación de acceso a la información se dará por cumplida cuando se
        pongan a disposición del titular los datos personales; o bien, mediante
        la expedición de copias simples, documentos electrónicos o cualquier
        otro medio que THEA provea al titular de los datos personales.
      </p>

      <p>
        THEA podrá negar el acceso a los datos personales, la rectificación,
        cancelación o concesión de la oposición al tratamiento de los mismos en
        los siguientes supuestos:
      </p>
      <ol>
        <li>
          Cuando el solicitante no sea el titular de los datos personales, o el
          representante legal no esté debidamente acreditado para ello;
        </li>
        <li>
          Cuando en su base de datos no se encuentren los datos personales del
          solicitante;
        </li>
        <li>Cuando se lesionen los derechos de un tercero;</li>
        <li>
          Cuando exista un impedimento legal, o la resolución de una autoridad
          competente que restrinja el acceso a los datos personales o que no
          permita la rectificación, cancelación u oposición de estos; y
        </li>
        <li>
          Cuando la rectificación, cancelación u oposición haya sido previamente
          realizada.
        </li>
      </ol>
      <p>
        Asimismo, THEA limitará el uso de los datos personales y datos
        personales sensibles a petición expresa del titular, y no estará
        obligada a cancelar los datos personales cuando:
      </p>
      <ol>
        <li>
          Se refiera a las partes de un contrato privado, y sean necesarios para
          su desarrollo y cumplimiento;
        </li>

        <li>Deban ser tratados por disposición legal;</li>

        <li>
          Obstaculice actuaciones judiciales o administrativas vinculadas a
          obligaciones fiscales, la investigación y persecución de delitos, o la
          actualización de sanciones administrativas;
        </li>

        <li>
          Sean necesarios para proteger los intereses jurídicamente tutelados
          del titular;
        </li>

        <li>
          Sean necesarios para realizar una acción en función del interés
          público;
        </li>

        <li>
          Sean necesarios para cumplir con una obligación legalmente adquirida
          por el titular; o
        </li>

        <li>
          Sean objeto de tratamiento para la prevención o el diagnóstico médico
          o la gestión de servicios de salud; siempre que dicho tratamiento se
          realice por un profesional de la salud sujeto a un deber de secreto.
        </li>
      </ol>
      <p>
        THEA se reserva el derecho de modificar su Política de Protección de
        Datos Personales y/o este Aviso de Privacidad a su sola discreción. De
        modificarse el Aviso de Privacidad, THEA pondrá públicamente en su sitio
        web www.theatechsolution.com el nuevo Aviso de Privacidad, por lo cual
        lo invitamos a que visite esta sección periódicamente con la finalidad
        de que permanezca informado de cualquier cambio. Todo cambio sustancial
        a la política, a menos que éste se derive de una reforma al marco
        jurídico mexicano o a una orden de autoridad competente, se notificará a
        través del sitio web institucional con 30 (treinta) días naturales de
        anticipación a que surta efectos la modificación correspondiente.
      </p>
    </div>
    <Footer hideContact />
  </div>
);
