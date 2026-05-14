-- SELECT * FROM cars;

-- SELECT brand,model,color,price FROM cars WHERE color='black';

-- SELECT brand,model,color,price FROM cars 
--     WHERE car_condition>=3;

-- SELECT brand,model,color,price FROM cars 
--     WHERE year!=1965;
-- SELECT brand,model,color,price FROM cars 
--     WHERE year<>1965;

-- SELECT brand,model,color,price FROM cars 
--     WHERE color!='yellow';

-- SELECT brand,model,color,price FROM cars 
--     WHERE color LIKE '%green$%';

-- SELECT brand,model,color,price FROM cars 
--     WHERE color NOT LIKE '%green$%';

-- SELECT brand,model,color,price FROM cars 
--     WHERE color LIKE '%Ford%';

-- SELECT brand,model,color,price FROM cars 
--     WHERE color LIKE '%Ford%'
--     AND price<50000;

-- SELECT brand,model,year,price FROM cars
--     WHERE year BETWEEN 1980 AND 1989

-- SELECT brand,model,year,price FROM cars
--     WHERE price BETWEEN 20000 AND 60000
--     AND car_condition BETWEEN 1 AND 3
--     AND color LIKE '%red%';

-- SELECT brand,model,year,price FROM cars
--     WHERE price<250000
--     OR brand='Porsche';

-- SELECT brand,model,year,price FROM cars
--     WHERE (price<250000
--     OR brand='Porsche')
--     AND car_condition>3

-- SELECT brand, model, price, sold FROM cars
--     WHERE brand IN ('Ford','Chevrolet','Ferrari')
--     AND sold IS FALSE;

-- SELECT brand, model, price, sold FROM cars
--     WHERE year IN (1961,1963.1965,1967,1969)
--     and car_condition>=3
--     and sold=FALSE

-- SELECT brand, model, price, sold FROM cars
--     WHERE (
--         brand NOT IN ('Ford','Chevrolet','Ferrari')
--         OR price < 50000
--     )


-- SELECT brand, model, price, sold FROM cars
--     WHERE color LIKE '%red%'
--     AND brand != 'Ferrari'
--     AND sold IS FALSE;

-- SELECT brand, model, price, sold FROM cars
--     WHERE color NOT IN ('red','blue','white')
--     AND brand NOT IN ('Jaguar','Bentley')
--     AND sold IS FALSE;

-- SELECT brand, model, price, sold FROM cars
--     WHERE (brand LIKE '%Dodge%'
--     AND year BETWEEN 1960 AND  1969)
--     OR (brand IN ('Ford','Triump')
--     AND year BETWEEN 1970 AND 1979)
--     AND sold IS FALSE;

-- SELECT brand,model, year FROM cars
--     ORDER BY brand DESC,year; 

-- SELECT brand,model, car_condition,price FROM cars
--     ORDER BY car_condition DESC, price;

-- SELECT brand,model, car_condition,price FROM cars
--     WHERE sold IS FALSE
--     AND car_condition !=5
--     ORDER BY car_condition DESC, price;

-- SELECT brand,model,year,price FROM cars
--     WHERE color LIKE '%red%'
--     AND sold IS FALSE
--     ORDER BY price 
--     LIMIT 5;

-- SELECT COUNT(*) AS FROM cars
--     WHERE sold IS TRUE;

-- SELECT SUM(price) AS total_earnings FROM cars
--     WHERE sold IS FALSE;

-- SELECT MAX(price) AS most_expensive FROM cars
--     WHERE sold IS TRUE;

-- SELECT AVG(price) FROM cars
--     WHERE brand='Bentley';
-- SELECT FLOOR(AVG(price)) Average FROM cars
--     WHERE brand='Bentley';

-- SELECT CEIL(AVG(price)) as avg,
--     MIN(price),
--     MAX(price) 
-- FROM cars
--     WHERE sold IS TRUE;

-- SELECT brand, COUNT(brand) AS brand_count FROM cars
--     GROUP BY brand;

-- SELECT car_condition, COUNT(car_condition) FROM cars
--     GROUP BY car_condition;


-- SELECT brand,COUNT(brand), CEIL(AVG(price)) AS AVG FROM cars
--     WHERE SOLD IS TRUE
--     GROUP BY brand;
-- SELECT brand,COUNT(brand), CEIL(AVG(price)) AS AVG FROM cars
--     WHERE SOLD IS TRUE
--     GROUP BY brand
--     HAVING COUNT(brand)>1;

-- SELECT year,COUNT(year) AS car_Count,MAX(price),MIN(price) FROM cars
--     WHERE SOLD IS TRUE
--     GROUP BY year
--     HAVING COUNT(year)>1
--     ORDER BY car_Count;

-- SELECT brand,model,year FROM cars
--     WHERE SOLD IS FALSE
--     ORDER BY year
--     LIMIT 5;

-- SELECT color,COUNT(color) FROM cars
--     WHERE SOLD IS FALSE
--     GROUP BY color
--     HAVING COUNT(color)>2
--     ORDER BY COUNT(color) DESC

-- INSERT INTO cars (
--     brand,model,price,year,color,condition,sold
-- )VALUES(
--     'Ford','Escort RS2000',1978,39000,'blue',4,FALSE
-- ),(
--     'Aston Martin','v8 Vantage',1977,145000,'dark green',5,FALSE
-- )

-- UPDATE cars SET 
--     sold =TRUE
-- WHERE brand='Ford'
--     AND model='Escort RS2000'

/*
    Update the record for the Aston Martin DB4 with ID 14
    set the condition to 5
    and the price to 465000
*/

-- UPDATE cars
-- SET
--     condition = 5,
--     price = 465000
-- WHERE id = 14;

-- UPDATE cars
-- SET
--     condition = 1,
--     price = 10000
-- WHERE brand='Porsche'
--     AND sold=TRUE;

DELETE FROM cars
    WHERE sold=TRUE;
