import RentPoint from "components/Organisms/RentPoint";
import React from "react";

const PoliciesSection = () => {
  return (
    <section className="py-5 w-full sm:w-8/12   ">
      <RentPoint topic="Politicas de pago">
        <p>
          Se Requiere una tarjeta de crédito válida al momento de firmar
          contrato para el depósito por garantía (10% del valor del auto, este
          depósito varía de acuerdo al Seguro/Cobertura contratada y su tarjeta
          será bloqueada por la cantidad que la arrendadora determine) cuya
          fecha de emisión sea superior a un año. Al término del contrato se
          devuelve la garantía.
        </p>
        <p>
          La tarjeta de crédito que presente para la garanta, debería; ser la
          misma que con la que efectuá el pago. En caso de no ser la misma
          tarjeta de crédito, considere que se realizará; un cargo de
          verificación por 10 MXN para confirmar que esté; activa, mismo que
          será; devuelto al siguiente día.
        </p>
        <p>
          Las tarjetas de crédito digitales o virtuales, no son aceptadas para
          el pago de nuestros servicios, ya que hasta el momento no existe forma
          de comprobar su validez. Además, se sugiere utilizar la misma tarjeta
          al pagar su reservación como al dejar la garantía.
        </p>
        <p>
          La forma de pago al final de la renta podrá ser en efectivo, o tarjeta
          de crédito (American Express, VISA, MasterCard, Banamex, BBVA
          Bancomer, Banorte, Santander, HSBC y Scotiabank)
        </p>
      </RentPoint>
      <RentPoint topic="Politica de reservación">
        <p>
          Las fotografías en la Web, tales como marcas y modelos mostrados son
          meramente ilustrativas. Los vehículos solamente se pueden reservar por
          categoría (ACRISS), al menos que la disponibilidad de un modelo en
          específico se haya confirmado normalmente, sin embargo, garantiza
          únicamente la categoría reservada.
        </p>
        <p>
          En caso de no encontrarse el auto disponible al momento de hacer el
          contrato se asignará otro auto de la misma categoría, de no existir
          otro auto de la misma categoría se ofrecerá un auto de la categoría
          superior al reservado sin costo alguno.
        </p>
        <p>
          Las unidades deberán ser devueltas en condiciones normales al término
          del arrendamiento.
        </p>
        <p>
          Cualquier faltante en la gasolina y daños serán cobrados en forma
          adicional a la renta.
        </p>
      </RentPoint>
      <RentPoint topic="Politica de seguros">
        <p>
          En caso de accidente el cliente tendrá la responsabilidad de reportar
          el percance de inmediato a la oficina de renta o a los teléfonos de
          asistencia y firmar debidamente el reporte de accidente al finalizar
          la renta, de lo contrario la cobertura será inválida y se cargará el
          monto correspondiente valuado del daño directamente al cliente.
        </p>
        <p>
          En caso de que el cliente no respete las cláusulas del contrato de
          arrendamiento que firmo en la oficina donde se le entrego el auto la
          cobertura o seguros vendidos serán nulos.
        </p>
      </RentPoint>
    </section>
  );
};

export default PoliciesSection;
