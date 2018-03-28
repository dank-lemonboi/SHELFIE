select * from bins
where shelf = $1 and bin = $2
order by id