import time
nums = [3,2,4]
target = 6
n = len(nums)
for i in range(n - 1): #primer for va desde 0 hasta n-1
     for j in range(i+1,n):# segundo for va desde 1 hasta n
          if((nums[j]+nums[i]) == target):
               print(i,j)
          #print(nums[j])
          #print(nums[i])
          #print("****")
    