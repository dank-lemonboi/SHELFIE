UPDATE bins
SET name = null, price = null
WHERE shelf = $1 AND bin = $2
returning *