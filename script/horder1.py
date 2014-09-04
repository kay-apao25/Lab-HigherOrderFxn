import math

def make_exponentiater(e):
    return lambda (m): math.pow(m, e)
	
cube = make_exponentiater(3)

def index(req, e):
    val = int(e)
	
    return cube(val)

