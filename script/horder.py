import math

def make_exponentiater(e):
    return lambda (m): math.pow(m, e)
	
square = make_exponentiater(2)

def index(req, e):
    val = int(e)
	
    return square(val)

