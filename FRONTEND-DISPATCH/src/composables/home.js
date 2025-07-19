import { ParticlesPerson, ParticleVehicle, StreetLines } from "@/utils/home";
import { onMounted, ref } from "vue";

export function useBackgroundHome({ numberOfPeople, numberOfVehicles }) {
  const canvas = ref(null);

  onMounted(() => {
    const canvasElement = canvas.value;
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;

    canvasElement.width = width;
    canvasElement.height = height;
    const ctx = canvasElement.getContext("2d");

    // Dibujamos a las personas
    const people = [];
    for (let i = 0; i < numberOfPeople; i++) {
      people.push(new ParticlesPerson(Math.random() * width, Math.random() * height));
    }

    // Dibujamos a los vehiculos para el primer trayecto <- Trayecto 1
    const vehiclesForStreet1 = [];
    for (let i = 0; i < numberOfVehicles; i++) {
      vehiclesForStreet1.push(
        new ParticleVehicle(
          {
            type: "circular",
            points: {
              centerX: width / width,
              centerY: height / height,
              radius: 250,
            },
          },
          0.002,
          "#F7D432",
        ),
      );
    }

    // Dibujamos a los vehiculos para el segundo trayecto <- Trayecto 2
    const vehiclesForStreet2 = [];
    for (let i = 0; i < numberOfVehicles; i++) {
      vehiclesForStreet2.push(
        new ParticleVehicle(
          {
            type: "circular",
            points: {
              centerX: width,
              centerY: height,
              radius: 250,
            },
          },
          0.002,
          "#F7D432",
        ),
      );
    }

    // Dibujamos a los vehiculos para el tercer trayecto <- Trayecto 3
    const vehiclesForStreet3 = [];
    for (let i = 0; i < numberOfVehicles; i++) {
      vehiclesForStreet3.push(
        new ParticleVehicle(
          {
            type: "straight",
            points: {
              start: {
                x: width / 3,
                y: 0,
              },
              end: {
                x: width / 3,
                y: height,
              },
            },
          },
          0.002,
          "#F7D432",
        ),
      );
    }
    // Dibujamos a los vehiculos para el tercer trayecto <- Trayecto 3
    const vehiclesForStreet6 = [];
    for (let i = 0; i < numberOfVehicles; i++) {
      vehiclesForStreet6.push(
        new ParticleVehicle(
          {
            type: "straight",
            points: {
              start: {
                x: 0,
                y: (height / 3) * 2,
              },
              end: {
                x: width,
                y: (height / 3) * 2,
              },
            },
          },
          0.002,
          "#F7D432",
        ),
      );
    }

    // Creamos la funcion para dibujar el fondo
    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Dibujamos a las personas
      people.forEach((person) => {
        person.draw(ctx);
        person.float();
      });

      // Dibujamos las lineas de la calle
      // Primer circulo en la linea superior izquierda de la pantalla
      StreetLines.drawCircle(250, 0, 0, ctx); // Trayecto 1
      // Segundo circulo en la linea inferior derecha de la pantalla
      StreetLines.drawCircle(250, width, height, ctx); // Trayecto 2
      // Dibujamos 2 lineas vertical alrededor del medio de la pantalla
      StreetLines.drawStraightLine(width / 3, 0, width / 3, height, ctx); // Trayecto 3
      StreetLines.drawStraightLine((width / 3) * 2, 0, (width / 3) * 2, height, ctx); // Trayecto 4
      // Dibujamos 2 lineas horizontales alrededor del medio de la pantalla
      StreetLines.drawStraightLine(0, height / 3, width, height / 3, ctx); // Trayecto 5
      StreetLines.drawStraightLine(0, (height / 3) * 2, width, (height / 3) * 2, ctx); // Trayecto 6

      // Dibujamos a los vehiculos
      // Para el primer trayecto <- Trayecto 1
      vehiclesForStreet1.forEach((vehicle) => {
        vehicle.draw(ctx);
        vehicle.move();
      });
      // Para el segundo trayecto <- Trayecto 2
      vehiclesForStreet2.forEach((vehicle) => {
        vehicle.draw(ctx);
        vehicle.move();
      });
      // Para el tercer trayecto <- Trayecto 3
      vehiclesForStreet3.forEach((vehicle) => {
        vehicle.draw(ctx);
        vehicle.move();
      });
      // Para el sexto trayecto <- Trayecto 6
      vehiclesForStreet6.forEach((vehicle) => {
        vehicle.draw(ctx);
        vehicle.move();
      });

      requestAnimationFrame(animate);
    }

    animate();
  });

  return {
    canvas,
  };
}
