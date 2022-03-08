import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { Poster } from "../src/posters/entities/poster.entity";

export class Poster1646704468087 implements MigrationInterface {
  public async up(): Promise<void> {
    const repositry = getRepository(Poster);

    await repositry.save([
      {
        name: "The Sun",
        type: "DIRECTORY",
        children: [
          {
            name: "The Sun A",
            type: "FILE",
            filePath: "poster_sun_front_a.jpg",
          },
          {
            name: "The Sun B",
            type: "FILE",
            filePath: "poster_sun_front_b.jpg",
          },
          {
            name: "The Sun C",
            type: "FILE",
            filePath: "poster_sun_front_c.jpg",
          },
          {
            name: "The Sun D",
            type: "FILE",
            filePath: "poster_sun_front_d.jpg",
          },
        ],
      },
      {
        name: "Mercury",
        type: "DIRECTORY",
        children: [
          {
            name: "Mercury A",
            type: "FILE",
            filePath: "poster_mercury_front_a.jpg",
          },
          {
            name: "Mercury B",
            type: "FILE",
            filePath: "poster_mercury_front_b.jpg",
          },
          {
            name: "Mercury C",
            type: "FILE",
            filePath: "poster_mercury_front_c.jpg",
          },
        ],
      },
      {
        name: "Venus",
        type: "DIRECTORY",
        children: [
          {
            name: "Venus A",
            type: "FILE",
            filePath: "poster_venus_front_a.jpg",
          },
          {
            name: "Venus B",
            type: "FILE",
            filePath: "poster_venus_front_b.jpg",
          },
        ],
      },
      {
        name: "Earth",
        type: "DIRECTORY",
        children: [
          {
            name: "Earth A",
            type: "FILE",
            filePath: "poster_earth_front_a.jpg",
          },
          {
            name: "Earth B",
            type: "FILE",
            filePath: "poster_earth_front_b.jpg",
          },
          {
            name: "Earth C",
            type: "FILE",
            filePath: "poster_earth_front_c.jpg",
          },
          {
            name: "Earth D",
            type: "FILE",
            filePath: "poster_earth_front_d.jpg",
          },
          {
            name: "Earth E",
            type: "FILE",
            filePath: "poster_earth_front_e.jpg",
          },
          {
            name: "Earth F",
            type: "FILE",
            filePath: "poster_earth_front_f.jpg",
          },
          {
            name: "Earth's Moon",
            type: "DIRECTORY",
            children: [
              {
                name: "Moon A",
                type: "FILE",
                filePath: "poster_moon_front_a.jpg",
              },
              {
                name: "Moon B",
                type: "FILE",
                filePath: "poster_moon_front_b.jpg",
              },
              {
                name: "Moon C",
                type: "FILE",
                filePath: "poster_moon_front_c.jpg",
              },
              {
                name: "Moon D",
                type: "FILE",
                filePath: "poster_moon_front_d.jpg",
              },
              {
                name: "Moon E",
                type: "FILE",
                filePath: "poster_moon_front_e.jpg",
              },
              {
                name: "Moon F",
                type: "FILE",
                filePath: "poster_moon_front_f.jpg",
              },
              {
                name: "Moon G",
                type: "FILE",
                filePath: "poster_moon_front_g.jpg",
              },
              {
                name: "Moon H",
                type: "FILE",
                filePath: "poster_moon_front_h.jpg",
              },
              {
                name: "Moon I",
                type: "FILE",
                filePath: "poster_moon_front_i.jpg",
              },
            ],
          },
        ],
      },
      {
        name: "Mars",
        type: "DIRECTORY",
        children: [
          {
            name: "Mars A",
            type: "FILE",
            filePath: "poster_mars_front_a.jpg",
          },
          {
            name: "Mars B",
            type: "FILE",
            filePath: "poster_mars_front_b.jpg",
          },
          {
            name: "Mars C",
            type: "FILE",
            filePath: "poster_mars_front_c.jpg",
          },
        ],
      },
      {
        name: "Jupiter",
        type: "DIRECTORY",
        children: [
          {
            name: "Jupiter A",
            type: "FILE",
            filePath: "poster_jupiter_front_a.jpg",
          },
          {
            name: "Jupiter B",
            type: "FILE",
            filePath: "poster_jupiter_front_b.jpg",
          },
          {
            name: "Jupiter C",
            type: "FILE",
            filePath: "poster_jupiter_front_c.jpg",
          },
          {
            name: "Io",
            type: "DIRECTORY",
            children: [
              {
                name: "Io A",
                type: "FILE",
                filePath: "poster_io_front_a.jpg",
              },
              {
                name: "Io B",
                type: "FILE",
                filePath: "poster_io_front_b.jpg",
              },
            ],
          },
          {
            name: "Europa",
            type: "DIRECTORY",
            children: [
              {
                name: "Europa A",
                type: "FILE",
                filePath: "poster_europa_front_a.jpg",
              },
              {
                name: "Europa B",
                type: "FILE",
                filePath: "poster_europa_front_b.jpg",
              },
            ],
          },
          {
            name: "Ganymede",
            type: "DIRECTORY",
            children: [
              {
                name: "Ganymade A",
                type: "FILE",
                filePath: "poster_ganymade_front_a.jpg",
              },
            ],
          },
          {
            name: "Callisto",
            type: "DIRECTORY",
            children: [
              {
                name: "Callisto A",
                type: "FILE",
                filePath: "poster_callisto_front_a.jpg",
              },
              {
                name: "Callisto B",
                type: "FILE",
                filePath: "poster_callisto_front_b.jpg",
              },
            ],
          },
        ],
      },
      {
        name: "Saturn",
        type: "DIRECTORY",
        children: [
          {
            name: "Saturn A",
            type: "FILE",
            filePath: "poster_saturn_front_a.jpg",
          },
          {
            name: "Saturn B",
            type: "FILE",
            filePath: "poster_saturn_front_b.jpg",
          },
          {
            name: "Saturn C",
            type: "FILE",
            filePath: "poster_saturn_front_c.jpg",
          },
          {
            name: "Saturn D",
            type: "FILE",
            filePath: "poster_saturn_front_d.jpg",
          },
          {
            name: "Titan",
            type: "DIRECTORY",
            children: [
              {
                name: "Titan A",
                type: "FILE",
                filePath: "poster_titan_front_a.jpg",
              },
              {
                name: "Titan B",
                type: "FILE",
                filePath: "poster_titan_front_b.jpg",
              },
              {
                name: "Titan C",
                type: "FILE",
                filePath: "poster_titan_front_c.jpg",
              },
            ],
          },
          {
            name: "Enceladus",
            type: "DIRECTORY",
            children: [
              {
                name: "Enceladus A",
                type: "FILE",
                filePath: "poster_enceladus_front_a.jpg",
              },
              {
                name: "Enceladus B",
                type: "FILE",
                filePath: "poster_enceladus_front_b.jpg",
              },
              {
                name: "Enceladus C",
                type: "FILE",
                filePath: "poster_enceladus_front_c.jpg",
              },
              {
                name: "Enceladus D",
                type: "FILE",
                filePath: "poster_enceladus_front_d.jpg",
              },
            ],
          },
        ],
      },
      {
        name: "Uranus",
        type: "DIRECTORY",
        children: [
          {
            name: "Uranus A",
            type: "FILE",
            filePath: "poster_uranus_front_a.jpg",
          },
          {
            name: "Uranus B",
            type: "FILE",
            filePath: "poster_uranus_front_b.jpg",
          },
          {
            name: "Uranus C",
            type: "FILE",
            filePath: "poster_uranus_front_c.jpg",
          },
        ],
      },
      {
        name: "Neptune",
        type: "DIRECTORY",
        children: [
          {
            name: "Neptune A",
            type: "FILE",
            filePath: "poster_neptune_front_a.jpg",
          },
          {
            name: "Neptune B",
            type: "FILE",
            filePath: "poster_neptune_front_b.jpg",
          },
        ],
      },
      {
        name: "Pluto",
        type: "DIRECTORY",
        children: [
          {
            name: "Pluto A",
            type: "FILE",
            filePath: "poster_pluto_front_a.jpg",
          },
          {
            name: "Pluto B",
            type: "FILE",
            filePath: "poster_pluto_front_b.jpg",
          },
          {
            name: "Pluto C",
            type: "FILE",
            filePath: "poster_pluto_front_c.jpg",
          },
        ],
      },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DELETE FROM "poster"`);
  }
}
