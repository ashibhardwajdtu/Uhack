import sys
import os
b = 1
while True:
    try:
        sys.stdin = open('input.txt','r')
        a = [int(e) for e in input().split()]
        print (a[0] + a[1])
        os.remove('input.txt')
    except:
        b = (b^1)
