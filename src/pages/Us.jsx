import React from "react";
import rocket from "../img/other/rocket.svg";

const Us = () => {
  return (
    <>
      <section>
        <p id="idTitle" className="fs__3">
          Juguetería Cósmica
        </p>
      </section>
      <section>
        <p>
          ¡Bienvenidos a Juguetería Cósmica, donde la diversión y la imaginación
          se unen en un viaje intergaláctico de juegos y juguetes! Somos más que
          una simple juguetería; somos un destino mágico donde los sueños de los
          niños y niñas despegan hacia nuevas fronteras llenas de color y
          creatividad.
        </p>
      </section>
      <section>
        <p className="titulo__card txt__center">Nuestra Historia</p>
        <p>
          Desde nuestro humilde inicio, hemos estado dedicados a llevar alegría
          a cada rincón del universo infantil. La historia de Juguetería Cósmica
          comenzó con la visión de crear un espacio único donde la curiosidad y
          la maravilla florecieran. Nos inspiramos en la infinita imaginación de
          los pequeños exploradores y diseñamos un lugar que refleje la
          diversidad y la magia de sus sueños.
        </p>
        <p>
          Desde entonces, hemos crecido y evolucionado, pero nuestra esencia
          sigue siendo la misma: proporcionar juguetes de alta calidad que
          fomentan el aprendizaje, la diversión y el desarrollo de habilidades.
          Nos enorgullece ser una juguetería que valora la creatividad, la
          innovación y la conexión entre padres e hijos.
        </p>
      </section>
      <section>
        <p className="titulo__card txt__center">Nuestros Valores</p>
        <p>
          En Juguetería Cósmica, nos esforzamos por cultivar un ambiente en el
          que cada niño se sienta especial. Nuestros valores fundamentales
          incluyen la calidad, la seguridad y la sostenibilidad. Seleccionamos
          cuidadosamente cada juguete en nuestro catálogo para garantizar que
          cumpla con los más altos estándares y sea seguro para el juego y la
          exploración.
        </p>
        <p>
          Además, nos preocupamos por el planeta que todos compartimos. Es por
          eso que nos comprometemos a ofrecer opciones sostenibles y respetuosas
          con el medio ambiente siempre que sea posible. Creemos que cada
          pequeña acción cuenta, y queremos inspirar a las nuevas generaciones a
          cuidar de nuestro hermoso hogar cósmico.
        </p>
      </section>
      <section>
        <p className="titulo__card txt__center">Ventas Online</p>
        <p>
          En Juguetería Cósmica, entendemos la importancia de la comodidad y la
          accesibilidad. Por eso, hemos llevado nuestra experiencia única de
          compras directamente a su hogar. A través de nuestra plataforma de
          ventas en línea, ahora puede explorar nuestro vasto universo de
          juguetes desde la comodidad de su sofá. ¡Hacer felices a los pequeños
          astronautas nunca fue tan fácil!
        </p>
      </section>
      <section>
        <p className="titulo__card txt__center">Nos Encuentran</p>
        <p>
          Estamos presentes en todos los rincones del ciberespacio, ¡y nos
          encantaría que nos visitaras! Nuestra juguetería cósmica está a solo
          un clic de distancia. Explora nuestro catálogo en línea, descubre
          nuestras ofertas exclusivas y déjate llevar por la emoción de elegir
          el juguete perfecto para esa ocasión especial.
        </p>
        <p>
          En Juguetería Cósmica, no solo vendemos juguetes; construimos
          recuerdos, estimulamos la imaginación y fomentamos el juego en equipo.
          Únete a nosotros en este viaje cósmico y descubre un mundo de
          diversión sin límites. ¡Esperamos que te unas a nuestra comunidad y
          que disfrutes del emocionante viaje que ofrecemos a cada pequeño
          aventurero!
        </p>
      </section>
      <section>
        <p className="titulo__card txt__center">
          ¡Gracias por ser parte de la familia de Juguetería Cósmica!
        </p>
      </section>
      <div className="rocket_container">
        <img src={rocket} alt="asd en movimiento"/>   
    </div>     
    </>
  );
};

export default Us;
