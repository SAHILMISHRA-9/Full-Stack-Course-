import { PGlite } from "@electric-sql/pglite";
import fs from "fs";

(async () => {

    const db = new PGlite();

    await db.exec(`
        DROP TABLE IF EXISTS cars;

        CREATE TABLE cars (
            id SERIAL PRIMARY KEY,
            brand TEXT,
            model TEXT,
            year INTEGER,
            price INTEGER,
            color TEXT,
            car_condition INTEGER,
            solid BOOLEAN
        );

        INSERT INTO cars (
            brand,
            model,
            year,
            price,
            color,
            car_condition,
            solid
        ) VALUES
            ('Ford', 'Mustang', 1965, 45000, 'white', 4, false),
            ('Chevrolet', 'Camaro', 1970, 48000, 'red', 2, false),
            ('Dodge', 'Charger', 1969, 58000, 'black', 4, true);
    `);

    const query = fs.readFileSync("query.sql", "utf8");

    const response = await db.query(query);

    console.clear();
    console.log(response);

})();